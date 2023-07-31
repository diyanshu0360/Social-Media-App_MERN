// users route
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Update User
router.put("/:id", async (req, res) => {
    if(req.body.userID === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                return res.status(500).json(error);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });
            return res.status(200).json("Account updated")
        } catch (error) {
            return res.status(500).json(error); 
        }
    } else {
        return res.status(403).json("You can update only your account")
    }
})

// Delete User
router.delete("/:id", async (req, res) => {
    if(req.body.userID === req.params.id || req.body.isAdmin){
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            return res.status(200).json("Account Deleted")
        } catch (error) {
            return res.status(500).json(error); 
        }   
    } else {
        return res.status(403).json("You can delete only your account")
    }
})

// Get User
router.get("/", async (req, res) => {
    const userID = req.query.userID;
    const username = req.query.username;
    try {
        const user = userID ? await User.findById(userID) : await User.findOne({ username: username });
        const {password, updateAt, ...others} = user._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error);
    }
})

// Follow User
router.put("/:id/follow", async (req, res) => {
    if (req.body.userID !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);    // taken from url
            const currentuser = await User.findById(req.body.userID); 
            if(!user.followers.includes(req.body.userID)){
                await user.updateOne({ $push: { followers: req.body.userID}});
                await currentuser.updateOne({ $push: { followings: req.params.id}});
                res.status(200).json("user has been followed")
            } else {
                res.status(403).json("You already follow that user")
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("you can't follow yourself")
    }
})

// Unfollow User
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userID !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);    // taken from url
            const currentuser = await User.findById(req.body.userID); 
            if(user.followers.includes(req.body.userID)){
                await user.updateOne({ $pull: { followers: req.body.userID}});
                await currentuser.updateOne({ $pull: { followings: req.params.id}});
                res.status(200).json("user has been unfollowed")
            } else {
                res.status(403).json("You already unfollow that user")
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("you can't unfollow yourself")
    }
})

module.exports = router;