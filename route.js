const router = require("koa-router");

const { getAllPlayers } = require("./controllers/getAllPlayers");
const routes = new router();

routes.get("/all-players", getAllPlayers);

module.exports = routes;