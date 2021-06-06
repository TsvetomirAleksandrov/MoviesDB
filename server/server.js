const express = require('express');
const { PORT } = require('./config/config');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors');

const app = express();
require('./config/mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/users', require('./routes/user'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/favorite', require('./routes/favorite'));
app.use('/api/ratings', require('./routes/ratings'));


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));

