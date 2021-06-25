import { Router } from "express";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuhenticated } from "./middlewares/ensureAuthenticated";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagController = new ListTagController();
const listUserController = new ListUserController();

const router = Router();
router.post("/users", createUserController.handle);
router.post("/tags", ensureAuhenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuhenticated, createComplimentController.handle);

router.get("/users/compliments/send", ensureAuhenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuhenticated, listUserReceiveComplimentsController.handle);
router.get("/tags", ensureAuhenticated, listTagController.handle);
router.get("/users", ensureAuhenticated, listUserController.handle);

export { router };
