// frontend/src/components/EmailForm.js
import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendEmail({ email, subject, body });

    if (response.success) {
      setStatus('Email enviado com sucesso!');
    } else {
      setStatus('Falha ao enviar e-mail.');
    }
  };

  return (
    <div className="email-form">
      <h2>Enviar E-mail</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail do destinatário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Assunto"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          placeholder="Corpo do e-mail"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default EmailForm;
