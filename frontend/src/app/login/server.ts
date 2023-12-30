//Coller le code envoyé sur whatsapp
//import express, {Request,Response} from 'express'
//import express, { Request, Response } from 'express';

import * as express from 'express';
import { Request, Response } from 'express';

import { Pool } from 'pg';

const app = express();
const port = 3000;

// Connexion à la base de données PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'anki_node',
  password: 'postgres_esilv',
  port: 5432,
});

app.use(express.json());

