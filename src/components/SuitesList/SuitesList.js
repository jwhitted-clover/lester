import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

import { Loading } from '../Loading';

import SuiteItem from './SuiteItem';
import './stylesheet.css';

const SuitesList = ({ getSuites, loading, message, names, selected, setSelectedSuite, status }) => {
  const [refreshing, setRefreshing] = useState(false);

  const refresh = (force = false) => {
    getSuites({ force });
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 5000);
  };

  useEffect(refresh, [getSuites]);

  const select = name => setSelectedSuite(name);

  return (
    <Card className="SuitesList" color="secondary" inverse>
      <CardHeader>
        Test Suites {!loading && <span className="text-dark small">({names.length})</span>}
        <button
          type="button"
          className="btn btn-secondary btn-sm p-0 px-1"
          onClick={() => refresh(true)}
          title="Refresh"
          disabled={refreshing}>
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
              <SuiteItem key={name} active={selected === name} name={name} onClick={select} />
            ))}
          </ListGroup>
        </CardBody>
      )}
    </Card>
  );
};

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
