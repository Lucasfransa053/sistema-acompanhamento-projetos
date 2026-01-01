const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar no banco', err);
  } else {
    console.log('Banco de dados conectado');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS projetos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      custo REAL NOT NULL,
      status TEXT NOT NULL
    )
  `);
});

module.exports = db;
