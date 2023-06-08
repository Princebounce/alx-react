const { fromJS } = require('immutable');

function getImmutableObject(object) {
  return fromJS(object);
}

// Example usage
const obj = { key1: 'value1', key2: 'value2' };
const immutableMap = getImmutableObject(obj);
console.log(immutableMap);

