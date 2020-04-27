const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  thumbnail: String,
  task: String,
  price: Number,
  adm: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'Adm'
  }
});

module.exports = mongoose.model('Service', ServiceSchema)
