// backend/models/emailModel.js
const db = require('../config/dbConfig');

// Função para registrar o envio de e-mail no banco de dados
exports.createEmailRecord = (email, subject, body, status, callback) => {
  const query = 'INSERT INTO email_records (email, subject, body, status) VALUES (?, ?, ?, ?)';
  db.query(query, [email, subject, body, status], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Função para buscar todos os registros de e-mails
exports.getEmailRecords = (callback) => {
  const query = 'SELECT * FROM email_records';
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};
