import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import template from "./../template";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

import devBundle from "./../build-utils/devBundle";

const app = express();

const development = process.env.NODE_ENV === "development";
if (development) {
  console.log("development mode devBundle active:");
  devBundle.compile(app);
}

app.use(express.urlencoded({ extended: true })); //<-----------Need to Read About this part of EXPRESS
app.use(express.json()); //<-----------Need to Read About this part of EXPRESS
app.use(compress());
app.use(cookieParser());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(cors());

const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.use("/", userRoutes);
app.use("/", authRoutes);

app.get("*", (req, res) => {
  if (req.url === "/__webpack_hmr") return;
  res.status(200).send(template());
});

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;
