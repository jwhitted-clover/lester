import { createSelector } from 'reselect';

export const selectDefinitionsRoot = state => state.definitions;

export const selectDefinitionsLoading = createSelector(
  selectDefinitionsRoot,
  ({ loading }) => loading
);

export const selectDefinitionsData = createSelector(
  selectDefinitionsRoot,
  ({ data }) => data || {}
);

const compose = (...fns) => fns.reduce((f, g) => x => f(g(x)), x => x);
const sort = arr => arr.sort((a, b) => a.key.localeCompare(b.key));
const values = compose(
  sort,
  arr => (arr || []).map(key => ({ key }))
);
const entries = compose(
  sort,
  obj => Object.entries(obj || {}).map(([key, value]) => ({ key, value }))
);

export const selectDefinitionsBuildInfo = createSelector(
  selectDefinitionsData,
  ({ buildInfo }) => buildInfo
);

export const selectDefinitionsRequiredMerchantConfig = createSelector(
  selectDefinitionsData,
  ({ requiredMerchantConfig }) => entries(requiredMerchantConfig)
);

export const selectDefinitionsRequiredMerchantConfigConflicts = createSelector(
  selectDefinitionsData,
  ({ requiredMerchantConfigConflicts }) => values(requiredMerchantConfigConflicts)
);

export const selectDefinitionsRequiredRobotCapabilities = createSelector(
  selectDefinitionsData,
  ({ requiredRobotCapabilities }) => values(requiredRobotCapabilities)
);

export const selectDefinitionsRobotActions = createSelector(
  selectDefinitionsData,
  ({ robotActions }) => entries(robotActions)
);

export const selectDefinitionsTestCases = createSelector(
  selectDefinitionsData,
  ({ testCases }) => entries(testCases)
);

export const selectDefinitionsVariables = createSelector(
  selectDefinitionsData,
  ({ variables }) => entries(variables)
);
