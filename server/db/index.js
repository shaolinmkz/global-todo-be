import mongoose from "mongoose";

const { log } = console;

const { DATABASE_URL } = process.env;

export default {
  config: () =>
    mongoose
      .connect(DATABASE_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => log(`🔌 DB Connected to: ${DATABASE_URL}`))
      .catch((err) => {
        log(`DB Connection Error: ${err.message}`);
      }),
};
