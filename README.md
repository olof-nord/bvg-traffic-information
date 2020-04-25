# BVG traffic information app
This project aims to visualise and present bus, tram, subway and ferry public transport information in Berlin.

## BVG
Berliner Verkehrsbetriebe (German: "Berlin Transport Company") is is the main public transport company of Berlin, Germany.

## Tooling
- [Angular](https://github.com/angular/angular) as a framework for building the web application
- [ng-openapi-gen](https://github.com/cyclosproject/ng-openapi-gen) for API client generation
- [puppeteer](https://github.com/puppeteer/puppeteer) for running tests with a headless Chromium
- [dotenv](https://github.com/motdotla/dotenv) for .env file support
- [ngrx](https://github.com/ngrx/platform) for state management
- [moment](https://github.com/moment/moment) for time management
- [bootstrap](https://github.com/twbs/bootstrap) for design and style management
- [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) for Angular bootstrap components
- [font-awesome](https://github.com/FortAwesome/Font-Awesome) for icons
- [angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome) for Angular icon components

## BVG Verkehrsmeldungen API
- This project makes use of the [BVG Verkehrsmeldungen API](https://www.bvg.de/de/Fahrinfo/Verkehrsmeldungen)
- The endpoint used is specified in [the API specification](./api/spec.yaml).
- Note that a BVG API token is required for authentication. 
- This could be put in a `.env` file in the root folder with a key `BVG_API_KEY=xyz` specified.
- The token could also be set by setting the environment variable `export BVG_API_KEY=xyz` before starting.

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
