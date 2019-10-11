import PropTypes from 'prop-types';

const reg = /^(SWIPE_CARD|PROGRAM_SWIPE)$/;

const validate = (propValue, key, componentName, location, propFullName) => {
  if (!Array.isArray(propValue)) {
    return new Error(`Invalid prop \`${propFullName}\` supplied to \`${componentName}\`. Validation failed.`);
  }

  const invalid = propValue.find(s => typeof s !== 'string' || !s.match(reg));
  if (invalid) {
    return new Error(
      `Invalid prop \`${propFullName}\` '${invalid}' supplied to \`${componentName}\`. Validation failed.`
    );
  }

  return undefined;
};

export default PropTypes.arrayOf(validate);
