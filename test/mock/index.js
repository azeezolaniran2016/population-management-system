const faker = require('faker')

module.exports = {
  valid1: {
    name: faker.address.streetName(),
    femalePopulation: faker.random.number({ min: 0, max: 1000}),
    malePopulation: faker.random.number({ min: 0, max: 1000})
  },
  valid2: {
    name: faker.address.streetName(),
    femalePopulation: faker.random.number({ min: 0, max: 1000}),
    malePopulation: faker.random.number({ min: 0, max: 1000})
  },
  valid3: {
    name: faker.address.streetName(),
    femalePopulation: faker.random.number({ min: 0, max: 1000}),
    malePopulation: faker.random.number({ min: 0, max: 1000})
  },
  valid4: {
    name: faker.address.streetName(),
    femalePopulation: faker.random.number({ min: 0, max: 1000}),
    malePopulation: faker.random.number({ min: 0, max: 1000})
  },
  invalid1: {
    femalePopulation: faker.random.number({ min: 0, max: 1000}),
    malePopulation: faker.random.number({ min: 0, max: 1000})
  },
  invalid2: {
    name: faker.address.streetName(),
  }
}
