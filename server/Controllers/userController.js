import {User} from "../Models/user";

export const getUsers = async (req, res) => {
    const id = res.params.id;
    if (!id) {
        const users = User.find();
        return res.json(users);
    }
};
