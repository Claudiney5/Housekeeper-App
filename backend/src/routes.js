const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const ServiceController = require('./controllers/ServiceController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router(); // roteador do Express
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/services', ServiceController.index);
routes.post('/services', upload.single('thumbnail'), ServiceController.store);

routes.post('/services/:service_id/bookings', BookingController.store);

module.exports = routes;
