import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Card, CardHeader, CardBody } from 'reactstrap';
import JsonInput from 'react-json-editor-ajrm';

import { checkPropTypes, Shapes } from '../../common';

const Suite = ({ name, testCase }) => {
  if (!name) return null;

  const error = checkPropTypes({ testCase: Shapes.testCase }, { testCase }, 'TestCase', 'testCase');

  return (
    <Card className="TestCase" color="secondary" inverse>
      <CardHeader>
        <span className="text-dark">TestCase: </span>
        {name}
      </CardHeader>
      <CardBody className="m-0 p-0">
        {!!error && (
          <Alert className="m-0 rounded-0" color="warning">
            {error}
          </Alert>
        )}
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
