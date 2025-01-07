// frontend/src/components/Dashboard.js
import React from 'react';
import EmailForm from './EmailForm';
import EmailList from './EmailList';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <EmailForm />
      <EmailList />
    </div>
  );
};

export default Dashboard;
