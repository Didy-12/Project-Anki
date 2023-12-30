import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import { Pool } from 'pg';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configure the PostgreSQL connection
const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

// API endpoint for user registration
app.post('/inscription', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
    res.json({ success: true, user: result.rows[0] });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
