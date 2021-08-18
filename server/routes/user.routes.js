import express from "express";
import * as userCtrl from "../controllers/user";
import * as auth from "../controllers/auth";

const router = express.Router();

router.route("/api/users").post(userCtrl.create).get(userCtrl.list);

router
  .route("/api/users/:userId")
  .get(auth.requireSignin, userCtrl.read)
  .put(auth.requireSignin, auth.hasAuthorization, userCtrl.update)
  .delete(auth.requireSignin, auth.hasAuthorization, userCtrl.remove);

router.param("userId", userCtrl.userByID);

export default router;
