import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody } from 'reactstrap';
import JsonInput from 'react-json-editor-ajrm';

import { Shapes } from '../../common';

const Suite = ({ name, suite }) => {
  if (!name) return null;
  return (
    <Card className="Suite" color="secondary" inverse>
      <CardHeader>
        <span className="text-dark">Suite: </span>
        {name}
      </CardHeader>
      <CardBody className="m-0 p-0">
        <JsonInput placeholder={suite} width="100%" viewOnly confirmGood={false} locale="en" />
      </CardBody>
    </Card>
  );
};

Suite.propTypes = {
  name: PropTypes.string,
  suite: Shapes.suite,
};

Suite.defaultProps = {
  name: undefined,
  suite: undefined,
};

export default Suite;
