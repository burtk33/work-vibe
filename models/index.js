const Users = require('./Users');
const Project = require('./Project');

Users.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(Users, {
  foreignKey: 'user_id'
});

module.exports = { Users, Project };