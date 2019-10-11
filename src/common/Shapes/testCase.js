import PropTypes from 'prop-types';

import createManyOf from './createManyOf';
import platform from './platform';
import testAction from './testAction';
import uuid from './uuid';
import zephyrid from './zephyrid';

export default PropTypes.exact({
  uuid: uuid.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  notes: PropTypes.string,
  tags: PropTypes.exact({
    automationLevel: PropTypes.oneOf([
      'FULLY_AUTOMATED_VIA_ROBOT',
      'HUMAN_INPUT_REQUIRED',
      'HUMAN_VERIFICATION_REQUIRED',
      'NO_INPUT_REQUIRED',
    ]),
    knownFailure: platform,
    issues: PropTypes.string,
    requiredMerchantConfig: PropTypes.exact({
      manualCloseout: PropTypes.bool,
      pinDisabled: PropTypes.bool,
      tipsEnabled: PropTypes.bool,
    }),
    requiredRobotCapabilities: createManyOf([
      'ADB_TOUCH',
      'COLLIS_DIP',
      'COLLIS_SWIPE',
      'COLLIS_TAP',
      'DIP_CARD',
      'MCONFIG1',
      'MCONFIG2',
      'LOYALTY_CUSTOM_ACTIVITY',
      'SWIPE_CARD',
      'PROGRAM_SWIPE',
      'TILT',
      'TOUCH',
    ]),
    sdkVersion: PropTypes.exact({
      ANDROID: PropTypes.exact({ min: PropTypes.number, max: PropTypes.number }),
      CLOUD: PropTypes.exact({ min: PropTypes.number, max: PropTypes.number }),
      JAVA: PropTypes.exact({ min: PropTypes.number, max: PropTypes.number }),
      WINDOWS: PropTypes.exact({ min: PropTypes.number, max: PropTypes.number }),
    }),
    status: PropTypes.oneOf(['ENABLED', 'DISABLED']),
    supportedDevices: createManyOf(['STATION', 'STATION_2018']),
    supportedPlatforms: platform.isRequired,
    zephyrid,
  }),
  parameters: PropTypes.exact({
    delayBeforeExecution: PropTypes.number,
    disposeConnectorBeforeExecution: PropTypes.bool,
    iterations: PropTypes.number,
  }),
  testActions: PropTypes.arrayOf(testAction).isRequired,
});
