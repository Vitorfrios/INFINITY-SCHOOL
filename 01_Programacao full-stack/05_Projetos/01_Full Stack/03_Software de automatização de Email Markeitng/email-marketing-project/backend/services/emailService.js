// backend/services/emailService.js
const nodemailer = require('nodemailer');

// Configuração do transporte de email
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Pode ser alterado para outro serviço de e-mail
  auth: {
    user: process.env.EMAIL_USER,   // Defina suas credenciais no arquivo .env
    pass: process.env.EMAIL_PASS    // Defina suas credenciais no arquivo .env
  }
});

// Função para enviar email
function sendEmail(email, subject, body, callback) {
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Defina seu e-mail de origem no arquivo .env
    to: email,
    subject: subject,
    text: body  // Envia o corpo do e-mail em formato texto
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, info);
  });
}

module.exports = { sendEmail };
