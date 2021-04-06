const router = require('express').Router();
const { Steps } = require('../../models');



router.get('/', async (req,res)=>{
    try{
      const projectData = await Steps.findAll({});
      res.status(200).json(projectData);
    }catch(err){
      res.status(400).json(err);
    }
  })

router.post('/', async (req, res) => {
    try {
      const dbUserData = await Steps.create({
        ...req.body,
        progress_id:1,
        user_id:req.session.user_id

      });
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;