const jwt = require('jsonwebtoken')
const pool = require('../database');
const bcrypt = require('bcrypt');

const userController = {}

userController.signIn = async (req, res) => {
  const data = req.body;
  
  const { rows } = await pool.query('SELECT * FROM "USERS" WHERE username = $1;', [data.username]);

  if (!rows[0]) {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 5);
      const { rows } = await pool.query('INSERT INTO "USERS" (username, password) VALUES ($1, $2);', [data.username, hashedPassword]);
      return res.status(200).json(rows[0]);
    }  
    catch (error) {
      res.json(error);
    }
  } else {
    return res.status(400).json({message: 'username is already taken'})
  }
}

userController.logIn = async (req, res) => {
  const {username, password} = req.body;
  try {
    const { rows } = await pool.query('SELECT * FROM "USERS" WHERE username = $1;', [username]);
    const user = rows[0];
    const correctPassword = user
    ? await bcrypt.compare(password, user.password)
    : false;
    if (!correctPassword) {
      return res.status(401).json({ error: 'incorrect user or password'});
    };

    const userForToken = {
      user_id: user.user_id,
      username: user.username,
      is_admin: user.is_admin
    };

    const token = jwt.sign(userForToken, process.env.SECRET);
    res.send({
      user_id: user.user_id,
      username: user.username,
      money: user.money,
      waves: user.max_waves,
      token})
  } catch (error) {
    res.json(error);
  }
  
}

userController.update = async (req, res) => {
  const authorization = req.get('authorization');
  let token = '';

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7);
  };
  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (e) {
    console.log(e);
  }
  if (!token || !decodedToken.user_id || !decodedToken.is_admin) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
  
  try {
    const { rows } = await pool.query('SELECT * FROM "USERS" WHERE username = $1;', [decodedToken.username]);
    const user = rows[0];
    const userForToken = {
      user_id: user.user_id,
      username: user.username,
      is_admin: user.is_admin
    };

    const token = jwt.sign(userForToken, process.env.SECRET);
    res.send({
      user_id: user.user_id,
      username: user.username,
      money: user.money,
      waves: user.max_waves,
      token
    })
  } catch (error) {
    res.send(error)
  }
}

userController.victory = async (req, res) => {
  const authorization = req.get('authorization');
  const data = Object.values(req.body)
  let token = '';

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7);
  };
  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (e) {
    console.log(e);
  }
  if (!token || !decodedToken.user_id || !decodedToken.is_admin) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  try {
    const { rows } = pool.query('UPDATE "USERS" SET money=$1, max_waves=$2 WHERE username = $3', [...data, decodedToken.username])
    res.send(rows[0])
  } catch (error) {
    res.send(error)
  }

}

module.exports = userController