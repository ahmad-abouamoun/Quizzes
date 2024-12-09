import {Router} from "express";
import {createUser, getUsers, Signin} from "../Controllers/userController.js";

const router = new Router();

router.get("/:id?", getUsers);
router.post("/", createUser);
router.post("/signin", Signin);

export default router;
