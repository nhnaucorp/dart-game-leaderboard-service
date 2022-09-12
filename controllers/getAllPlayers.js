const { AllPlayers } = require("../models/Player");

exports.getAllPlayers = async ctx => {
    try {
        const players = await AllPlayers();
        console.log(players);
        ctx.response.body = players;
       
    } catch (err) {
        console.log(ctx, err);
    }
};