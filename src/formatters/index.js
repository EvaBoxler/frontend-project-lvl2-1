import stylish from './stylish.js';
import plain from './plain.js';

const diffTree = (tree, format) => {
  switch (format) {
    case 'stylish': {
      return stylish(tree);
    }
    case 'plain': {
      return plain(tree);
    }
    default:
      throw new Error(`Unknown format: '${format}'`);
  }
};

export default diffTree;