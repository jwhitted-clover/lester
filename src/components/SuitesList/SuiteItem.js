import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

const SuiteItem = ({ active, name, onClick }) => {
  const click = () => onClick(name);

  return (
    <ListGroupItem active={active} tag="button" action onClick={click}>
      {name}
    </ListGroupItem>
  );
};

SuiteItem.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

SuiteItem.defaultProps = {};

export default SuiteItem;
