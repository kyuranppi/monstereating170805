import express from 'express';
import Food from '../models/food';
import mongoose from 'mongoose';

const router = express.Router();

router.post("/newFood", (req,res) =>{
    let food = new Food({
        name: req.body.name,
        ingredients: req.body.ingredients
    });
    
    food.save((err,docs) => {
            if(err) throw err;
           Food.find().exec((err,docs) => {
            if(err) throw err;
            return res.json(docs);
          });
        });
   
});

router.get("/allFood", (req,res) => {
  Food.find().exec((err,docs) => {
      if(err) throw err;
      return res.json(docs);
  });
}); 

router.post("/updateFood", (req, res) => {
    //req.body.id == objectId
    //req.body.name == name
    //req.body.ingredients == ingredients
    Food.findByIdAndUpdate(req.body.id, 
     {
         $set:{
         name: req.body.name,
         ingredients: req.body.ingredients
         }
     }, {new: true}, (err,docs) =>{
        if(err) throw err;
        Food.find().exec((err,docs) => {
            if(err) throw err;
             return res.json(docs);
  });
     }
     
    );
});

router.post("/deleteFood", (req,res) => {
    //req.body.id == objectId
   Food.findByIdAndRemove(req.body.id, (err, docs) => {
       if(err) throw err;
       Food.find().exec((err,docs) => {
            if(err) throw err;
             return res.json(docs);
       });
   }); 
});

export default router;