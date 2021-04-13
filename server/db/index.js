import mongoose from "mongoose";

export default {
  config: () => {
    const { log } = console;
    const { DATABASE_URL } = process.env;

    mongoose
      .connect(DATABASE_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => log(`🔌 DB Connected to: ${DATABASE_URL}`))
      .catch((err) => {
        log(`🚨 DB Connection Error: ${err.message}`);
      });
  },
};
