import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { keyValueShape } from '../../common';
import { Loading } from '../Loading';

import KeyValuePair from './KeyValuePair';

const Definitions = ({
  buildInfo,
  collapsed,
  getDefinitions,
  loading,
  requiredMerchantConfig,
  requiredMerchantConfigConflicts,
  requiredRobotCapabilities,
  robotActions,
  setCollapsed,
  testCases,
  variables,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const refresh = (force = false) => {
    getDefinitions({ force });
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 5000);
  };

  useEffect(refresh, [getDefinitions]);

  return (
    <Card className="Definitions" color="secondary" inverse>
      <CardHeader>
        Definitions
        <button
          type="button"
          onClick={() => refresh(true)}
          className="btn btn-secondary btn-sm p-0 px-1"
          disabled={refreshing}>
          <FontAwesomeIcon icon="sync" />
        </button>
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="btn btn-secondary btn-sm p-0 px-1 float-right"
          title={collapsed ? 'Expand' : 'Collapse'}>
          <FontAwesomeIcon icon={collapsed ? 'chevron-down' : 'chevron-up'} />
        </button>
      </CardHeader>
      {loading && (
        <CardBody>
          <Loading />
        </CardBody>
      )}
      {!loading && !collapsed && (
        <CardBody className="m-0 p-0">
          <Table className="text-dark mb-0" striped hover responsive>
            <tbody>
              <tr>
                <th>Build Info</th>
                <td>{buildInfo}</td>
              </tr>
              <tr>
                <th>
                  Required Merchant Config
                  <span className="text-light small ml-1">({requiredMerchantConfig.length})</span>
                </th>
                <td>
                  {requiredMerchantConfig.map(kvp => (
                    <KeyValuePair key={kvp.key} kvp={kvp} />
                  ))}
                </td>
              </tr>
              <tr>
                <th>
                  Required Merchant Config Conflicts
                  <span className="text-light small ml-1">({requiredMerchantConfigConflicts.length})</span>
                </th>
                <td>
                  {requiredMerchantConfigConflicts.map(kvp => (
                    <KeyValuePair key={kvp.key} kvp={kvp} />
                  ))}
                </td>
              </tr>
              <tr>
                <th>
                  Required Robot Capabilities
                  <span className="text-light small ml-1">({requiredRobotCapabilities.length})</span>
                </th>
                <td>
                  {requiredRobotCapabilities.map(kvp => (
                    <KeyValuePair key={kvp.key} kvp={kvp} />
                  ))}
                </td>
              </tr>
              <tr>
                <th>
                  Robot Actions
                  <span className="text-light small ml-1">({robotActions.length})</span>
                </th>
                <th>
                  {robotActions.map(kvp => (
                    <KeyValuePair key={kvp.key} kvp={kvp} />
                  ))}
                </th>
              </tr>
              <tr>
                <th>
                  Variables
                  <span className="text-light small ml-1">({testCases.length})</span>
                </th>
                <td>
                  {variables.map(kvp => (
                    <KeyValuePair key={kvp.key} kvp={kvp} />
                  ))}
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      )}
    </Card>
  );
};

Definitions.propTypes = {
  // connect
  buildInfo: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
  getDefinitions: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  requiredMerchantConfig: PropTypes.arrayOf(keyValueShape).isRequired,
  requiredMerchantConfigConflicts: PropTypes.arrayOf(keyValueShape).isRequired,
  requiredRobotCapabilities: PropTypes.arrayOf(keyValueShape).isRequired,
  robotActions: PropTypes.arrayOf(keyValueShape).isRequired,
  setCollapsed: PropTypes.func.isRequired,
  testCases: PropTypes.arrayOf(keyValueShape).isRequired,
  variables: PropTypes.arrayOf(keyValueShape).isRequired,
};

Definitions.defaultProps = {};

export default Definitions;
