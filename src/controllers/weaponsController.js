const controller = {};


controller.delete = (req, res) => {
  const {id} = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM weapons WHERE id = ?', [id], (err, rows) => {
      if (err) {
        res.json(err);
      };
      res.send({status: 'OK'});
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, conn) => {
    if (err) {
      res.send(err);
    };
    conn.query('INSERT INTO weapons set ?', [data], (err, weapon) => {
      if (err) {
        res.send(err);
      };
      console.log(weapon);
      res.send(weapon);
    });
  });
};

controller.listOne = (req, res) => {
  const { id } = req.params;

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM weapons WHERE id = ?', [id], (err, weapon) => {
      if (err) {
        res.json(err);
      };
      res.send(weapon[0]);
    });
  });
};

controller.list = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM weapons', (err, weapons) => {
      if (err) {
        res.json(err);
      };
      res.send(weapons);
    });
  });
};

controller.update = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, conn) => {
    if (err) {
      res.send(err);
    };
    conn.query('INSERT INTO weapons set ?', [data], (err, weapon) => {
      if (err) {
        res.send(err);
      };
      console.log(weapon);
      res.send(weapon);
    });
  });
};

module.exports = controller;