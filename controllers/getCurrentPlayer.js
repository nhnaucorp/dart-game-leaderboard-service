const { getCurrentPlayerModel } = require("../models/Player");
const { getCurrentPlayerPoints } = require("../models/Point");


exports.getCurrentPlayer = async ctx => {
    try {

        const currentPlayer = await getCurrentPlayerModel()
        const currentPlayerPoints = await getCurrentPlayerPoints(currentPlayer.id)
        const currentPlayerDetails = { ...currentPlayer.dataValues, ...currentPlayerPoints }
        ctx.response.body = currentPlayerDetails;

    } catch (err) {
        console.log(ctx, err);
    }
};