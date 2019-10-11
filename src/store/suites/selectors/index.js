import { createSelector } from 'reselect';

export const selectSuitesRoot = state => state.suites;

export const selectSuitesLoading = createSelector(
  selectSuitesRoot,
  ({ loading }) => loading
);

export const selectSuitesData = createSelector(
  selectSuitesRoot,
  ({ data }) => data || {}
);

export const selectSuitesMessage = createSelector(
  selectSuitesData,
  ({ message }) => message
);

export const selectSuitesStatus = createSelector(
  selectSuitesData,
  ({ status }) => status
);

export const selectSuites = createSelector(
  selectSuitesData,
  ({ testSuites }) => testSuites || {}
);

export const selectSuiteNames = createSelector(
  selectSuites,
  suites => Object.keys(suites).sort()
);
