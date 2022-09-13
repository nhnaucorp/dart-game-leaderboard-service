const { getTotalPointByPlyer } = require("../models/Point");




exports.getLeaderboard = async ctx => {
    try {

        const playerTotalPoint = await getTotalPointByPlyer()

        ctx.response.body = playerTotalPoint;

    } catch (err) {
        console.log(ctx, err);
    }
};