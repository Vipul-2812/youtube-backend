import { Router } from "express";
import { userRegister } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(userRegister);

export default router;


// import { Router } from "express";
// import { registerUser } from "../controllers/user.controller.js";

// const router = Router()

// router.route("/register").post(registerUser)


// export default router;