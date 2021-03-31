#!/usr/bin/env node
import { Command } from 'commander';

import * as fs from 'fs';

import path from 'path';

import { fileURLToPath } from 'url';

import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import diff from '../gendiff-json.js';

const program = new Command();





program
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const pathToFile1 = path.resolve(__dirname, '..', filepath1);
    const pathToFile2 = path.resolve(__dirname, '..', filepath2);
    const readingFile1 = fs.readFileSync(pathToFile1);
    const readingFile2 = fs.readFileSync(pathToFile2);
    diff(JSON.parse(readingFile1), JSON.parse(readingFile2));
  })
  .parse();

  //const pathFirst = path.resolve(filepath1)
  //const pathFirst2 = path.resolve(filepath2)
  //console.log(process.cwd())
  //console.log(path.resolve(filepath1))
  //console.log(pathFirst)
  //const read1 = fs.readFileSync(pathFirst);
  //const read2 = fs.readFileSync(pathFirst2);
  //const json1 = JSON.parse(read1)
  //const json2 = JSON.parse(read2)
  //console.log(diff(json1, json2));