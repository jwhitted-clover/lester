import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardHeader, CardBody, ListGroup } from 'reactstrap';

import { Loading } from '../Loading';

import SuiteItem from './SuiteItem';

class SuitesList extends Component {
  componentDidMount() {
    const { getSuites } = this.props;
    getSuites();
  }

  refresh = () => {
    const { getSuites } = this.props;
    getSuites({ force: true });
  };

  select = name => {
    const { setSelectedSuite } = this.props;
    setSelectedSuite(name);
  };

  render() {
    const { loading, names, selected } = this.props;
    return (
      <Card className="SuitesList" color="secondary" inverse>
        <CardHeader>
          Test Suites {!loading && <span className="text-dark small">({names.length})</span>}
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={this.refresh}
            disabled={loading}
            title="Refresh">
            <FontAwesomeIcon icon="sync" />
          </button>
        </CardHeader>
        {loading && (
          <CardBody>
            <Loading />
          </CardBody>
        )}
        {!loading && (
          <CardBody className="m-0 p-0">
            <ListGroup>
              {names.map(name => (
                <SuiteItem key={name} active={selected === name} name={name} onClick={this.select} />
              ))}
            </ListGroup>
          </CardBody>
        )}
      </Card>
    );
  }
}

SuitesList.propTypes = {
  // connect
  getSuites: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  setSelectedSuite: PropTypes.func.isRequired,
};

SuitesList.defaultProps = { selected: null };

export default SuitesList;
