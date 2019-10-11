import PropTypes from 'prop-types';

import createManyOf from './createManyOf';
import testAction from './testAction';
import uuid from './uuid';
import zephyrid from './zephyrid';

export default PropTypes.exact({
  uuid: uuid.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.exact({
    automationLevel: PropTypes.oneOf(['FULLY_AUTOMATED_VIA_ROBOT', 'HUMAN_VERIFICATION_REQUIRED', 'NO_INPUT_REQUIRED']),
    knownFailure: createManyOf(['ANDROID', 'CLOUD', 'IOS', 'JAVA', 'PAYMENT_CONNECTOR', 'WINDOWS']),
    issues: PropTypes.string,
    requiredRobotCapabilities: createManyOf([
      'MCONFIG1',
      'LOYALTY_CUSTOM_ACTIVITY',
      'SWIPE_CARD',
      'PROGRAM_SWIPE',
      'TOUCH',
    ]),
    sdkVersion: PropTypes.exact({ CLOUD: PropTypes.exact({ min: PropTypes.number }) }),
    status: PropTypes.oneOf(['ENABLED', 'DISABLED']),
    supportedPlatforms: createManyOf(['ANDROID', 'CLOUD', 'IOS', 'JAVA', 'PAYMENT_CONNECTOR', 'WINDOWS']).isRequired,
    zephyrid,
  }),
  parameters: PropTypes.exact({
    delayBeforeExecution: PropTypes.number,
    disposeConnectorBeforeExecution: PropTypes.bool,
  }),
  testActions: PropTypes.arrayOf(testAction).isRequired,
});
