const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);
const app = express();

require('./routes/authRoutes')(app);

//look at underlining enviroment and see if they have specified a port to use when running in production
//put boolian statment for development enviroment.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
// localhost:5000
