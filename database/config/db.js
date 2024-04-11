import postgres from "postgres";

const {
  PROSTGRES_USER,
  PROSTGRES_HOST,
  PROSTGRES_DB,
  PROSTGRES_PASSWORD,
  PROSTGRES_PORT,
} = process.env;
export const sql = postgres({
  user: PROSTGRES_USER,
  host: PROSTGRES_HOST,
  db: PROSTGRES_DB,
  password: PROSTGRES_PASSWORD,
  port: PROSTGRES_PORT,
});
