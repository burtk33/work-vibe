const router = require('express').Router();
const { Steps, Progress } = require('../../models');



router.get('/:id', async (req,res)=>{
    try{
      const projectData = await Steps.findByPk(req.params.id, { 
        include: 
        {
          model: Progress,
          attributes: ["id", "status", "part_of_total",],
        },
        
      })

      res.status(200).json(projectData);
     
    } catch(err){
      res.status(400).json(err);
    }
  });

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

  router.put('/', async (req, res) => {
    try {
      const dbUserData = await Steps.update({progress_id:req.body.progress_id},{
        
        where: {id: req.body.id},
        user_id:req.session.user_id

      });
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;