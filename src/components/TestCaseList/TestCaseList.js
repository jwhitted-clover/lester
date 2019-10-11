import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

import { keyValueShape } from '../../common';

import './stylesheet.css';

const TestCaseList = ({ testCases, selected }) => {
  if (!testCases || !testCases.length) return null;

  const select = name => console.log('TestCaseList select', name);

  return (
    <Card className="TestCaseList" color="secondary" inverse>
      <CardHeader>
        Test Cases <span className="text-dark small">({testCases.length})</span>
      </CardHeader>
      <CardBody className="m-0 p-0">
        <ListGroup>
          {testCases.map(({ key }) => (
            <ListGroupItem key={key} type="button" active={selected === key} onClick={() => select(key)}>
              {key}
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

TestCaseList.propTypes = {
  // connect
  testCases: PropTypes.arrayOf(keyValueShape),
  selected: PropTypes.string,
};

TestCaseList.defaultProps = {
  testCases: undefined,
  selected: undefined,
};

export default TestCaseList;
