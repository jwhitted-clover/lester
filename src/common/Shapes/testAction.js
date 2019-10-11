import PropTypes from 'prop-types';

import uuid from './uuid';

export default PropTypes.exact({
  uuid: uuid.isRequired,
  name: PropTypes.string.isRequired,
  parameters: PropTypes.exact({
    responseTimeout: PropTypes.number,
    delayBeforeExecution: PropTypes.number,
    iterations: PropTypes.number,
  }),
  context: PropTypes.exact({
    request: PropTypes.exact({
      body: PropTypes.object,
      httpMethod: PropTypes.oneOf(['POST']),
      method: PropTypes.oneOf(['SALE']),
      payload: PropTypes.object,
      store: PropTypes.object,
      url: PropTypes.string,
    }).isRequired,
    deviceRequests: PropTypes.exact({
      paymentConfirmation: PropTypes.exact({
        DUPLICATE_CHALLENGE: PropTypes.oneOf(['ACCEPT']).isRequired,
        OFFLINE_CHALLENGE: PropTypes.oneOf(['ACCEPT']).isRequired,
      }),
      signatureVerification: PropTypes.oneOf(['ACCEPT']),
    }),
  }).isRequired,
  assert: PropTypes.exact({
    response: PropTypes.exact({
      method: PropTypes.oneOf(['restResponse', 'onSaleResponse']).isRequired,
      payload: PropTypes.object,
      store: PropTypes.object,
      rowCount: PropTypes.number,
    }).isRequired,
    events: PropTypes.exact({
      eventTypeFilter: PropTypes.oneOf(['START_ONLY']).isRequired,
      exclusions: PropTypes.arrayOf(
        PropTypes.exact({ eventState: PropTypes.oneOf(['ADD_SIGNATURE', 'ADD_TIP', 'RECEIPT_OPTIONS']).isRequired })
      ).isRequired,
      flow: PropTypes.exact({
        comparisonType: PropTypes.string.isRequired,
        events: PropTypes.arrayOf(
          PropTypes.exact({ eventState: PropTypes.oneOf(['PROCESSING_SWIPE', 'START']).isRequired })
        ).isRequired,
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
      method: PropTypes.oneOf(['onDeviceActivityStart']).isRequired,
      payload: PropTypes.object.isRequired,
    }).isRequired,
  }),
});
