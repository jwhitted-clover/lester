import React from 'react';

import { Definitions } from '../components/Definitions';
import { TestCaseList } from '../components/TestCaseList';
import { SelectedTestCase } from '../components/TestCase';

export default () => (
  <div className="row">
    <div className="col-12 mb-3">
      <Definitions />
    </div>
    <div className="col-12 col-md-4 mb-3">
      <TestCaseList />
    </div>
    <div className="col-12 col-md-8 mb-3">
      <SelectedTestCase />
    </div>
  </div>
);
