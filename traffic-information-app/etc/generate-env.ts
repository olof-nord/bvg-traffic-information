// This file is inspired by the solution written by Riccardo Andreatta here:
// https://github.com/Ferie/angular-dot-env-environments/tree/dot-env-example

const fs = require('fs');

require('dotenv').config();

let targetPath = './src/environments/environment.ts';
let isProd = false;

if(process.argv[2] == 'prod') {
  targetPath = './src/environments/environment.prod.ts';
  isProd = true;
}

if(process.env.BVG_API_KEY == undefined) {
  throw console.error('The environment variable BVG_API_KEY is required');
}

// environment.ts file structure that uses the environment variables
const envConfigFile = `
export const environment = {
    production: ${isProd},
    BVG_API_KEY: '${process.env.BVG_API_KEY}'
};
`;

fs.mkdir('./src/environments', function (err) {
  if (err) {
    throw console.error(err);
  }
});

fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Angular environment file generated at '${targetPath}' \n`);
  }
});
