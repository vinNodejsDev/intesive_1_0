const express = require('express');
const app = express();

const users = require('./routes/users');

const PORT = 3000;
const ROUTES = {
    users: '/users'
};

app.use(express.json());

app.use(ROUTES.users, users);

app.listen(PORT, () => {
    console.log("Server runs on port: ", PORT);
});