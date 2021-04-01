const { Project } = require('../models');

const projectData = 

[
    {
      "project_title": "First Project",
      "description": "This is my first project",
      "user_id": 1,

    
    },

  ]

  const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject;