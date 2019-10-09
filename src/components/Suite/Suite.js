import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody } from 'reactstrap';
import JsonInput from 'react-json-editor-ajrm';

const Suite = ({ name, suite }) => {
  if (!name) return null;
  return (
    <Card className="SuitesList" color="secondary" inverse>
      <CardHeader>
        <span className="text-dark">Suite: </span>
        {name}
      </CardHeader>
      <CardBody className="m-0 p-0">
        <JsonInput placeholder={suite} width="100%" viewOnly confirmGood={false} />
      </CardBody>
    </Card>
  );
};

Suite.propTypes = {
  name: PropTypes.string,
  suite: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Suite.defaultProps = {
  name: undefined,
  suite: undefined,
};

export default Suite;
