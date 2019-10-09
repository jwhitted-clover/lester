import React from 'react';

import { SuitesList } from '../SuitesList';
import { SelectedSuite } from '../Suite';
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
      <div className="row">
        <div className="col-4">
          <SuitesList />
        </div>
        <div className="col-8">
          <SelectedSuite />
        </div>
      </div>
    </div>
  </div>
);

export default App;
