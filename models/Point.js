const Sequelize = require("sequelize");
const { Player } = require("./Player");

const sequelize = new Sequelize("dart-leaderboards", "root", "", {
    host: "localhost",
    port: "3306",
    loading: true,
    dialect: "mysql",
});

const Point = sequelize.define("points", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    playerId: {
        type: Sequelize.INTEGER,
        field: "player_id",
    },
    point: {
        type: Sequelize.INTEGER,
    },

    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
    }


});





exports.getPointByPlayerId = async (playerId) => {
    const playerPoints = await Point.findAll({
        where: {
            playerId: playerId
        }
    });
    return playerPoints

}

exports.addPlayerPoint = async (playerId, point) => {
    const playerPoint = await Point.create({ playerId: playerId, point: point });
    return playerPoint;

}

exports.updatePlayerPoint = async (pointId, playerId) => {
}


exports.getCurrentPlayerPoints = async (playerId) => {

    const playerPoints = await Point.sum('point', { where: { playerId: playerId } })
    return { "total_point": playerPoints }

}

exports.getTotalPointByPlyer = async () => {



    const playerTotalPoint = await Point.findAll({

        attributes: [
            'player_id',
            [sequelize.fn('sum', sequelize.col('point')), 'total_point'],
        ],
        group: ['player_id'],
        raw: true
    });
    return playerTotalPoint
}