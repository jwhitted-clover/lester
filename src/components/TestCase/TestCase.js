import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody } from 'reactstrap';
import JsonInput from 'react-json-editor-ajrm';

import { Shapes } from '../../common';

const Suite = ({ name, testCase }) => {
  if (!name) return null;
  return (
    <Card className="TestCase" color="secondary" inverse>
      <CardHeader>
        <span className="text-dark">TestCase: </span>
        {name}
      </CardHeader>
      <CardBody className="m-0 p-0">
        <JsonInput placeholder={testCase} width="100%" viewOnly confirmGood={false} locale="en" />
      </CardBody>
    </Card>
  );
};

Suite.propTypes = {
  name: PropTypes.string,
  testCase: Shapes.testCase,
};

Suite.defaultProps = {
  name: undefined,
  testCase: undefined,
};

export default Suite;
