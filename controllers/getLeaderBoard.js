const { getAllPlayers } = require("../models/Player");
const { getTotalPointByPlyer } = require("../models/Point");




exports.getLeaderboard = async ctx => {
    try {
        const players = await getAllPlayers()
        const playerTotalPoint = await getTotalPointByPlyer()
        console.log("Players", players);
        console.log("PlayerTotalPoint", playerTotalPoint);
        const mergePlayersAndPoints = players.map((item, i) => Object.assign({}, item, playerTotalPoint[i - 1]));
        const leaderboard = mergePlayersAndPoints.map(player => {
            if (!player.total_point) {
                player.total_point = 0
            }

            player.total_point = Number(player.total_point)
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