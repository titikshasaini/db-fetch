const express = require('express');

const router = express.Router();
const db = require('../server'); // Importing database connection setup

// Define API endpoints
router.get('/data', (req, res) => {
  const query = 'SELECT * FROM data';
  console.log(db);
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
