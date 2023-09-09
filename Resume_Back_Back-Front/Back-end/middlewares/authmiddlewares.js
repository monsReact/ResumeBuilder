import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
const authmiddle = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ error: "No token provided" });
 if (!authHeader.startsWith("Bearer") || authHeader.split(" ").length !== 2) {
        return res.status(401).json({ error: "Invalid token" });
    }
    const token = authHeader.split(" ")[1]
    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user
        next()
    }
    catch (err) {
        console.log(err);
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ error: "Your token has expired. Please log in again." });
        }
        res.status(401).json({ error: "Invalid token" });
    }
};
export default authmiddle;