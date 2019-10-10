import createStore from './createStore';

let resolver = o => o;
const promise = new Promise(resolve => {
  resolver = resolve;
});

createStore().then(store => resolver(store));

export default promise;
