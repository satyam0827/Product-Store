import express from "express"
import { logout, signin,signup,verifyEmail,forgotPassword,resetPassword} from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup",signup);

router.post("/signin",signin);
router.post("/logout",logout);
router.post("/verify-email",verifyEmail);
router.post("/forgot-password",forgotPassword);
router.post("/reset-password:token",resetPassword);
export default router;