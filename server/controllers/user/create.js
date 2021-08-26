import User from "../../models/user.model";
import errorHandler from "../../helpers/dbErrorHandler";
// import { sendEmailWithNodemailer } from "../../email/email";
import sgMail from "@sendgrid/mail";
import config from "../../../config/config";
import jwt from "jsonwebtoken";
import confirmationMail from "../../email/email-templates/confirmationMail";

const development = config.env === "development";
sgMail.setApiKey(config.sendGridApiKey);

export const create = async (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({ error: "Email is taken" });
    }

    const token = jwt.sign(
      { name, email, password },
      config.jwtAcountActivation,
      { expiresIn: "10m" }
    );

    const msg = {
      to: email,
      from: "lucas@bythealphabet.com",
      subject: "Account activation link",
      html: confirmationMail(token, development),
    };

    sgMail
      .send(msg)
      .then((sent) => {
        return res.json({
          message: `An Email has been sent to ${email}. Follow the instruction to activate your account`,
        });
      })
      .catch((error) => {
        console.log("error", error);
        return res
          .status(400)
          .json({ error: errorHandler.getErrorMessage(error) });
      });
  });
};

export const confirmation = (req, res, next) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, config.jwtAcountActivation, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          error: "This acount activation link had expired",
        });
      }

      const { name, email, password } = jwt.decode(token);
      User.findOne(
        {
          email: email,
        },
        (err, user) => {
          if (err)
            return res.status("401").json({
              error: "Someting went wrong please try again",
            });

          if (!user) {
            const newUser = new User({
              name,
              email,
              password,
              isVerified: true,
            });
            newUser
              .save()
              .then(() =>
                res.status(200).json({
                  message: "Your Acount is Successfully Activated Please login",
                })
              )
              .catch((error) =>
                res.status(400).json({
                  error: errorHandler.getErrorMessage(error),
                })
              );

            return "";
          }

          if (user.isVerified) {
            return res.status(400).send({
              message: "This Email has already been verified, please login",
            });
          }
        }
      );
    });
  } else {
    return res
      .status(401)
      .json({ error: "Someting went wrong please try again" });
  }
};
