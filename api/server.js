const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const server = express();
const userRouter = require("../users/user-router.js");
const authRouter = require("../auth/auth-router.js");

server.use(helmet());
server.use(cors());
server.use(cookieParser());
server.use(express.json());
server.use(
  session({
    name: "patsesh",
    resave: false,
    saveUninitialized: false,
    secret: "do not share the secret",
  })
);
server.use("/users", userRouter);
server.use("/users/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "working" });
});

module.exports = server;
