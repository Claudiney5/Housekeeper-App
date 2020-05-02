const express = require('express'); //importando dependências externas
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes'); //importando arquivo

const app = express();
//logo depois de criar a aplicação...
mongoose.connect('mongodb+srv://housekeeper01:housekeeper01@cluster0-4fxxw.mongodb.net/housekeeper_app?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

app.use(cors());  //ATENÇÃO: qualquer aplicação pode acesar a API! (ALTERAR!)
app.use(express.json());
app.use(routes);

app.listen(3333);