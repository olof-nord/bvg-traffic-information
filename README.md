# BVG traffic information app
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Folof-nord%2Fbvg-traffic-information-app%2Fbadge&label=build&logo=none)](https://actions-badge.atrox.dev/olof-nord/bvg-traffic-information-app/goto?ref=master)
[![Current Version](https://img.shields.io/badge/version-0.3.0-green.svg)](https://github.com/olof-nord/bvg-traffic-information-app)

A traffic information app to present bus, tram, subway and ferry public transport status information in Berlin.

The project is a redesign of the [BVG Verkehrsmeldungen](https://www.bvg.de/de/Fahrinfo/Verkehrsmeldungen) section of the BVG page.

**Desktop**  
<kbd>
![Desktop Preview](https://github.com/olof-nord/bvg-traffic-information-app/raw/master/assets/Screenshot_desktop.png)
</kbd>

**Mobile**  

<p align="center">
  <kbd>
    <img src="https://github.com/olof-nord/bvg-traffic-information-app/raw/master/assets/Screenshot_mobile.png" alt="Screenshot of mobile view"/>
  </kbd>
</p>

## Features
- Modern, mobile-friendly design
- Contextual information
- Information levels rather than everything-at-once

## BVG
Berliner Verkehrsbetriebe (German: "Berlin Transport Company") is is the main public transport company of Berlin, Germany.

### Verkehrsmeldungen API
- This project makes use of the BVG Verkehrsmeldungen API.
- Note that a BVG API token is required for authentication. 
- For more details, see the [developer readme](https://github.com/olof-nord/bvg-traffic-information-app/blob/master/traffic-information-app/README.md).

## Technologies used
### Frameworks
To start and build the project locally, you need to install the below.
- [Angular 9](https://github.com/angular/angular) for its web framework.
- [Node 12](https://github.com/nodejs/node) for its JavaScript runtime.

### Tooling
This project uses the following dependencies:
- [ng-openapi-gen](https://github.com/cyclosproject/ng-openapi-gen) for API client generation
- [puppeteer](https://github.com/puppeteer/puppeteer) for running tests with a headless (automated, hidden) Chromium
- [dotenv](https://github.com/motdotla/dotenv) for .env file support
- [ngrx](https://github.com/ngrx/platform) for state management
- [moment](https://github.com/moment/moment) for time management
- [bootstrap](https://github.com/twbs/bootstrap) for design and style management
- [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) for Angular bootstrap components
- [font-awesome](https://github.com/FortAwesome/Font-Awesome) for icons
- [angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome) for Angular icon components

### Icons
The icons used are taken from the Wikimedia Commons category for [BVG](https://commons.wikimedia.org/wiki/Category:Berliner_Verkehrsbetriebe)
with some various minor modifications.

## Setup
### Install dependencies 
```sh
npm --prefix ./traffic-information-app install
```

### Run
Running the app:  
```sh
npm run --prefix ./traffic-information-app start
```

## More details
For more in-depth details, see the [developer readme](https://github.com/olof-nord/bvg-traffic-information-app/blob/master/traffic-information-app/README.md).

## License
>You can check out the full license [here](https://github.com/olof-nord/bvg-traffic-information-app/blob/master/LICENSE)

This project is licensed under the terms of the **GPL-3.0** license.
