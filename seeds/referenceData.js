const { References } = require('../models');

const referenceData = 

[
    {
      "reference": "www.google.com",
      "project_id": 1,
      "user_id": 1,
      "step_id": 1,
      
    }
]

  const seedReferences = () => References.bulkCreate(referenceData);

module.exports = seedReferences;