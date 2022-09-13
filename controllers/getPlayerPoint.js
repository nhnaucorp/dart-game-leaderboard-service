const { getAllPlayers } = require("../models/Player");
const { getPointByPlayerId } = require("../models/Point");


exports.getPointByPlayerId = async ctx => {
    try {
        const { playerId } = ctx.params
        const playerPoint = await getPointByPlayerId(playerId)
        ctx.response.body = playerPoint;

    } catch (err) {
        console.log(ctx, err);
    }
};