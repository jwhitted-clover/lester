import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppNavBar from './AppNavBar';
import AppContent from './AppContent';
import './bootstrap.min.css';
import './stylesheet.css';
import './font-awesome';

const App = () => (
  <Router>
    <div className="App">
      <AppNavBar />
      <AppContent />
    </div>
  </Router>
);

export default App;
