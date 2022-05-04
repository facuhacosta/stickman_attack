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
  const data = req.body;
  console.log(req.body);
  pool.query('INSERT INTO "WEAPONS" SET $1', [data], (err, result) => {
    if (err) {
      res.send(err);
    };
    console.log(result);
    res.send(result);
  });
};

controller.listOne = (req, res) => {
  const { id } = req.params;
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

  pool.query('SELECT * FROM "WEAPONS"', (err, result) => {
    if (err) {
      res.json(err);
    };
    res.send(result.rows);
    console.log(result.rows);
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