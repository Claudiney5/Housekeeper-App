
const Booking = require('../models/Booking');

module.exports = {
  async store(req,res) {
  	const { user_id } = req.headers;
  	const { service_id } = req.params;
  	const { date } = req.body;

  	const booking = await Booking.create({
  		user: user_id,
  		service: service_id,
  		date,
  	});

  	await booking.populate('service').populate('user').execPopulate();

  	return res.json(booking);
  }

};