const watson = require('watson-developer-cloud/assistant/v1');
const prompt = require('prompt-sync')();

const chatbot = new watson({
	username: '9a9b8afa-fcc5-4f08-80cd-a4b082b16f09',
	password: 'OOUh2nrwfOvt',
	version: '2018-09-21',
});

const workspace_id = '7c7e32ba-4183-4605-a471-d5d970b47a1b';

//começando a conversação com uma mensagem vazia

chatbot.message({workspace_id}, trataResposta);




function trataResposta(err, resposta){
	if (err) {
		console.log(err); //casso tenha erro
		return;
	}
	//detecta as intenções
	if (resposta.intents.length > 0) {
		console.log('Eu detectei a inteção:' + resposta.intents[0].intent)
	}
	//exibe a repoata do dialogo caso haja
	if (resposta.output.text.length >0) {
		console.log(resposta.output.text[0]);
	}

	const mensagemUsuario = prompt('>>');
	chatbot.message({
		workspace_id,
		input: {text: mensagemUsuario},
		context: resposta.context
	},trataResposta);
}