import {User} from "../Models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        const users = await User.find();
        return res.json(users);
    }
    const user = await User.findById(id);

    if (!user) {
        res.status(404).send({
            message: "User Not Found",
        });
    }
    return res.json(user);
};
export const createUser = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({message: "All fields are required."});
        }

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: "Email already registered."});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        const result = await newUser.save();

        const secretKey = "mykey";
        const token = jwt.sign({id: newUser._id, name: newUser.name, email: newUser.email}, secretKey);
        res.status(201).json({
            message: "User created successfully.",
            token,
        });
    } catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const Signin = async (req, res) => {
    const {email} = req.body;
};
