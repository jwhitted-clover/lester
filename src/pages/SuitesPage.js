import React from 'react';

import { SuitesList } from '../components/SuitesList';
import { SelectedSuite } from '../components/Suite';

export default () => (
  <div className="row">
    <div className="col-12 col-md-4 mb-3">
      <SuitesList />
    </div>
    <div className="col-12 col-md-8 mb-3">
      <SelectedSuite />
    </div>
  </div>
);
