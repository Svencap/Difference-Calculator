var _ = require('lodash');

const file1 = {
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
};

const file2 = {
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
};


const diff = (file1, file2) => {
  let diff = `{`;
  const keysFile1 = Object.keys(file1)
  const keysFile2 = Object.keys(file2)
  const keys = keysFile1.concat(keysFile2).sort();
  const result = _.keyBy(keys);
  console.log(result)
  for (const [key] of Object.entries(result)) {
    if (_.has(file1, key) && _.has(file2, key)) {
      if (file1[key] === file2[key]) diff += `\n    ${key}: ${file1[key]}`;
      else diff += `\n  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`;
    }
    if (_.has(file1, key) && !_.has(file2, key)) diff += `\n  - ${key}: ${file1[key]}`;
    else if (!_.has(file1, key) && _.has(file2, key)) diff += `\n  + ${key}: ${file2[key]}`
  }
  diff += `\n}`;
  return diff
};
 
export { diff };