#!/usr/bin/env node
/* eslint-disable import/extensions */

import { Command } from 'commander';

import { parser } from '../src/getPath.js';

// import getData from '../src/getData.js';

import getdiff from '../gendiffFiles.js';

const program = new Command();

program
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    // const pathToFile1 = getPath(filepath1);
    // const pathToFile2 = getPath(filepath2);
    // const readingFile1 = getData(pathToFile1);
    // const readingFile2 = getData(pathToFile2);
    // console.log(parser(filepath1));
    // console.log(parser(filepath2));
    console.log(getdiff(parser(filepath1), parser(filepath2)));
    // console.log(getdiff(parser(filepath1), parser(filepath2)));
  })
  .parse();
