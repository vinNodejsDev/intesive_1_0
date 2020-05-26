const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { url } = require('./config/db');
const app = express();
const UserController = require('./routes/user');


const ROUTES = {
  users: '/api/users'
};
const PORT = 3000;

app.use(cors());
app.use(express.json());

//connect to DB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Mongo connected'))
  .catch(err => console.log(err));

app.use(ROUTES.users, UserController);

app.listen(PORT, () => {
  console.log(`Server up and is running on port ${PORT}`)
}); 