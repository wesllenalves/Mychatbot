const watson = require('watson-developer-cloud/assistant/v1');

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
	//console.log(resposta);
	//exibe a repoata do dialogo caso haja
	if (resposta.output.text.length >0) {
		console.log(resposta.output.text);
	}
}