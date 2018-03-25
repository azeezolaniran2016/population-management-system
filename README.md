# population-management-system
[![Build Status](https://travis-ci.org/azeezolaniran2016/population-management-system.svg?branch=master)](https://travis-ci.org/azeezolaniran2016/population-management-system) [![Coverage Status](https://coveralls.io/repos/github/azeezolaniran2016/population-management-system/badge.svg?branch=master)](https://coveralls.io/github/azeezolaniran2016/population-management-system?branch=master)

### Introduction
Population Management System for managing locations and the total number of persons in each location broken down by gender It allows the following operations:
- Creation of locations (with unique names)
- Creation of sub-locations by specifying the parentID during creation of the location
- Deletion of location - Preserving sub-locations (rendering them parentless)
- Updating location details.
- And much more, if not already implemented, surely are in the works

### Requirements
To be able to run this application locally, the following are required:
- [Node.JS]
- [Node Package Manager (npm)]
- Postgres DB service

### How To Use
This can be easily installed locally through these steps:
- Clone the repository locally
- Create a .env file in the root repository with the necessary environment variables as in the [.env.example](/.env.example) file
- Create the Postgres databases specified in the .env DB URLs
- Run `npm install` to install dependent Node packages
- Run `npm run migrations` to run necessary DB migrations
- Run `npm start` to start the server and test the API's as documented in the [swagger docs](/swagger.yaml)

### API Documentation
To interact with this service, you should use the API documentation available at [Swagger Hub](https://app.swaggerhub.com/apis/azeez-olaniran/rest-api_for_the_population_management_system/v1)

### How To Test
This application can be tested locally by running `npm test`


### Roadmap
[Project Roadmap](https://trello.com/b/2HuNTGyn/population-management-system)

### Contributors
- [Azeez Olaniran](https://github.com/azeezolaniran2016)

## How to Contribute
1. Fork this repository to your GitHub account
2. Clone the forked repository
3. Create your feature branch
4. Commit your changes
5. Push to the remote branch
6. Open a Pull Request

## Task List
- [x] Setup Version Control System
- [x] Setup CI/CD using Travis for builds and Coveralls for coverage reporting
- [x] Add Integration tests
- [x] Implement Data Layer - Models, Migrations..
- [x] Implement Routes, Controllers, and API server
- [ ] Implement Pagination
- [ ] Implement Searching
- [ ] Setup code style linting checks
- [ ] Add Web UI

## Technologies
sms-management-api is implemented using a number of technologies, these include:
* [node.js] - evented I/O for the backend
* [chai] - Assertion library for use with Mocha
* [express] - Serves development and production builds]
* [mocha] - JavaScript testing library
* [supertest] - HTTP assertions made easy via superagent
* [faker] - Generate massive amounts of fake data in the browser and node.js

   [mocha]: <https://mochajs.org>
   [node.js]: <http://nodejs.org>
   [chai]: <http://chaijs.com/api/bdd/>
   [express]: <http://expressjs.com/>
   [mocha]: <https://mochajs.org/>
   [supertest]: <https://github.com/visionmedia/supertest>
   [faker]: <https://github.com/marak/Faker.js/>
   [Node Package Manager (npm)]: <https://www.npmjs.com>
