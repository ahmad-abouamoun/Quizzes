import {Router} from "express";
import {getUsers} from "../Controllers/userController.js";

Router.get("/user", getUsers);
