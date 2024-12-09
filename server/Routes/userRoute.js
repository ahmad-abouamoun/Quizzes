import {Router} from "express";
import {getUsers} from "../Controllers/userController.js";

const router = new Router();
router.get("/:id?", getUsers);

export default router;
