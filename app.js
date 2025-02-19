alert('Boas vindas ao jogo do numero secreto');
let numeroMaximo = 500
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 );
console.log(`valor do chute e ${numeroSecreto}`);
let chute ;
let tentativas = 1;



while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
       
    } else {
        if (chute > numeroSecreto) {
            alert(`o numero secreto e menor que o ${chute}`);
        } else {
            alert(`o numero secreto e maior que o ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++

    }
}
// OPERADOR TERNARIO

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`voce acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`);

/*(if(tentativas > 1 ){
    alert(`voce acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
}else{
    alert(`voce acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
*/
