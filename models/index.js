const Users = require('./Users');
const Project = require('./Project');
const Progress = require('./Progress');
const References = require('./References');
const Steps = require('./Steps');

Users.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(Users, {
  foreignKey: 'user_id'
});

Project.hasMany(Steps, {
  foreignKey: 'project_id'
});

Steps.belongsTo(Project, {
  foreignKey: 'project_id'
});

Steps.hasMany(References, {
  foreignKey: 'step_id'
});


Steps.hasOne(Progress, {
  foreignKey: 'progress_id'
});

module.exports = { Users, Project, Progress, References, Steps };