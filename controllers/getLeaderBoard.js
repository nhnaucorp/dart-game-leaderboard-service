const { getAllPlayers } = require("../models/Player");
const { getTotalPointByPlyer } = require("../models/Point");

exports.getLeaderboard = async ctx => {
    try {
        const players = await getAllPlayers()
        const playerTotalPoint = await getTotalPointByPlyer()
        let mergePlayersAndPoints = []

        for (let i = 0; i < players.length; i++) {
            for (let j = 0; j < playerTotalPoint.length; j++) {
                const player = players[i]
                if (player.id == playerTotalPoint[j].player_id) {
                    mergePlayersAndPoints.push({ ...player, ...playerTotalPoint[j] })

                }


            }
        }
        // const leaderboard = mergePlayersAndPoints.map(player => {
        //     if (!player.total_point) {
        //         player.total_point = 0
        //     }

        //     player.total_point = Number(player.total_point)
        //     return player
        // })
        mergePlayersAndPoints.sort((a, b) => {
            return b.total_point - a.total_point;
        });

        ctx.response.body = mergePlayersAndPoints;

    } catch (err) {
        console.log(ctx, err);
    }
};