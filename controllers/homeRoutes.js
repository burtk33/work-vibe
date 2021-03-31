const router = require('express').Router();
const { Users, Project } = require('../models');
const withAuth = require('../utils/auth');

//GET route for homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const projectData = await Project.findAll({where:{user_id: req.session.user_id}});

    const projects = projectData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET route for login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;