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
    if (!name || !password || !email) {
        return res.status(500).send({
            message: "All feilds are required",
        });
    }
};
