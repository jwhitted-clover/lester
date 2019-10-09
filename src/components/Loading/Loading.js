import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => (
  <span>
    <Spinner size="sm" color="dark" />
    <span className="ml-2 text-dark">Loading...</span>
  </span>
);

Loading.propTypes = {};

Loading.defaultProps = {};

export default Loading;
