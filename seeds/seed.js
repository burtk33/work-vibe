const seedProgress = require('./progressData');
const seedProject = require('./projectData');
const seedSteps = require('./stepData');
const seedUsers = require('./userData');
const seedReferences = require('./referenceData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('DATABASE SYNCED');
  
  await seedUsers();
    console.log('USERS SEEDED');

    await seedProject();
    console.log('PROJECTS SEEDED');

    await seedProgress();
    console.log('PROGRESS SEEDED');
  
  await seedSteps();
    console.log('STEPS SEEDED');

  await seedReferences();
    console.log('REFERENCES SEEDED');

  process.exit(0);
};

seedAll();