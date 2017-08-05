'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _food = require('../models/food');

var _food2 = _interopRequireDefault(_food);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post("/newFood", function (req, res) {
    var food = new _food2.default({
        name: req.body.name,
        ingredients: req.body.ingredients
    });

    food.save(function (err, docs) {
        if (err) throw err;
        _food2.default.find().exec(function (err, docs) {
            if (err) throw err;
            return res.json(docs);
        });
    });
});

router.get("/allFood", function (req, res) {
    _food2.default.find().exec(function (err, docs) {
        if (err) throw err;
        return res.json(docs);
    });
});

router.post("/updateFood", function (req, res) {
    //req.body.id == objectId
    //req.body.name == name
    //req.body.ingredients == ingredients
    _food2.default.findByIdAndUpdate(req.body.id, {
        $set: {
            name: req.body.name,
            ingredients: req.body.ingredients
        }
    }, { new: true }, function (err, docs) {
        if (err) throw err;
        _food2.default.find().exec(function (err, docs) {
            if (err) throw err;
            return res.json(docs);
        });
    });
});

router.post("/deleteFood", function (req, res) {
    //req.body.id == objectId
    _food2.default.findByIdAndRemove(req.body.id, function (err, docs) {
        if (err) throw err;
        _food2.default.find().exec(function (err, docs) {
            if (err) throw err;
            return res.json(docs);
        });
    });
});

exports.default = router;