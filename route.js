const router = require("koa-router");
const { addPlayerPoint } = require("./controllers/addPoint");

const { getAllPlayers } = require("./controllers/getAllPlayers");
const { getLeaderboard } = require("./controllers/getLeaderBoard");
const { getPointByPlayerId } = require("./controllers/getPlayerPoint");
const { setCurrentPlayer } = require("./controllers/setCurrentPlayer");
const routes = new router();

routes.get("/all-players", getAllPlayers);
routes.post("/add-player-point/:id", addPlayerPoint)
routes.get("/player-point/:playerId", getPointByPlayerId);
routes.get("/leader-board", getLeaderboard);

routes.post("/set-current-player/:playerId", setCurrentPlayer);

module.exports = routes;