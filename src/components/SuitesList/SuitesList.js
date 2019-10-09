import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SuitesList extends Component {
  componentDidMount() {
    const { getSuites } = this.props;
    getSuites();
  }

  refresh = () => {
    const { getSuites } = this.props;
    getSuites({ force: true });
  };

  render() {
    const { loading, names } = this.props;
    return (
      <div className="SuitesList card">
        <div className="card-header bg-secondary text-white">
          Test Suites
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={this.refresh}
            disabled={loading}
            title="Refresh">
            <FontAwesomeIcon icon="sync" />
          </button>
        </div>
        <div className="card-body">
          {loading && 'Loading...'}
          {!loading && <pre>{JSON.stringify(names, null, 2)}</pre>}
        </div>
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
