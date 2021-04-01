const { Steps } = require('../models');

const stepData = 

[
    {
      "title": "Research Process",
      "description": "Gotta research this",
      "step_number": 1,
      "progress_id": 4,
      "project_id": 1,
      "user_id": 1

    },
    {
        "title": "Buy Things",
        "description": "Gotta buy some stuff",
        "step_number": 2,
        "progress_id": 2,
        "project_id": 1,
        "user_id": 1
  
      },
      {
        "title": "Finish Project",
        "description": "Yay!",
        "step_number": 3,
        "progress_id": 1,
        "project_id": 1,
        "user_id": 1
  
      },
  ]

  const seedSteps = () => Steps.bulkCreate(stepData);

module.exports = seedSteps;