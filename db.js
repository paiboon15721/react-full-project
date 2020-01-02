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
  departments,
  login: gen({
    user: faker.name.firstName,
    role: () => 'admin',
  }),
}

function gen(schema, length) {
  const mapper = () =>
    Object.keys(schema).reduce((entity, key) => {
      entity[key] = schema[key]()
      return entity
    }, {})

  if (length) {
    return Array.from({ length }).map(mapper)
  }
  return mapper()
}

module.exports = () => data
