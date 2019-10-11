import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { debounce } from '../../common';
import { setValue, selectValue } from '../../store/values';

export default valueKey => Component => {
  const PersistentScroll = ({ scrollTop, setScrollTop }) => {
    const [initialScroll] = useState(scrollTop);

    const scrollRef = useRef(null);

    useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = initialScroll;
      }
    }, [initialScroll]);

    const onScroll = debounce(
      () => {
        if (scrollRef.current) {
          setScrollTop(scrollRef.current.scrollTop);
        }
      },
      { ms: 500 }
    );

    return <Component scrollRef={scrollRef} onScroll={onScroll} />;
  };

  PersistentScroll.propTypes = {
    scrollTop: PropTypes.number,
    setScrollTop: PropTypes.func.isRequired,
  };

  PersistentScroll.defaultProps = { scrollTop: 0 };

  const select = state => ({ scrollTop: selectValue(valueKey)(state) });

  const boundActions = { setScrollTop: setValue(valueKey) };

  return connect(
    select,
    boundActions
  )(PersistentScroll);
};
