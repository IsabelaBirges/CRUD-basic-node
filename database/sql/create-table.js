import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//   console.log("Tabela Apagada!");
// });

sql`
    CREATE TABLE videos (
        id          VARCHAR PRIMARY KEY,
        title       VARCHAR,
        description VARCHAR,
        duration    INTEGER
    );
`.then(() => {
  console.log("Tabela criada!");
});
