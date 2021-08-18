import express from "express";
import * as auth from "../controllers/auth";

const router = express.Router();

router.route("/auth/signin").post(auth.signin);
router.route("/auth/signout").get(auth.signout);

export default router;
