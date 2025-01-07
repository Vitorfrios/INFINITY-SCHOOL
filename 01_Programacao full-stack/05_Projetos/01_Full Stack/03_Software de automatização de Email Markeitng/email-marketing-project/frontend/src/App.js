// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EmailPage from './pages/EmailPage';
import './styles/styles.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/emails" component={EmailPage} />
      </Switch>
    </Router>
  );
};

export default App;
