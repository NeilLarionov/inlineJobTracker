const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();  // Load environment variables from .env

const app = express();
app.use(cors());
app.use(express.json());  // Parse JSON data

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,  // PostgreSQL connection string from .env
});

// Sample route to test the server
app.get('/', (req, res) => {
  res.send('Crew Scheduling API');
});

// Create more routes here as we add functionality

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});