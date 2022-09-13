const router = require("koa-router");
const { addPlayerPoint } = require("./controllers/addPoint");

const { getAllPlayers } = require("./controllers/getAllPlayers");
const routes = new router();

routes.get("/all-players", getAllPlayers);
routes.post("/add-player-point/:id",addPlayerPoint)


module.exports = routes;