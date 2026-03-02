let x = 10; 
let y = 5;
let proposicao1;
let proposicao2;
let proposicao3;
let proposicao4;
let resposta;

proposicao_01 = x > y;
console.log("\nA proposicao_01 é: " + proposicao_01);
proposicao_02 = x < y;
console.log("\nA proposicao_02 é: " + proposicao_02);
proposicao_03 = x != y;
console.log("\nA proposicao_03 é: " + proposicao_03);
proposicao_04 = x == y;
console.log("\nA proposicao_04 é: " + proposicao_04);

resposta = proposicao1 && proposicao3;
console.log("\nproposicao_01 e proposicao_03: " + resposta);

resposta = proposicao2 && proposicao4;
console.log("\nproposicao_02 e proposicao_04: " + resposta);

resposta = proposicao1 && proposicao2;
console.log("\nproposicao_01 e proposicao_02: " + resposta);

resposta = proposicao3 && proposicao4;
console.log("\nproposicao_03 e proposicao_04: " + resposta);

