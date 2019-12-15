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

  router.post('/', (req,res) => {
    let newFeedBack = req.body;
    console.log('adding feedback', newFeedBack);

    let queryText = `INSERT INTO "feedback" (feeling, understanding, support, comments)
    VALUES ($1,$2,$3,$4);`;
    pool.query(queryText, [newFeedBack.feeling, newFeedBack.understanding, 
      newFeedBack.support, newFeedBack.comments])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log('error adding feedback', error);
        res.sendStatus(500);
      });
  });

  module.exports = router;