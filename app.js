let= listaDeNumerosSorteados= [];
let NumeroLimite= 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas= 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function ExibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

ExibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa= tentativas>1 ?"tentativas":"tentativa";
        let mensagemTentativas= `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O número secreto é menor');
            } else {
                exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
            limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let NumeroEscolhido= parseInt(Math.random() * NumeroLimite + 1);
    let quantidadeDeElementos= listaDeNumerosSorteados.length;

    if (quantidadeDeElementos==NumeroLimite){
        listaDeNumerosSorteados=[];
    }

    if (listaDeNumerosSorteados.includes(NumeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return NumeroEscolhido;
    }
}

function limparCampo(){
    chute= document.querySelector("input")
    chute.value= "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    ExibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
