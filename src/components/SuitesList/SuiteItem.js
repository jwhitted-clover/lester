import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

class SuiteItem extends Component {
  click = () => {
    const { name, onClick } = this.props;
    console.log('click', { name, onClick });
    onClick(name);
  };

  render() {
    const { active, name } = this.props;

    return (
      <ListGroupItem active={active} tag="button" action onClick={this.click}>
        {name}
      </ListGroupItem>
    );
  }
}

SuiteItem.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

SuiteItem.defaultProps = {};

export default SuiteItem;
