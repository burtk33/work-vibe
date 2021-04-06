const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const stepRoutes = require('./stepRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/steps', stepRoutes);

module.exports = router;
