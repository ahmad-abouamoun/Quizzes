import {User} from "../Models/user.js";
import jwt from "jsonwebtoken";
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
        if (!name || !password || !email) {
            return res.status(500).send({
                message: `All feilds are required ${name} ${password} ${email}`,
            });
        }
        const user = await User.create({
            name,
            password,
            email,
        });

        return res.json(user);
        const secretKey = "mykey";
        const token = jwt.sign(name, secretKey);
        res.send(token);
    } catch (error) {
        res.send(error);
    }
};
