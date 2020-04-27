const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
	data: String,
	approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User'
  },
  service: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'Service'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);