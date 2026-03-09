const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Token not present" })
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({ message: "Invalid auth token" })
    }
}

module.exports = authMiddleware