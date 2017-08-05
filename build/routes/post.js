'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//create 글 생성
router.post('/create', function (req, res) {

    console.log('post create : ' + req.body.title + "//" + req.body.content);

    var post = new _post2.default({
        title: req.body.title,
        content: req.body.content
    });

    post.save(function (err, docs) {
        if (err) throw err;
        _post2.default.find().exec(function (err, docs) {
            if (err) throw err;
            return res.json(docs);
        });
    });
});

//read 내용 가져오기
router.post('/read', function (req, res) {
    _post2.default.findOne({ _id: req.body.id }).exec(function (err, docs) {
        if (err) throw err;
        return res.json(docs);
    });
});

//get Post list 목록가져오기
router.get('/all', function (req, res) {
    _post2.default.find().exec(function (err, docs) {
        if (err) throw err;
        return res.json(docs);
    });
});

//update 수정하기
router.post('/update', function (req, res) {
    console.log('post update : ' + req.body.id + "//" + req.body.title + "//" + req.body.content);
    _post2.default.findByIdAndUpdate(req.body.id, { $set: {
            title: req.body.title,
            content: req.body.content
        } }, { new: true }, function (err, docs) {
        if (err) return res.status(500).json({ error: err });
        _post2.default.find().exec(function (err, docs) {
            if (err) throw err;
            return res.json(docs);
        });
    });
});

//delete 삭제하기
router.post('/delete', function (req, res) {
    console.log('post delete : ' + req.body.id + "//");
    _post2.default.findByIdAndRemove(req.body.id, function (err, docs) {
        if (err) return res.status(500).json({ error: err });
        _post2.default.find().exec(function (err, docs) {
            if (err) throw err;
            return res.json(docs);
        });
    });
});

exports.default = router;