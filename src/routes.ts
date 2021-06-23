import { Router } from "express";
import { CrateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CrateUserController();

router.post("/users", createUserController.handle);

export { router };
