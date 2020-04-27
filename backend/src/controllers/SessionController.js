const User = require('../models/User');

// métodos: indes, show, store, update, destroy

module.exports = {
  async store(req,res) {
  	const { email } = req.body; // desestruturação (retirado -> .email  do final da requisição);

  	
  	let user = await User.findOne({ email: email });

  	if (!user) {     // verificação:
  		user = await User.create({ email });
  	}  	

  	return res.json(user);
  }
};