// frontend/src/components/EmailList.js
import React, { useEffect, useState } from 'react';
import { getEmailRecords } from '../services/emailService';

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const data = await getEmailRecords();
      setEmails(data);
    };
    fetchEmails();
  }, []);

  return (
    <div className="email-list">
      <h2>Registros de E-mails Enviados</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Assunto</th>
            <th>Status</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id}>
              <td>{email.email}</td>
              <td>{email.subject}</td>
              <td>{email.status}</td>
              <td>{new Date(email.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailList;
