const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const { PORT = 8080, DB_HOST } = process.env;


mongoose.connect(DB_HOST).then(() => {
    console.log('Database connection successful');
    app.listen(PORT);
}).then(() => {
    console.log(`Server is on ${PORT}`);
}).catch((err) => {
    console.log('ERROR', err);
    process.exit(1);
});