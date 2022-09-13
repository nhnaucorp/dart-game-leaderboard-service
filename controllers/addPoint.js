const { getPlayerInfo } = require("../models/Player");
const { addPlayerPoint } = require("../models/Point");


exports.addPlayerPoint = async ctx => {
    try {
        const { id } = ctx.params
        const isValidPlayer = await getPlayerInfo(id)
        if (!isValidPlayer) {
            ctx.body = {
                success: false,
                message: "Player not found"
            }
        }
        const { point } = ctx.request.body
        console.log(point, id);
        const playerPoint = await addPlayerPoint(id, point)
        ctx.response.body = playerPoint;

    } catch (err) {
        console.log(ctx, err);
    }
};