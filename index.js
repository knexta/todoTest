require("dotenv/config");
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");

const { sequelize } = require("./config/sequelize.config");
const todoRouter = require("./routes/todo.route");
const { errorHandler } = require("./middleware/Error.middleware");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(compression());

app.use("todo", todoRouter);

app.get("/", (res, req) => {
  res.send("Server is running");
});

app.get((req, res) => {
  res.sendStatus(404);
});

app.use(errorHandler);

sequelize.sync();

app.listen(5000, () => {
  console.log("Server Listening on Port 5000");
});
