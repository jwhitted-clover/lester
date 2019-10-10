import React from 'react';

import keyValueShape from './keyValueShape';

const title = value => {
  if (value === null) return 'null';
  if (typeof value === 'string') return value;
  if (typeof value === 'boolean') return value.toString();
  return JSON.stringify(value);
};

const KeyValuePair = ({ kvp: { key, value } }) => (
  <span className="d-inline-block bg-light text-dark rounded p-1 m-1 small" title={title(value)}>
    {key}
  </span>
);

KeyValuePair.propTypes = { kvp: keyValueShape.isRequired };

KeyValuePair.defaultProps = {};

export default KeyValuePair;
