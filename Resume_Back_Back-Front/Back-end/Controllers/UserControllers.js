import { User, SignupSchema, LoginSchema } from "../../Back-end/models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const UserContr = {
    Signup: async (req, res) => {
        const { error } = SignupSchema.validate(req.body, { abortEarly: false })
        if (error)
            return res.status(422).json(error.details)
        try {
            const { email, password } = req.body
            const finduser = await User.findOne({ email })
            if (finduser) {
                return res.status(400).json({ error: "Email is already taken" });
            }
            const hashpassword = await bcrypt.hash(password, 10)
            const user = new User({ ...req.body, password: hashpassword })
            await user.save()
            res.status(201).json({ message: "User created successfully", user});
        }
        catch (err) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while creating your Account" })
        }
    },
    Login: async (req, res) => {
        const { error } = LoginSchema.validate(req.body, { abortEarly: false })
        if (error)
            return res.status(422).json(error.details)
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email }, "+password")
            if (!user) {

                return res.status(400).json({ error: "Invalid email or password" })
            }
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword)
                return res.status(400).json({ error: "Invalid email or password" })
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
            res.status(200).json({ token });

        }
        catch (err) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while logging you in .Please try again." })
        }
    },
    me: (req, res) => {
        try {
            res.status(200).json({ user: req.user });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while fetching your data." });
        }
    }

}
export default UserContr