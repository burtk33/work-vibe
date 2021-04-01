const { Progress } = require('../models');

const progressData = 

[
    {
      "status": "Planning",
      "part_of_total": 25,
      "step_number": 1
    
    },
    {
        "status": "To Do",
        "part_of_total": 50,
        "step_number": 1
      
      },
      {
        "status": "In Progress",
        "part_of_total": 75,
        "step_number": 1
      
      },
      {
        "status": "Done",
        "part_of_total": 100,
        "step_number": 1
      
      },
  ]

  const seedProgress = () => Progress.bulkCreate(progressData);

module.exports = seedProgress;