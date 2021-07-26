#!/usr/bin/env node
/* eslint-disable import/extensions */

import { Command } from 'commander';

import { parser } from '../src/getPath.js';

import createdTree from '../treeAst.js';

import formaterName from '../formatters/index.js';

const program = new Command();

program
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const treeAst = createdTree(parser(filepath1), parser(filepath2));
    console.log(formaterName(options, treeAst));
  })
  .parse();
