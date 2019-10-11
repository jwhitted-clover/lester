import { createSelector } from 'reselect';

export const selectValues = state => state.values || {};

export const selectValue = (name, defaultValue = undefined) =>
  createSelector(
    selectValues,
    values => (Object.prototype.hasOwnProperty.call(values, name) ? values[name] : defaultValue)
  );
