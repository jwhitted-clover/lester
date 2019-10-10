import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import keyValueShape from './keyValueShape';

const TestCaseList = ({ testCases, selected }) => {
  const select = name => console.log('TestCaseList', 'select', name);

  return (
    <ListGroup className="TestCaseList">
      {!testCases.length && (
        <ListGroupItem>
          <i>Nothing to display</i>
        </ListGroupItem>
      )}
      {testCases.map(({ key }) => (
        <ListGroupItem className="rounded-0" key={key} active={selected === key} onClick={() => select(key)}>
          {key}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

TestCaseList.propTypes = {
  testCases: PropTypes.arrayOf(keyValueShape).isRequired,
  selected: PropTypes.string,
};

TestCaseList.defaultProps = {selected: undefined,};

export default TestCaseList;
