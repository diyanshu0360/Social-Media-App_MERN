const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

// Create a Post
router.post("/", async (req, res) => {
    const newPost = await new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update a Post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userID === req.body.userID){
            await post.updateOne({$set: req.body})
            res.status(200).json("Post updated successfully")
        } else {
            res.status(403).json("You can only update your post")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}) 

// Delete a Post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userID === req.body.userID){
            await post.deleteOne({$set: req.body})
            res.status(200).json("Post Deleted successfully")
        } else {
            res.status(403).json("You can only delete your post")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}) 

// like / dislike a post
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userID)){
            await Post.updateOne({ $push: {likes: req.body.userID}})
            res.status(200).json("Post has been Liked");
        } else {
            await Post.updateOne({ $pull: {likes: req.body.userID}})
            res.status(200).json("Post has been Disliked");
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// get a post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }   
})

// get all timeline post
router.get("/timeline/:userID", async (req, res) => {
    try {
        const currentuser = await User.findById(req.params.userID);
        const userposts = await Post.find({ userID: currentuser._id });
        const friendposts = await Promise.all(
            currentuser.followings.map((friendID) => {
                return Post.find({ userID: friendID})
                 
            })
        )
        res.status(200).json(userposts.concat(...friendposts))
    } catch (error) {
        res.status(500).json(error)
    }
})

// get users all post
router.get("/profile/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username})
        const posts = await Post.find({ userID: user._id })
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;