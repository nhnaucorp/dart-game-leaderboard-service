require("dotenv").config();
const appPort = process.env.APP_PORT;
const variables = {
  appPort,
 
};

module.exports = variables;