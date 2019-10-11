import PropTypes from 'prop-types';

import eventState from './eventState';

export default PropTypes.arrayOf(
  PropTypes.exact({
    on: eventState.isRequired,
    description: PropTypes.string,
    select: PropTypes.oneOf(['BUTTON_1', 'ENTER', 'ESC']),
  })
);
