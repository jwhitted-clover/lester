/* eslint-disable max-len */
export default regex => {
  const validator = (propValue, key, componentName, location, propFullName) => {
    const value = propValue[key];
    if (value !== undefined) {
      if (typeof value !== 'string') {
        return new Error(
          `Invalid prop \`${propFullName}\` supplied to \`${componentName}\`. Expected string, received ${typeof value}. Validation failed.`
        );
      }

      if (!value.match(regex)) {
        return new Error(
          `Invalid prop \`${propFullName}\` '${value}' supplied to \`${componentName}\`. Validation failed.`
        );
      }
    }

    return undefined;
  };

  validator.isRequired = (...args) => {
    const [propValue, key, componentName, , propFullName] = args;
    if (propValue[key] === undefined) {
      return new Error(
        `The prop \`${propFullName}\` is marked as required in \`${componentName}\`, but its value is \`undefined\`.`
      );
    }

    return validator(...args);
  };

  return validator;
};
/* eslint-enable max-len */
