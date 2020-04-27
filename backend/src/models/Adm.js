const mongoose = require('mongoose');

const AdmSchema = new mongoose.Schema({
	email: String,
	name: String,
	pass: String,

});

module.exports = mongoose.model('Adm', AdmSchema);