const { Users } = require('../models');

const userData = 

[{
  "first_name": "morgan",
  "last_name": "bailey",
  "username": "Sal123",
  "password": "$2b$10$D1kkU8.XexRUSJhg9vo9x.V9CQvDjusy.CYQdtEttHNsJFA4dw/Q."
}
   
  ]

  const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;