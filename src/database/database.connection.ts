import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
} = process.env;
  
const connection = new Pool({
  host: DB_HOST || "localhost",
  port: parseInt(DB_PORT) || 5432,
  user: DB_USER || "postgres",
  password: DB_PASSWORD || "postgres",
  database: DB_NAME || "poc-ts"
});
  
export default connection;