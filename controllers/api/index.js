const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const stepRoutes = require('./stepRoutes');
const progressRoutes = require('./progressRoutes');
const referenceRoutes = require('./referenceRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/steps', stepRoutes);
router.use('/progress', progressRoutes);
router.use('/reference', referenceRoutes);

module.exports = router;
