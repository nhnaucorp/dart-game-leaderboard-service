const { addPlayerPoint } = require("../models/Point");


exports.addPlayerPoint = async ctx => {
    try {
        const { id } = ctx.params
        // const players = await AllPlayers();
        const { point } = ctx.request.body
        console.log(point, id);
        const playerPoint = await addPlayerPoint(id, point)
        ctx.response.body = playerPoint;

    } catch (err) {
        console.log(ctx, err);
    }
};