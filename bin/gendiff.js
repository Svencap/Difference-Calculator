#!/usr/bin/env node
/* eslint-disable import/extensions */

import { Command } from 'commander';
// import { formater } from '../gendiffFiles.js';

import { parser } from '../src/getPath.js';

// import getData from '../src/getData.js';

import { diff, formater } from '../gendiffFiles.js';

const program = new Command();

program
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const treeAst = diff(parser(filepath1), parser(filepath2));
    // console.log(treeAst);
    // console.log(formater(treeAst));
    console.log(formater(treeAst));
  })
  .parse();
