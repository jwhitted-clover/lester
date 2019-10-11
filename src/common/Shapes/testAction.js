import PropTypes from 'prop-types';

import uuid from './uuid';

export default PropTypes.exact({
  uuid: uuid.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  parameters: PropTypes.exact({
    delayBeforeExecution: PropTypes.number,
    iterations: PropTypes.number,
    responseTimeout: PropTypes.number,
  }),
  context: PropTypes.exact({
    inputOptions: PropTypes.arrayOf(
      PropTypes.exact({
        on: PropTypes.oneOf(['PROCESSING_SWIPE', 'RECEIPT_OPTIONS']).isRequired,
        description: PropTypes.string,
        select: PropTypes.oneOf(['ESC']),
      })
    ),
    request: PropTypes.exact({
      body: PropTypes.object,
      httpMethod: PropTypes.oneOf(['POST']),
      method: PropTypes.oneOf([
        'DEVICE_STATUS',
        'DISPLAY_PAYMENT_RECEIPT_OPTIONS',
        'DISPLAY_RECEIPT_OPTIONS',
        'INVOKE_INPUT_OPTION',
        'MANUAL_REFUND',
        'REFUND_PAYMENT',
        'REGISTER_FOR_CUSTOMER_PROVIDED_DATA',
        'REMOVE_DISPLAY_ORDER',
        'RESET_DEVICE',
        'RETRIEVE_PRINT_JOB_STATUS',
        'SALE',
        'SEND_MESSAGE_TO_ACTIVITY',
        'SET_CUSTOMER_INFO',
        'SHOW_DISPLAY_ORDER',
        'SHOW_MESSAGE',
        'SHOW_THANK_YOU_SCREEN',
        'SHOW_WELCOME_SCREEN',
        'START_CUSTOM_ACTIVITY',
      ]),
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
      method: PropTypes.oneOf([
        'restResponse',
        'onCustomActivityResponse',
        'onDeviceActivityEnd',
        'onDisplayReceiptOptionsResponse',
        'onInvalidStateTransitionResponse',
        'onPrintJobStatusResponse',
        'onPrintManualRefundDeclineReceipt',
        'onPrintManualRefundReceipt',
        'onPrintPaymentDeclineReceipt',
        'onPrintPaymentMerchantCopyReceipt',
        'onPrintPaymentReceipt',
        'onPrintRefundPaymentReceipt',
        'onResetDeviceResponse',
        'onRetrieveDeviceStatusResponse',
        'onSaleResponse',
      ]).isRequired,
      payload: PropTypes.object,
      rowCount: PropTypes.number,
      store: PropTypes.object,
    }).isRequired,
    events: PropTypes.exact({
      eventTypeFilter: PropTypes.oneOf(['START_ONLY']).isRequired,
      exclusions: PropTypes.arrayOf(
        PropTypes.exact({ eventState: PropTypes.oneOf(['ADD_SIGNATURE', 'ADD_TIP', 'RECEIPT_OPTIONS']).isRequired })
      ).isRequired,
      flow: PropTypes.exact({
        comparisonType: PropTypes.string.isRequired,
        events: PropTypes.arrayOf(
          PropTypes.exact({ eventState: PropTypes.oneOf(['PROCESSING_SWIPE', 'RECEIPT_OPTIONS', 'START']).isRequired })
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
      method: PropTypes.oneOf([
        'onCustomerProvidedData',
        'onDeviceActivityStart',
        'onDeviceActivityEnd',
        'onMessageFromActivity',
      ]).isRequired,
      payload: PropTypes.object.isRequired,
    }).isRequired,
  }),
});
