import leia from 'readline-sync';

let numero1;
let numero2;
let operador;

numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");
operador = leia.question("Digite o operador: ");

switch(operador){
    case "+":
        console.log('${numero1} + ${numero2} =')

}