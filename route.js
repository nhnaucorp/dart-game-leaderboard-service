const router = require("koa-router");
const { addPlayerPoint } = require("./controllers/addPoint");

const { getAllPlayers } = require("./controllers/getAllPlayers");
const { getCurrentPlayer } = require("./controllers/getCurrentPlayer");
const { getLeaderboard } = require("./controllers/getLeaderBoard");
const { getPointByPlayerId } = require("./controllers/getPlayerPoint");
const { setCurrentPlayer } = require("./controllers/setCurrentPlayer");
const { getPlayerLeaderboard } = require("./models/Player");
const routes = new router();

routes.get("/all-players", getAllPlayers);
routes.post("/add-player-point/:id", addPlayerPoint)
routes.get("/player-point/:playerId", getPointByPlayerId);
routes.get("/leader-board", getLeaderboard);

routes.put("/set-current-player/:playerId", setCurrentPlayer);
routes.get("/get-current-player", getCurrentPlayer);
module.exports = routes;