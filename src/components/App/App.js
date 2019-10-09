import React from 'react';

import { SuitesList } from '../SuitesList';
import './bootstrap.min.css';
import './stylesheet.css';
import './font-awesome';

const App = () => (
  <div className="App">
    <nav className="navbar fixed-top navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Lester
      </a>
    </nav>
    <div className="container">
      <SuitesList />
    </div>
  </div>
);

export default App;
