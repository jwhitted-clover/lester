import PropTypes from 'prop-types';

export default (typeSpecs, values, location, componentName, getStack) => {
  let result;
  const { error } = console;
  try {
    // eslint-disable-next-line no-console
    console.error = e => {
      result = e;
    };
    PropTypes.checkPropTypes(typeSpecs, values, location, componentName, getStack);
  } catch (e) {
    result = e;
  } finally {
    PropTypes.resetWarningCache();
    // eslint-disable-next-line no-console
    console.error = error;
  }
  return result;
};
