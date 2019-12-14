const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Using this to retrieve sample feedback item
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "feedback" ORDER BY "id" ASC;';
    pool.query(queryText).then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting books', error);
      res.sendStatus(500);
    });
  });

  module.exports = router;