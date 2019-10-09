import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { DefinitionsPage, NotFoundPage, SuitesPage } from '../../pages';

export default () => (
  <div className="container">
    <Switch>
      <Route exact path="/">
        <Redirect to="/suites" />
      </Route>
      <Route exact path="/definitions">
        <DefinitionsPage />
      </Route>
      <Route path="/suites">
        <SuitesPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </div>
);
