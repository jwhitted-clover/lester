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
import { selectValue, setValue, VALUE } from '../../store/values';

const select = state => ({
  buildInfo: selectDefinitionsBuildInfo(state),
  collapsed: selectValue(VALUE.DEFINITIONS.COLLAPSED)(state),
  loading: selectDefinitionsLoading(state),
  requiredMerchantConfig: selectDefinitionsRequiredMerchantConfig(state),
  requiredMerchantConfigConflicts: selectDefinitionsRequiredMerchantConfigConflicts(state),
  requiredRobotCapabilities: selectDefinitionsRequiredRobotCapabilities(state),
  robotActions: selectDefinitionsRobotActions(state),
  testCases: selectDefinitionsTestCases(state),
  variables: selectDefinitionsVariables(state),
});

const boundActions = {
  getDefinitions,
  setCollapsed: setValue(VALUE.DEFINITIONS.COLLAPSED),
};

export default connect(
  select,
  boundActions
);
