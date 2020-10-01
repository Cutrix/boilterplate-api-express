import {Router} from "express";
import AuthController from "../controllers/AuthController";


const router = Router()
//login route
router.post("/login", AuthController.login);

//Change my password
router.post("/change-password", AuthController.changePassword);


export default router;
