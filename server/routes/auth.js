// authentication route

const router = require('express').Router();
const User = require('../models/User'); // Importing sample schema from models
const bcrypt = require('bcrypt');  // Hashing the auctal password before storing in database

// REGISTER
router.post('/register', async (req, res) => {
    try {
        // Securing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        // Requesting using postman
        // Creating new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        const user = await newUser.save(); // save user and return response
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
})

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("User not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(404).json("Wrong password")

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;