const { getAllPlayers } = require("../models/Player");

exports.getAllPlayers = async ctx => {
    try {
        const players = await getAllPlayers();
        ctx.response.body = players;

    } catch (err) {
        console.log(ctx, err);
    }
};