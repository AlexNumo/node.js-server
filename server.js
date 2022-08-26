const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const { PORT = 8080, DB_HOST = 'mongodb+srv://kobra_bobra:1234567890@contacts.dmwvegx.mongodb.net/nodejs-server' } = process.env;


mongoose.connect(DB_HOST).then(() => {
    console.log('Database connection successful');
    app.listen(PORT);
}).then(() => {
    console.log(`Server is on ${PORT}`);
}).catch((err) => {
    console.log('ERROR', err);
    process.exit(1);
});
