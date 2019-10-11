import { createSelector } from 'reselect';

export const selectValues = state => state.values || {};

export const selectValue = name =>
  createSelector(
    selectValues,
    values => values[name]
  );
