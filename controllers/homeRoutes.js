const router = require("express").Router();
const { Users, Project, Steps, References, Progress } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const projectData = await Project.findAll({
      where: { user_id: req.session.user_id },
    });

    const projects = projectData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/landingpage", async (req, res) => {
  try {
    res.render("landingpage", 
    { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/contact", async (req, res) => {
  try {
    res.render("contact",
    { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/about", withAuth, async (req, res) => {
  try {
    res.render("about",{ logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/project", withAuth, async (req, res) => {
  try {
    res.render("project");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/projects/:id", withAuth, async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: Steps,
          attributes: [
            "id",
            "title",
            "description",
            "step_number",
            "progress_id",
            "project_id",
            "user_id",
          ],
        },
        {
          model: References,
          attributes: ["id", "reference", "project_id", "user_id", "step_id"],
        },
        {
          model: Users,
          attributes: ["id"],
        },
      ],
    });

    const project = projectData.get({ plain: true });
    console.log(project);

    res.render("project", {
      project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/landingpage", async (req, res) => {
  try {
    res.render("landingpage");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET route for login
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
