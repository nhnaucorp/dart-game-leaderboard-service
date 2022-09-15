const Sequelize = require("sequelize");


const sequelize = new Sequelize("dart-leaderboards", "root", "", {
    host: "localhost",
    port: "3306",
    loading: true,
    dialect: "mysql",
});

const Player = sequelize.define("players", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    isPlaying: {
        type: Sequelize.BOOLEAN,
        field: "is_playing",
        defaultValue: false,

    },
    image: {
        type: Sequelize.TEXT
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
    }

})

// const getPlayerLeaderboard = async () => {
//     const leaderboard = await Player.findAll({
//         attributes: ['id', [Point.sequelize.fn('sum', Point.sequelize.col('point')), 'total_point']],
//         include: [
//             {
//                 model: Point,
//                 attributes: []
//             }
//         ],
//         group: ['player_id']
//     })
//     console.log(leaderboard);
//     return leaderboard
// }

const getAllPlayers = async () => {
    const players = await Player.findAll({
        attributes: ["id", "name", "description", "isPlaying", "image"],
    });
    return JSON.parse(JSON.stringify(players));
};

const setCurrentPlayerModel = async (id) => {
    const activePlayer = await Player.findOne({
        where: { isPlaying: true },
    });
    await Player.update(
        { isPlaying: false },
        { where: { id: activePlayer.id } }
    )

    const currentPlayer = await Player.update(
        { isPlaying: true },
        { where: { id: id } }
    )
    console.log(currentPlayer);

    return currentPlayer
}

const getPlayerInfo = async (id) => {
    const player = await Player.findByPk(id);
    return JSON.parse(JSON.stringify(player));
};

module.exports = { setCurrentPlayerModel, getAllPlayers, getPlayerInfo }

