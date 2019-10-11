import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

import { keyValueShape } from '../../common';

import './stylesheet.css';

const TestCaseList = ({ selected, setSelected, testCases }) => {
  if (!testCases || !testCases.length) return null;

  return (
    <Card className="TestCaseList" color="secondary" inverse>
      <CardHeader>
        Test Cases <span className="text-dark small">({testCases.length})</span>
      </CardHeader>
      <CardBody className="m-0 p-0">
        <ListGroup>
          {testCases.map(({ key }) => (
            <ListGroupItem key={key} type="button" active={selected === key} onClick={() => setSelected(key)}>
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
  selected: PropTypes.string,
  setSelected: PropTypes.func.isRequired,
  testCases: PropTypes.arrayOf(keyValueShape),
};

TestCaseList.defaultProps = {
  testCases: undefined,
  selected: undefined,
};

export default TestCaseList;
