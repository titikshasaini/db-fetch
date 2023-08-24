const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/data');

const app = express();
const cors = require('cors');
// Parse incoming request bodies
app.use(cors());
app.use(bodyParser.json());
app.use('/api', dataRoutes);

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'user123',
  database: 'testdb'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Define API routes here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
