export default (fn, { ms = 250 } = {}) => {
  let timeout;
  return (...args) => {
    // NOTE: React's SyntheticEvents need to be persisted
    if (args[0] && args[0].constructor.name === 'SyntheticEvent') {
      args[0].persist();
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
};
