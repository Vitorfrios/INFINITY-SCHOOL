// backend/utils/cron.js
const cron = require('node-cron');
const emailService = require('../services/emailService'); // Serviço de envio de e-mail

// Agendar envio de e-mail todos os dias à meia-noite
cron.schedule('0 0 * * *', async () => {
  try {
    console.log('Iniciando o envio de e-mails programados...');
    
    // Aqui, você pode definir uma lista de emails para envio ou pegar do banco de dados
    const emails = await emailService.getScheduledEmails(); // Método para pegar e-mails agendados
    emails.forEach(async (email) => {
      await emailService.sendEmail(email); // Envia os e-mails agendados
    });

    console.log('Envio de e-mails agendados concluído.');
  } catch (error) {
    console.error('Erro ao agendar envio de e-mails:', error);
  }
});
