// frontend/src/services/emailService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/email'; // Substitua pelo URL da sua API

export const sendEmail = async ({ email, subject, body }) => {
  try {
    const response = await axios.post(`${API_URL}/send`, { email, subject, body });
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return { success: false };
  }
};

export const getEmailRecords = async () => {
  try {
    const response = await axios.get(`${API_URL}/records`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar registros de e-mails:', error);
    return [];
  }
};
