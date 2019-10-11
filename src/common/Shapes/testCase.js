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
    status: PropTypes.oneOf(['ENABLED']).isRequired,
    automationLevel: PropTypes.oneOf(['FULLY_AUTOMATED_VIA_ROBOT']).isRequired,
    zephyrid: zephyrid.isRequired,
    requiredRobotCapabilities: requiredRobotCapabilities.isRequired,
    supportedPlatforms: supportedPlatforms.isRequired,
  }),
  parameters: PropTypes.exact({ disposeConnectorBeforeExecution: PropTypes.bool.isRequired }),
  testActions: PropTypes.arrayOf(testAction).isRequired,
});
