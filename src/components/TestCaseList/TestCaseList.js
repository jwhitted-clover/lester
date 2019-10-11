import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

import { debounce, keyValueShape } from '../../common';

import './stylesheet.css';

const TestCaseList = ({ filter, selected, setFilter, setSelected, testCases }) => {
  if (!testCases) return null;

  return (
    <Card className="TestCaseList" color="secondary" inverse>
      <CardHeader>
        Test Cases <span className="text-dark small">({testCases.length})</span>
        <div className="form-inline float-right">
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Filter"
            onChange={debounce(event => setFilter(event.target.value))}
            defaultValue={filter}
          />
        </div>
      </CardHeader>
      <CardBody className="m-0 p-0">
        <ListGroup>
          {!testCases.length && (
            <ListGroupItem>
              <i>Nothing to display</i>
            </ListGroupItem>
          )}
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
  filter: PropTypes.string,
  selected: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  setSelected: PropTypes.func.isRequired,
  testCases: PropTypes.arrayOf(keyValueShape),
};

TestCaseList.defaultProps = {
  filter: undefined,
  selected: undefined,
  testCases: undefined,
};

export default TestCaseList;
