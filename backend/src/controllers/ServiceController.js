const Adm = require('../models/Adm');
const Service = require('../models/Service');

// métodos: indes, show, store, update, destroy

module.exports = {
  async index(req, res){
  	const services = await Service.find();  // **********
    
    return res.json(services);
  },

  async store(req,res) {
  	const { filename } = req.file;
  	const { task, price } = req.body;
  	const { adm_id } = req.headers;

  	/*const adm = await Adm.findById(adm_id);

  	if (!adm) {
  		return res.status(400).json({ error: 'Administrator not registered!'});
  	}*/

  	const service = await Service.create({
  		adm: adm_id,
  		thumbnail: filename,
  		task,
  		price 
  	})

  	return res.json(service);
  }
};