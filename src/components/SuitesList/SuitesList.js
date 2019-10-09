import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

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
        <CardBody className="m-0 p-0">
          {loading && 'Loading...'}
          {!loading && (
            <ListGroup>
              {names.map(name => (
                <ListGroupItem tag="button" action>
                  {name}
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </CardBody>
      </Card>
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
