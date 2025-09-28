const faker = require('faker');

function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(12),
  };
}

module.exports = { generateUser };
