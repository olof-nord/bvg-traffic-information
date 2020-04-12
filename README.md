# BVG traffic information app

This project makes use of the [BVG Verkehrsmeldungen API](https://www.bvg.de/de/Fahrinfo/Verkehrsmeldungen)
to display the information in an appropriate form.

## Tooling
- Angular 9
- [ng-openapi-gen](https://github.com/cyclosproject/ng-openapi-gen) for API client generation
- [puppeteer](https://github.com/puppeteer/puppeteer) for running tests with a headless Chromium
- [dotenv](https://github.com/motdotla/dotenv) for .env file support
- [ngrx](https://github.com/ngrx/platform) for state management

## BVG Verkehrsmeldungen API
- The endpoint used is specified in [the API specification](./api/spec.yaml).
- Note that a BVG API token is required for authentication. 
- This could be put in a `.env` file in the root folder with a key `BVG_API_KEY=xyz` specified.

## Start
Running the app in dev mode including hot module reloading:  
`npm install`  
`npm start`

To run in production mode:  
`npm run build && npm start`

## Test
To execute all unit tests:  
`npm run test`

To execute all end-to-end tests:  
`npm run e2e`
