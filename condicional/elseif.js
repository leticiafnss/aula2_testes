import leia from 'readline-sync';

let ingresso;
let idade;

ingresso = leia.keyInYN("Tem ingresso");
idade = leia.questionInt("Qual a idade?");

if(ingresso && idade >= 18){
    console.log("Bem vindo");
    let nome = leia.question("Qual o seu nome?");
   console.log(`Olá ${nome}`);

}else if(ingresso && idade >= 14 && idade <= 17){
    console.log("Bem vindo!");
}else{
    console.log("Não pode entrar");
}