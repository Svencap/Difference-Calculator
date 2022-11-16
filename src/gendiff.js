/* eslint-disable import/extensions */
import { program } from 'commander/esm.mjs';

import genDiff from './cli-commander.js';

// const program = new Command();

program
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    const param = program.opts().format;
    console.log(genDiff(filepath1, filepath2, param));
  })
  .parse(process.argv);

export default () => program;
