import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

import { Loading } from '../Loading';

import SuiteItem from './SuiteItem';
import './stylesheet.css';

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
    const { loading, message, names, selected, status } = this.props;
    return (
      <Card className="SuitesList" color="secondary" inverse>
        <CardHeader>
          Test Suites {!loading && <span className="text-dark small">({names.length})</span>}
          <button type="button" className="btn btn-secondary btn-sm p-0 px-1" onClick={this.refresh} title="Refresh">
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
            {(status !== 'success' || !!message) && (
              <Alert color="warning" className="mb-0">
                <FontAwesomeIcon icon="info-circle" />
                <span className="ml-2">
                  {status}. {message}
                </span>
              </Alert>
            )}
            <ListGroup>
              {!names.length && (
                <ListGroupItem>
                  <i>Nothing to display</i>
                </ListGroupItem>
              )}
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
  message: PropTypes.string.isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  setSelectedSuite: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

SuitesList.defaultProps = { selected: null };

export default SuitesList;
