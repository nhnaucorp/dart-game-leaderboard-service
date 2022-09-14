const { setCurrentPlayerModel, getPlayerInfo } = require("../models/Player");

exports.setCurrentPlayer = async ctx => {
    try {
        const { playerId } = ctx.params
        const { isPlaying } = ctx.request.body
        const isValidPlayer = await getPlayerInfo(playerId)
        if (!isValidPlayer) {
            ctx.body = {
                success: false,
                message: "Player not found"
            }
        }

        const currentPlayer = await setCurrentPlayerModel(playerId, isPlaying)
        ctx.response.body = currentPlayer;

    } catch (err) {
        console.log(ctx, err);
    }
};