import PropTypes from 'prop-types';

import eventState from './eventState';
import inputOptions from './inputOptions';
import message from './message';
import method from './method';
import uuid from './uuid';

export default PropTypes.exact({
  uuid: uuid.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  parameters: PropTypes.exact({
    clearEventCacheBeforeExecution: PropTypes.bool,
    delayBeforeExecution: PropTypes.number,
    disposeConnectorBeforeExecution: PropTypes.bool,
    iterations: PropTypes.number,
    responseTimeout: PropTypes.number,
  }),
  context: PropTypes.exact({
    inputOptions,
    request: PropTypes.exact({
      body: PropTypes.object,
      httpMethod: PropTypes.oneOf(['POST']),
      method: message,
      payload: PropTypes.object,
      store: PropTypes.object,
      url: PropTypes.string,
    }).isRequired,
    deviceRequests: PropTypes.exact({
      paymentConfirmation: PropTypes.exact({
        DUPLICATE_CHALLENGE: PropTypes.oneOf(['ACCEPT', 'REJECT']),
        OFFLINE_CHALLENGE: PropTypes.oneOf(['ACCEPT', 'REJECT']),
      }),
      signatureVerification: PropTypes.oneOf(['ACCEPT', 'REJECT']),
    }),
  }),
  assert: PropTypes.exact({
    response: PropTypes.exact({
      method: method.isRequired,
      payload: PropTypes.object,
      rowCount: PropTypes.number,
      store: PropTypes.object,
    }).isRequired,
    events: PropTypes.exact({
      counts: PropTypes.arrayOf(
        PropTypes.exact({
          count: PropTypes.number.isRequired,
          event: PropTypes.exact({ eventState: eventState.isRequired }).isRequired,
        })
      ),
      eventTypeFilter: PropTypes.oneOf(['START_ONLY']),
      exclusions: PropTypes.arrayOf(PropTypes.exact({ eventState: eventState.isRequired })),
      flow: PropTypes.exact({
        comparisonType: PropTypes.string,
        events: PropTypes.arrayOf(PropTypes.exact({ eventState: eventState.isRequired })).isRequired,
      }),
    }),
  }),
  retryOnFailure: PropTypes.exact({
    attempts: PropTypes.number.isRequired,
    millisBetweenAttempts: PropTypes.number.isRequired,
  }),
  method: PropTypes.exact({}),
  waitUntil: PropTypes.exact({
    response: PropTypes.exact({
      inputOptions,
      method: method.isRequired,
      payload: PropTypes.object,
    }).isRequired,
  }),
});
