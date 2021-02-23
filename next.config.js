require("dotenv").config()

module.exports = {
    env: {
        APP_NAME: process.env.APP_NAME,
        API_URL: process.env.API_URL
    }
};
