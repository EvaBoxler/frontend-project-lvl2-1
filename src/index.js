import { readFile, getFormat } from './readFile.js';
import parse from './parsers.js';
import makeTree from './makeTree.js';
import diffTree from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const readFile1 = readFile(filepath1);
  const readFile2 = readFile(filepath2);
  const file1 = parse(readFile1, getFormat(filepath1));
  const file2 = parse(readFile2, getFormat(filepath2));

  const tree = makeTree(file1, file2);

  return diffTree(tree, format);
};

export default genDiff;
