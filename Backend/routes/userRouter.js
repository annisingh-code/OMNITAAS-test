const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();


userRouter.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (password.length < 6) {
        return res.status(400).json({ msg: "Password should be of 6 characters" })
    }
    if (username === "admin" && password === "admin123") {

        const token = jwt.sign({
            username
        }, 'SECRET', { expiresIn: '1h' });
        return res.status(200).json({ message: "Login successful" })
    }

    return res.status(401).json({ msg: "Invalid credentials" })
})




userRouter.get("/profile", (req, res) => {
    res.status(200).json({
        message: "Profile info",
        user: req.user
    })
})


userRouter.get("/dashboard", authMiddleware, (req, res) => {

    res.json({
        message: `Welcome to ${req.user} dashboard `
    })


});


module.exports = userRouter;