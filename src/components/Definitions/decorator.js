import { connect } from 'react-redux';
import {
  getDefinitions,
  selectDefinitionsBuildInfo,
  selectDefinitionsLoading,
  selectDefinitionsRequiredMerchantConfig,
  selectDefinitionsRequiredMerchantConfigConflicts,
  selectDefinitionsRequiredRobotCapabilities,
  selectDefinitionsRobotActions,
  selectDefinitionsTestCases,
  selectDefinitionsVariables,
} from '../../store/definitions';

const select = state => ({
  buildInfo: selectDefinitionsBuildInfo(state),
  loading: selectDefinitionsLoading(state),
  requiredMerchantConfig: selectDefinitionsRequiredMerchantConfig(state),
  requiredMerchantConfigConflicts: selectDefinitionsRequiredMerchantConfigConflicts(state),
  requiredRobotCapabilities: selectDefinitionsRequiredRobotCapabilities(state),
  robotActions: selectDefinitionsRobotActions(state),
  testCases: selectDefinitionsTestCases(state),
  variables: selectDefinitionsVariables(state),
});

const boundActions = { getDefinitions };

export default connect(
  select,
  boundActions
);
