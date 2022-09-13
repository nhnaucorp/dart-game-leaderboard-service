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

});


exports.getAllPlayers = async () => {
    const players = await Player.findAll({
        attributes: ["id", "name", "description", "image"],
    });
    return JSON.parse(JSON.stringify(players));
};



exports.getPlayerInfo = async (id) => {
    const player = await Player.findByPk(id);
    return JSON.parse(JSON.stringify(player));
};

