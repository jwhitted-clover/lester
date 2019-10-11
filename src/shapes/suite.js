import PropTypes from 'prop-types';

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  suites: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })),
  tests: PropTypes.arrayOf(PropTypes.string),
});
