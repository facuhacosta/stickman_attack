const jwt = require('jsonwebtoken')
const pool = require('../database')
const bcrypt = require('bcrypt')

const userController = {}

userController.signup = async (req, res) => {
  const data = req.body

  const usernameRegex = /^((?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9]))(?=.{6,})/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

  if (!usernameRegex.test(data.username)) {
    return res.status(400).send({ error: 'Your username can contain letters and numbers, and should be at least 6 characters' })
  }

  if (!passwordRegex.test(data.password)) {
    return res.status(400).send({ error: 'Your password should have at least one of each: Upper and lower character, and number.Also be longer than 8 characters' })
  }

  if (req.password !== req.confirmPassword) {
    return res.status(400).send({ error: 'Your password is not the same' })
  }

  let rows
  try {
    rows = (await pool.query('SELECT * FROM "USERS" WHERE username = $1;', [data.username])).rows
  } catch (error) {
    res.status(402).send({ error: 'error' })
  }

  if (!rows[0]) {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 5)
      const { rows } = await pool.query('INSERT INTO "USERS"(username, password) VALUES ($1, $2) RETURNING user_id, username, is_admin, money, max_waves, current_weapon', [data.username, hashedPassword])
      const user = rows[0]
      const userForToken = {
        user_id: user.user_id,
        username: user.username,
        is_admin: user.is_admin
      }

      const token = jwt.sign(userForToken, process.env.SECRET)
      res.send({
        user_id: user.user_id,
        username: user.username,
        money: user.money,
        waves: user.max_waves,
        weapon: user.current_weapon,
        token
      })
    } catch (error) {
      res.status(401).send(error)
    }
  } else {
    console.log('else')
    return res.status(400).send({ error: 'username is already taken' })
  }
}

userController.logIn = async (req, res) => {
  const { username, password } = req.body
  try {
    const { rows } = await pool.query('SELECT * FROM "USERS" WHERE username = $1;', [username])
    const user = rows[0]
    const correctPassword = user
      ? await bcrypt.compare(password, user.password)
      : false
    if (!correctPassword) {
      return res.status(401).json({ error: 'incorrect user or password' })
    };

    const userForToken = {
      user_id: user.user_id,
      username: user.username,
      is_admin: user.is_admin
    }

    const token = jwt.sign(userForToken, process.env.SECRET)
    res.send({
      user_id: user.user_id,
      username: user.username,
      money: user.money,
      waves: user.max_waves,
      weapon: user.current_weapon,
      token
    })
  } catch (error) {
    res.json(error)
  }
}

userController.update = async (req, res) => {
  const authorization = req.get('authorization')
  let token = ''

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  };
  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, process.env.SECRET)
  } catch (e) {
    console.log(e)
  }
  if (!token || !decodedToken.user_id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  try {
    const { rows } = await pool.query('SELECT * FROM "USERS" WHERE username = $1;', [decodedToken.username])
    const user = rows[0]
    const userForToken = {
      user_id: user.user_id,
      username: user.username,
      is_admin: user.is_admin
    }

    const token = jwt.sign(userForToken, process.env.SECRET)
    res.send({
      user_id: user.user_id,
      username: user.username,
      money: user.money,
      waves: user.max_waves,
      weapon: user.current_weapon,
      token
    })
  } catch (error) {
    res.send(error)
  }
}

userController.victory = async (req, res) => {
  const authorization = req.get('authorization')
  const data = Object.values(req.body)
  let token = ''

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  };
  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, process.env.SECRET)
  } catch (e) {
    console.log(e)
  }
  if (!token || !decodedToken.user_id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  try {
    const { rows } = pool.query('UPDATE "USERS" SET money=$1, max_waves=$2 WHERE username = $3', [...data, decodedToken.username])
    res.send(rows[0])
  } catch (error) {
    res.send(error)
  }
}

userController.buyWeapon = async (req, res) => {
  const authorization = req.get('authorization')
  const { weapon } = req.body
  let token = ''

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  };
  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, process.env.SECRET)
  } catch (e) {
    console.log(e)
  }
  if (!token || !decodedToken.user_id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  let user
  try {
    user = (await pool.query('SELECT * FROM "USERS" WHERE username = $1;', [decodedToken.username])).rows[0]
  } catch (error) {
    res.status(402).send({ error: 'error' })
  }

  const moneyLeft = user.money - weapon.value
  console.log(user.money)
  console.log(weapon.value)
  if (moneyLeft >= 0) {
    try {
      const { rows } = pool.query('UPDATE "USERS" SET current_weapon=$1, money=$2 WHERE username = $3 RETURNING user_id, username, is_admin, money, max_waves, current_weapon', [weapon.id, moneyLeft, decodedToken.username])
      res.send(rows[0])
    } catch (error) {
      res.send(error)
    }
  } else {
    res.send({ error: 'not enough money' })
  }
}

module.exports = userController
