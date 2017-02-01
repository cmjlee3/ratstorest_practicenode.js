
const express = require('express');
const logger = require('morgan');

const port = process.env.PORT || 3000;
const app = express();
const path = require('path');

const ratsRoutes = require('./routers/rats');
const restaurantRoute = require('./routers/restaurants');
const homeRoutes = require('./routers/home');

app.use(express.static(path.join(__dirname, 'public')));

// const restaurantsDB = require('./models/restaurants');

// const dbRestaurant = restaurantsDB;

app.use('/', homeRoutes);
app.use('/', ratsRoutes);
app.use('/', restaurantRoute);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));

app.listen(port, () => console.log('Server has started on Port', port));


