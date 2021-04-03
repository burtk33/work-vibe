const { Users } = require('../models');

const userData = 

[
    {
      "username": "Bob123",
      "first_name": "Bob",
      "last_name": "Robert",
      "password": "password123"

    },
    {
      "username": "Bill123",
      "first_name": "William",
      "last_name": "Smith",
      "password": "password123"

    }
  ]

  const seedSteps = () => Users.bulkCreate(userData);

module.exports = seedSteps;