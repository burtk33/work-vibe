const router = require('express').Router();
const {  References } = require('../../models');



router.post('/', async (req,res)=>{
    try{
      const projectData = await References.create({
        ...req.body,
        user_id:req.session.user_id
   
      })

      res.status(200).json(projectData);
     
    } catch(err){
      res.status(400).json(err);
    }
  });


  module.exports = router;