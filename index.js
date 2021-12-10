const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');
// const helmet = require('helmet');
require('dotenv').config();
require('./connection');

const app = express();

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended:false }));
// app.use(cors());

//Settings (PORT)
app.set('port', process.env.PORT || 4000)

//Routes
app.use("api/users", require('./routes/user.routes'));

app.listen(app.get('port'), ()=> console.log(`Server run on port ${app.get('port')}`));
