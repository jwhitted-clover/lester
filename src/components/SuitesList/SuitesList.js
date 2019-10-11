import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

import { debounce } from '../../common';
import { Loading } from '../Loading';

import './stylesheet.css';

const SuitesList = ({
  filter,
  getSuites,
  loading,
  message,
  names,
  onScroll,
  scrollRef,
  selected,
  setFilter,
  setSelected,
  status,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const refresh = (force = false) => {
    getSuites({ force });
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 5000);
  };

  useEffect(refresh, [getSuites]);

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
        <div className="form-inline float-right">
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Filter"
            onChange={debounce(event => setFilter(event.target.value))}
            defaultValue={filter}/>
        </div>
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
            <div ref={scrollRef} className="scroller" onScroll={onScroll}>
              {!names.length && (
                <ListGroupItem>
                  <i>Nothing to display</i>
                </ListGroupItem>
              )}
              {names.map(name => (
                <ListGroupItem key={name} type="button" active={selected === name} onClick={() => setSelected(name)}>
                  {name}
                </ListGroupItem>
              ))}
            </div>
          </ListGroup>
        </CardBody>
      )}
    </Card>
  );
};

SuitesList.propTypes = {
  // connect
  filter: PropTypes.string,
  getSuites: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  setSelected: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  // persistentScroll
  onScroll: PropTypes.func.isRequired,
  scrollRef: PropTypes.shape({ current: PropTypes.any }),
};

SuitesList.defaultProps = {
  filter: undefined,
  selected: null,
};

export default SuitesList;
