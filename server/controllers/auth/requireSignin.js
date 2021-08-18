import expressJwt from "express-jwt";
import config from "../../../config/config";

export const requireSignin = expressJwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  userProperty: "auth",
});
