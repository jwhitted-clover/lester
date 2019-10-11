export default values => {
  const validator = (propValue, key, componentName, location, propFullName) => {
    const value = propValue[key];
    if (value !== undefined) {
      if (!Array.isArray(value)) {
        return new Error(`Invalid prop \`${propFullName}\` supplied to \`${componentName}\`. Validation failed.`);
      }

      const invalid = value.find(s => typeof s !== 'string' || !values.includes(s));
      if (invalid) {
        return new Error(
          `Invalid prop \`${propFullName}\` '${invalid}' supplied to \`${componentName}\`. Validation failed.`
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
