let dotenv = require('dotenv');
dotenv.configDotenv()

const appConfig = {
    port: process.env.PORT,
    deepseek_api_key : process.env.DEEPSEEK_API_KEY
}

module.exports = appConfig