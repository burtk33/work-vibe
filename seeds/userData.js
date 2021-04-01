const { Users } = require('../models');

const userData = 

[
    {
      "username": "Sal123",
      "first_name": "Sam",
      "last_name": "Long",
      "password": "password12345"
    },
    {
        "username": "Bob123",
        "first_name": "Bob",
        "last_name": "Brown",
        "password": "password12345"
    }
  ]

  const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;