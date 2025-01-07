// backend/tests/backend.test.js
const request = require('supertest');
const app = require('../app'); // Importa o app do servidor

describe('Testes da API', () => {
  
  // Teste para verificar se a API está respondendo
  it('Deve responder com status 200 na rota /api/email', async () => {
    const res = await request(app).get('/api/email');
    expect(res.status).toBe(200); // Verifica se o status da resposta é 200
  });

  // Teste para verificar a criação de um novo email
  it('Deve criar um email com sucesso', async () => {
    const emailData = {
      subject: 'Promoção Especial',
      to: 'cliente@dominio.com',
      body: 'Aproveite as promoções!',
    };

    const res = await request(app)
      .post('/api/email/send')
      .send(emailData);
    expect(res.status).toBe(201); // Verifica se a resposta foi 201 (Criado)
    expect(res.body).toHaveProperty('message', 'Email enviado com sucesso');
  });

  // Teste para verificar a lista de emails
  it('Deve retornar uma lista de emails', async () => {
    const res = await request(app).get('/api/email/list');
    expect(res.status).toBe(200); // Verifica se o status da resposta é 200
    expect(res.body).toBeInstanceOf(Array); // Verifica se a resposta é uma lista
  });

});
