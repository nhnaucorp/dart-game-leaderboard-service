require("dotenv").config();

const Koa = require("koa");
const koaBody = require("koa-body");
const cors = require("koa2-cors");

const variables = require("./config/variables");
const router = require("./route");

const app = new Koa();

app.use(koaBody());
app.use(cors({ origin: "*" }));

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(variables.appPort, () => {
  console.log(`API server listening on port ${variables.appPort}`);
});

module.exports = server;