# BVG traffic information app

This project should make use of the [BVG Verkehrsmeldungen API](https://www.bvg.de/de/Fahrinfo/Verkehrsmeldungen) and display the information in an appropriate form.

## Tooling
- Angular 9
- [ng-openapi-gen](https://github.com/cyclosproject/ng-openapi-gen) for API client generation
- [puppeteer](https://github.com/puppeteer/puppeteer) for running tests with a headless Chromium

## BVG Verkehrsmeldungen API
- The endpoint used is specified in [the API specification](./api/spec.yaml).

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
