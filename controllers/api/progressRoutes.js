const router = require('express').Router();
const { Steps, Progress } = require('../../models');



  router.get('/', async (req,res)=>{
    try{
      const projectData = await Progress.findAll({  
          include: 
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
      
        },});
      res.status(200).json(projectData);
    }catch(err){
      res.status(400).json(err);
    }
  })


  module.exports = router;