const fs = require('fs');
const path = require('path');
const moment = require('moment'); // Para manipulação de datas
const json2csv = require('json2csv').parse; // Para conversão de JSON para CSV

// Função para gerar relatório CSV dos emails enviados
const generateEmailReport = (emailData) => {
  // Monta os campos do relatório com base nos dados fornecidos
  const reportData = emailData.map(email => ({
    subject: email.subject,
    to: email.to,
    sentAt: moment(email.sentAt).format('YYYY-MM-DD HH:mm:ss'),
    status: email.status,
    openRate: email.openRate,
    clickRate: email.clickRate
  }));

  // Converte o JSON para CSV
  const csv = json2csv(reportData);
  const filePath = path.join(__dirname, `../reports/email_report_${moment().format('YYYYMMDD_HHmmss')}.csv`);

  // Salva o arquivo CSV
  fs.writeFileSync(filePath, csv);

  return filePath; // Retorna o caminho do arquivo gerado
};

// Exemplo de uso
const emailDataExample = [
  {
    subject: 'Promoção de Natal',
    to: 'cliente@exemplo.com',
    sentAt: new Date(),
    status: 'Enviado',
    openRate: '85%',
    clickRate: '20%'
  },
  {
    subject: 'Desconto de Ano Novo',
    to: 'outrocliente@exemplo.com',
    sentAt: new Date(),
    status: 'Enviado',
    openRate: '90%',
    clickRate: '25%'
  }
];

// Gera o relatório
const filePath = generateEmailReport(emailDataExample);
console.log(`Relatório gerado: ${filePath}`);
