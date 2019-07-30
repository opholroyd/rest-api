const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import Routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

app.use('/posts', postsRoute);
app.use('/users', usersRoute)

//ROUTES
app.get('/', (req, res) => {
    res.send("home page");
});



//Connection to DATABASE
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log("Connected to Database")
);

//Deletes path.
// app.delete('/', (req, res) => {
//     //enter logic.
// });

//Allow edits to path
// app.patch('/', (req, res) => {
//     //enter logic
// });

//Server PORT

app.listen(3000);