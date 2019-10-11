import PropTypes from 'prop-types';

import requiredRobotCapabilities from './requiredRobotCapabilities';
import supportedPlatforms from './supportedPlatforms';
import testAction from './testAction';
import uuid from './uuid';
import zephyrid from './zephyrid';

export default PropTypes.exact({
  uuid: uuid.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.exact({
    automationLevel: PropTypes.oneOf(['FULLY_AUTOMATED_VIA_ROBOT', 'NO_INPUT_REQUIRED']),
    requiredRobotCapabilities,
    sdkVersion: PropTypes.exact({ CLOUD: PropTypes.exact({ min: PropTypes.number }) }),
    status: PropTypes.oneOf(['ENABLED']),
    supportedPlatforms: supportedPlatforms.isRequired,
    zephyrid,
  }),
  parameters: PropTypes.exact({
    delayBeforeExecution: PropTypes.number,
    disposeConnectorBeforeExecution: PropTypes.bool.isRequired,
  }),
  testActions: PropTypes.arrayOf(testAction).isRequired,
});
