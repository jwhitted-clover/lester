import { createSelector } from 'reselect';

export const selectMath = state => state.math;

export const selectMathResult = createSelector(
  selectMath,
  ({ result }) => result
);

export const selectMathFormula = createSelector(
  selectMath,
  ({ formula }) => formula
);
