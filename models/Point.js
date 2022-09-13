const Sequelize = require("sequelize");
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

exports.getPointByPlayerId = async (id) => {



}

exports.addPlayerPoint = async (playerId,point) => {
    const playerPoint = await Point.create({ playerId: playerId, point: point});
    console.log(playerPoint);
    return playerPoint;

}

exports.updatePlayerPoint = async (pointId, playerId) => {
}
