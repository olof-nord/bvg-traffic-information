# BVG traffic information app - DEV readme
This is the developer-focused readme for the project.  
For the main readme, see [here](https://github.com/olof-nord/bvg-traffic-information-app/blob/master/README.md)

## Getting started

### Prerequisites
To start and build the project locally, you need to install [Angular](https://github.com/angular/angular) and [Node](https://github.com/nodejs/node).
To manage several versions of node, [nvm](https://github.com/nvm-sh/nvm) comes in handy.

### Verkehrsmeldungen API
- The endpoint used is specified in [the API specification](https://github.com/olof-nord/bvg-traffic-information-app/blob/master/api/spec.yaml).
- Per default, the 'dev' instance of the BVG Verkehrsmeldungen API is used.
- Note that a BVG API token is required for authentication. 
- A token can be requested in the [BVG Apigee](https://bvg-nonprod-devel.apigee.io) portal.
- This could be put in a `.env` file in the root folder with a key `BVG_API_KEY=xyz` specified.
- The token could also be set by setting the environment variable `export BVG_API_KEY=xyz` before starting.

### Install dependencies 
Before starting, make sure to install the dependencies
```sh
npm install
```

### Development server
```sh
npm run start
```

Once completed, a browser tab will open which points to `http://localhost:4200`. The app will automatically reload if you change any of the source files.

### Build
```sh
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Linter
```sh
npm run lint
```

The unit tests are run with [TSLint](https://github.com/palantir/tslint).  
The linter configuration file is [tslint.json](https://github.com/olof-nord/bvg-traffic-information-app/blob/master/traffic-information-app/tslint.json).

### Running unit tests
```sh
npm run test
``` 
The unit tests are run with [Karma](https://karma-runner.github.io).
The Karma configuration file is [karma.conf.js](https://github.com/olof-nord/bvg-traffic-information-app/blob/master/traffic-information-app/karma.conf.js).

### Running end-to-end tests
```sh
npm run e2e
```

The end-to-end tests are run with [Protractor](http://www.protractortest.org/).
The Protractor configuration file is [protractor.conf.js](https://github.com/olof-nord/bvg-traffic-information-app/blob/master/traffic-information-app/e2e/protractor.conf.js).

## GitHub pipeline
The project uses the GitHub actions to automatically execute the above commands on every `master` branch commit.
The GitHub workflow configuration file is [.github/workflows/main.yml](https://github.com/olof-nord/bvg-traffic-information-app/blob/master/.github/workflows/main.yml).
