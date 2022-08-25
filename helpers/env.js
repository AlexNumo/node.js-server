require('dotenv').config()
const {PORT, DB_HOST} = process.env;

module.exports = {
    PORT, DB_HOST,
}