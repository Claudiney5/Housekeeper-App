const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  thumbnail: String,
  description: String,
  task: String,
  price: Number,
  adm: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'Adm'
  }
}, {
	toJSON: {
		virtuals: true,
	},
});

ServiceSchema.virtual('thumbnail_url').get(function() {
	return `http://localhost:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Service', ServiceSchema)
