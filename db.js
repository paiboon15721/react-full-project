const faker = require('faker')

const data = {
  users: gen(
    {
      id: '{{random.number}}',
      name: '{{company.companyName}} {{company.companySuffix}}',
      address: '{{address.streetAddress}}',
      phone: '{{phone.phoneNumber}}',
      email: '{{internet.email}}',
    },
    100,
  ),
}

function gen(schema, min = 1, max) {
  max = max || min
  return Array.from({ length: faker.random.number({ min, max }) }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      entity[key] = faker.fake(schema[key])
      return entity
    }, {}),
  )
}

module.exports = () => data
