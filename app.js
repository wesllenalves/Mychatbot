const watson = require('watson-developer-cloud/assistant/v1');
const prompt = require('prompt-sync')();
require('dotenv').config()

const chatbot = new watson({
	username: process.env.NAME,
	password: process.env.PASSWORD,
	version: process.env.VERSION,
});

const workspace_id = process.env.WORKSPACE_ID;

//começando a conversação com uma mensagem vazia

chatbot.message({workspace_id}, trataResposta);


let fimDeConversa = false;

function trataResposta(err, resposta){
	if (err) {
		console.log(err); //casso tenha erro
		return;
	}
	//detecta as intenções
	if (resposta.intents.length > 0) {
		console.log('Eu detectei a inteção:' + resposta.intents[0].intent);
		if(resposta.intents[0].intent == 'despedida'){
			fimDeConversa = true;
		}
	}
	//exibe a repoata do dialogo caso haja
	if (resposta.output.text.length >0) {
		console.log(resposta.output.text[0]);
	}

	if(!fimDeConversa){
		const mensagemUsuario = prompt('>>');
	chatbot.message({
		workspace_id,
		input: {text: mensagemUsuario},
		context: resposta.context
	},trataResposta);
	}

	
}