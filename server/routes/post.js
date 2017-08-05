import express from 'express';
import Post from '../models/post';
import mongoose from 'mongoose';

const router = express.Router();

//create 글 생성
router.post('/create', (req,res) => {
    
    console.log('post create : ' + req.body.title + "//" + req.body.content);
    
    let post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    
    post.save((err,docs) => {
            if(err) throw err;
            Post.find().exec((err,docs) => {
              if(err) throw err;
              return res.json(docs);
           });
        });
   
});

//read 내용 가져오기
router.post('/read', (req,res) => {
    Post.findOne({_id:req.body.id}).exec((err,docs) => {
        if(err) throw err;
        return res.json(docs); 
    });
});

//get Post list 목록가져오기
router.get('/all', (req,res) => {
   Post.find().exec((err,docs) => {
      if(err) throw err;
      return res.json(docs);
   });
});

//update 수정하기
router.post('/update', (req,res) => {
    console.log('post update : ' +req.body.id + "//" + req.body.title + "//" + req.body.content);
   Post.findByIdAndUpdate(
       req.body.id,
       {$set: {
           title: req.body.title,
           content: req.body.content
       }},
       {new: true},
       (err,docs) => {
           if(err) return res.status(500).json({error: err});
           Post.find().exec((err,docs) => {
              if(err) throw err;
              return res.json(docs);
           });
       }) 
});

//delete 삭제하기
router.post('/delete', (req,res) => {
    console.log('post delete : ' + req.body.id + "//");
    Post.findByIdAndRemove(
        req.body.id,
        (err,docs) => {
            if(err) return res.status(500).json({error:err});
            Post.find().exec((err,docs) => {
              if(err) throw err;
              return res.json(docs);
           });
        })
});

export default router;