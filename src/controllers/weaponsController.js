const pool = require('../database');
const jwt = require('jsonwebtoken');

const weaponsController = {};

weaponsController.delete = async (req, res) => {
  const {id} = req.params;
  try {
    const {rows} = await pool.query('DELETE FROM "WEAPONS" WHERE id = $1', [id]);
    console.log(rows);
    if (rows) {
      res.send(rows);
    } else {
      res.status(400).json({error: 'item not found'})
    }
  } catch (error) {
    console.log(error);
  }
};

weaponsController.save = async (req, res) => {
  const data = Object.values(req.body);
  const authorization = req.get('authorization');
  let token = '';
  
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7);
  };
  console.log(token);
  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (e) {
    console.log(e);
  }
  console.log(decodedToken);
  if (!token || !decodedToken.user_id || !decodedToken.is_admin) {
    return res.status(401).json({error: 'token missing or invalid'})
  }

  try {
    const { rows } = await pool.query('INSERT INTO "WEAPONS"(name, damage, attack_speed, bullets, value, image) VALUES ($1, $2, $3 , $4 , $5, $6)', [...data])
    res.status(200).send();
  } catch (error) {
    res.send(err);
  }

};

weaponsController.listOne = async (req, res) => {
  const {id} = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM "WEAPONS" WHERE id = $1', [id])
    res.send(rows[0]);
  } catch (error) {
    console.log(error);
  }
};

weaponsController.list = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM "WEAPONS" ORDER BY value');
    res.send(rows);
  } catch (error) {
    res.json(error);
  }
};

weaponsController.update = async (req, res) => {
  const data = Object.values(req.body);
  try {
    const {rows} = await pool.query('UPDATE "WEAPONS" SET name=$2, damage=$3, attack_speed=$4, bullets=$5, value=$6, image=$7 WHERE id=$1', [...data])
    res.send(rows);
  } catch (error) {
    res.json(error);
  }
};

module.exports = weaponsController;