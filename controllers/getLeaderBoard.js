const { getAllPlayers } = require("../models/Player");
const { getTotalPointByPlyer } = require("../models/Point");




exports.getLeaderboard = async ctx => {
    try {
        const players = await getAllPlayers()
        const playerTotalPoint = await getTotalPointByPlyer()
        const mergePlayersAndPoints = players.map((item, i) => Object.assign({}, item, playerTotalPoint[i]));
        const leaderboard = mergePlayersAndPoints.map(player => {
            if (!player.total_point) {
                player.total_point = 0
            }
            return player
        })
        leaderboard.sort((a, b) => {
            return b.total_point - a.total_point;
        });

        ctx.response.body = leaderboard;

    } catch (err) {
        console.log(ctx, err);
    }
};