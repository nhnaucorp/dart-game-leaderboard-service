

exports.getPointByPlayerId = async ctx => {
    try {
        const playerId = ctx.params
        const players = await AllPlayers();
        console.log(players);
        ctx.response.body = players;
       
    } catch (err) {
        console.log(ctx, err);
    }
};