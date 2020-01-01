const faker = require('faker')

const departments = ['staff', 'manager', 'sale', 'account', 'specialist']

const data = {
  employees: gen(
    {
      id: faker.random.number,
      name: faker.name.firstName,
      age: () => faker.random.number({ min: 20, max: 60 }),
      salary: () => faker.finance.amount(25000, 80000),
      department: () =>
        departments[faker.random.number(departments.length - 1)],
      phone: faker.phone.phoneNumber,
      email: faker.internet.email,
    },
    100,
  ),
}

function gen(schema, length) {
  return Array.from({ length }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      entity[key] = schema[key]()
      return entity
    }, {}),
  )
}

module.exports = () => data
