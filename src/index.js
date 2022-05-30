import _ from 'lodash';
import getPath from './getPath.js';
const genDiff = (filepath1, filepath2) => {
    const file1 = getPath(filepath1);
    const file2 = getPath(filepath2);
    const keys1 = Object.keys(file1);
    const keys2 = Object.keys(file2);
    const sortedKeys = _.union(keys1, keys2).sort();

    const result = [];
    sortedKeys.map((key) => {
        if (!_.has(file1, key)) {
            result.push(` + ${key}: ${file2[key]}`);
        } else if (!_.has(file2,key)) {
            result.push(` - ${key}: ${file1[key]}`);
        } else if (file1[key] !== file2[key]) {
            result.push(` - ${key}: ${file1[key]}`);
            result.push(` + ${key}: ${file2[key]}`);
        } else {
            result.push(`   ${key}: ${file1[key]}`);
        }
        return null;
    });
    
    return ['{', ...result, '}'].join('\n');
};

export default genDiff;