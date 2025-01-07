const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cron = require('node-cron');
const emailService = require('./services/emailService');

const app = express();
app.use(bodyParser.json());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'email_marketing'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao banco de dados');
});

// Rota para enviar email
app.post('/send-email', (req, res) => {
  const { email, subject, body } = req.body;
  
  emailService.sendEmail(email, subject, body, (error, response) => {
    if (error) {
      res.status(500).send({ error: 'Erro ao enviar email' });
    } else {
      res.status(200).send({ message: 'Email enviado com sucesso' });
    }
  });
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
