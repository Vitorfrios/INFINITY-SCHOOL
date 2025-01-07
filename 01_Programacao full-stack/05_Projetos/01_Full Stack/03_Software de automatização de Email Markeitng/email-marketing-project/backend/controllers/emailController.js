// backend/controllers/emailController.js
const emailService = require('../services/emailService'); // Importando o serviço de envio de e-mail

// Função para disparar um email
exports.sendEmail = (req, res) => {
  const { email, subject, body } = req.body;

  // Validando os dados recebidos
  if (!email || !subject || !body) {
    return res.status(400).send({ error: 'Campos obrigatórios não preenchidos' });
  }

  emailService.sendEmail(email, subject, body, (error, response) => {
    if (error) {
      return res.status(500).send({ error: 'Erro ao enviar e-mail' });
    }
    return res.status(200).send({ message: 'E-mail enviado com sucesso' });
  });
};
