import app from "./express";
import mongoose from "mongoose";
import config from "../config/config";

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    app.listen(config.port);
    console.log("Server is listening on PORT:", config.port);
  })
  .catch((err) => {
    console.log("Error Mongoose Connection:", err);
  });
