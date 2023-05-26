const express = require('express');
const router = new express.Router();
const user = require('../Schema/model.js')


//post methode
router.post("/users", async (req, res) => {
    try {
        const creatingNewUser = new user(req.body);
        const insert = await creatingNewUser.save();
        res.send(creatingNewUser);
    } catch (e) {
        res.send(e);
    }
});

//get methode
router.get("/users", async (req, res) => {
    try {
        const find = await user.find({}).sort({ "_id": 1 });
        res.send(find);
    } catch (e) {
        res.send(e);
    }
});

//get methode for only one
router.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const findone = await user.findById(id);
        res.send(findone);
    } catch (e) {
        res.send(e);
    }
});

//pathc methode for only one
router.patch("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const findone = await user.findByIdAndUpdate(id, req.body);
        res.send(findone);
    } catch (e) {
        res.send(e);
    }
});

//delete methode for only one
router.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const findone = await user.findByIdAndDelete({ _id: id });
        res.send(findone);
    } catch (e) {
        res.send(e);
    }
});


module.exports = router;