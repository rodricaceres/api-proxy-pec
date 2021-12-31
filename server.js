// process.env.NODE_ENV = "localhost";
process.env.NODE_ENV = "testing";

const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares
const findTargetMiddleware = require("./src/application/middlewares/findTarget.middleware");
const proxyMiddleware = require("./src/application/middlewares/proxy.middleware");

app.use(express.json());
app.use(cors());

app.use(findTargetMiddleware, proxyMiddleware);

app.listen(5005);
