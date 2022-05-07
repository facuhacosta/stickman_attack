const pool = require('../database');

const controller = {};

controller.delete = async (req, res) => {
  const {id} = req.params;
  pool.query('DELETE FROM "WEAPONS" WHERE id = $1', [id], (err, result) => {
    if (err) {
      res.json(err);
    };
    res.send({status: 'OK'});
  });
};

controller.save = (req, res) => {
  const data = Object.values(req.body);
  console.log(req.body);
  pool.query('INSERT INTO "WEAPONS"(name, damage, attack_speed, bullets, value, image) VALUES ($1, $2, $3 , $4 , $5, $6)', [...data], (err, result) => {
    if (err) {
      res.send(err);
    };
    console.log(result.rows);
    res.send(result.rows);
  });
};

controller.listOne = (req, res) => {
  const {id} = req.params;
  console.log(req.params);
  pool.query('SELECT * FROM "WEAPONS" WHERE id = $1', [id], (err, result) => {
    if (err) {
      res.json(err);
    };
    res.send(result.rows[0]);
  });
};

controller.list = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  pool.query('SELECT * FROM "WEAPONS" ORDER BY id', (err, result) => {
    if (err) {
      res.json(err);
    };
    res.send(result.rows);
    // console.log(result.rows);
  });
};

controller.update = (req, res) => {
  const data = req.body;
  console.log(req.body);
  pool.query('INSERT INTO "WEAPONS" set ?', [data], (err, result) => {
    if (err) {
      res.send(err);
    };
    console.log(result);
    res.send(result);
  });
};

module.exports = controller;