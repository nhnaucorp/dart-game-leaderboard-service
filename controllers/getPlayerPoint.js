const { getAllPlayers } = require("../models/Player");
const { getPointByPlayerId } = require("../models/Point");


exports.getPointByPlayerId = async ctx => {
    try {
        const { id } = ctx.params
        const playerPoint = await getPointByPlayerId(id)
        ctx.response.body = playerPoint;

    } catch (err) {
        console.log(ctx, err);
    }
};