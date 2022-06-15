import _, { isPlainObject } from 'lodash';

const makeTree = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const result = sortedKeys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];

    if (isPlainObject (value1) && isPlainObject(value2)) {
      return {
        key,
        type: 'nested',
        children: makeTree(value1, value2),
      };
    }
    if (!_.has(file2, key)) {
      return {
        key,
        type: 'deleted',
        value: value1,
      };
    }
    if (!_.has(file1, key)) {
      return {
        key,
        type: 'added',
        value: value2,
      };
    }
    if (value1 !== value2) {
      return {
        key,
        type: 'changed',
        removedValue: value1,
        addedValue: value2,
      };
    }

    return {
      key,
      type: 'unchanged',
      value: value1,
    };
  });

  return result;
};

export default makeTree;
