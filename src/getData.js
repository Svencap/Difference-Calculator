import * as fs from 'fs';

const getData = (pathToFile) => fs.readFileSync(pathToFile);

export default getData;
