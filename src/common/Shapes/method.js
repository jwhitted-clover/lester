import PropTypes from 'prop-types';

export default PropTypes.oneOf([
  'restResponse',
  'onAuthResponse',
  'onCapturePreAuthResponse',
  'onCloseoutResponse',
  'onCustomActivityResponse',
  'onCustomerProvidedData',
  'onDeviceActivityEnd',
  'onDeviceActivityStart',
  'onDeviceError',
  'onDisplayReceiptOptionsResponse',
  'onInvalidStateTransitionResponse',
  'onManualRefundResponse',
  'onMessageFromActivity',
  'onPreAuthResponse',
  'onPrintJobStatusResponse',
  'onPrintManualRefundDeclineReceipt',
  'onPrintManualRefundReceipt',
  'onPrintPaymentDeclineReceipt',
  'onPrintPaymentMerchantCopyReceipt',
  'onPrintPaymentReceipt',
  'onPrintRefundPaymentReceipt',
  'onReadCardDataResponse',
  'onRefundPaymentResponse',
  'onResetDeviceResponse',
  'onRetrieveDeviceStatusResponse',
  'onRetrievePaymentResponse',
  'onRetrievePendingPaymentsResponse',
  'onRetrievePrintersResponse',
  'onSaleResponse',
  'onTipAdjustAuthResponse',
  'onVaultCardResponse',
  'onVoidPaymentResponse',
]);
