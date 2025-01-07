// backend/config/dbConfig.js
const mysql = require('mysql2');

// Conectar ao banco de dados MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conexão ao banco de dados bem-sucedida!');
});

module.exports = db;
