function parImpar(num) {
    operacao = num%2;
    
    if (operacao != 0) {
        console.log(`${num} é ímpar!`);
    } else {
        console.log(`${num} é par`);
    }
}

let num = parseInt(prompt("Digite um número: "));
parImpar(num);