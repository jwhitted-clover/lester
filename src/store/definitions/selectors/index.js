import { createSelector } from 'reselect';

export const selectDefinitionsRoot = state => state.definitions;

export const selectSuitesLoading = createSelector(
  selectDefinitionsRoot,
  ({ loading }) => loading
);

export const selectDefinitions = createSelector(
  selectDefinitionsRoot,
  ({ data }) => data
);
