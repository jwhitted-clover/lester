import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuitesList extends Component {
  componentDidMount() {
    const { getSuites } = this.props;
    getSuites();
  }

  render() {
    const { loading, names } = this.props;
    return (
      <div className="SuitesList">
        {loading && 'Loading...'}
        {!loading && <pre>{JSON.stringify(names, null, 2)}</pre>}
      </div>
    );
  }
}

SuitesList.propTypes = {
  // connect
  getSuites: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SuitesList;
