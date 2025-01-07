// frontend/src/pages/EmailPage.js
import React from 'react';
import EmailList from '../components/EmailList';

const EmailPage = () => {
  return (
    <div className="email-page">
      <h1>Registros de E-mails</h1>
      <EmailList />
    </div>
  );
};

export default EmailPage;
