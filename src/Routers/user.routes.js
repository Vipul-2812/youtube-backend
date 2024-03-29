import { Router } from "express";
import { userRegister ,loginUser,logoutUser,refreshAccessToken,changeCurrentPassword} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js"
import { verifyJWT } from "../middleware/auth.middleware.js"


const router = Router();

router.route("/register").post(upload.fields([
    {
        name: "avatar",
        maxCount: 1
    },
    {
        name: "coverImage",
        maxCount: 1
    }
])
    , userRegister);



 router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT,  logoutUser) 
router.route("/refresh-token").post(refreshAccessToken)
router.route("/changePassword").post(verifyJWT,changeCurrentPassword)

export default router;


