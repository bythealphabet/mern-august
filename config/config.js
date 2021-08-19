const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "your_secret_key",
  jwtAcountActivation:
    process.env.JWT_ACCOUNT_ACTIVATION || "acount_activation",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    `mongodb://${process.env.IP || "localhost"}:${
      process.env.MONGO_PORT || "27017"
    }/mern-august-test-db`,
};

export default config;
