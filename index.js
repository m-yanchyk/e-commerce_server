require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const errorMiddleware = require("./middlewares/errors");
const adminRouter = require("./routes/admin");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("*", cors());
app.use("/api", adminRouter);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    app.listen(PORT, () => console.log(`Server started on port: ${PORT} 🚀`));
  } catch (err) {
    console.log(err);
  }
};

start();
