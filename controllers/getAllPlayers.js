const { AllPlayers } = require("../models/Player");

exports.getAllPlayers = async ctx => {
    try {
        const players = await AllPlayers();
        ctx.response.body = players;

    } catch (err) {
        console.log(ctx, err);
    }
};