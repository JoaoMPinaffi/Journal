const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.891;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // em binário

console.log(typeof media)
console.log(typeof Number)


//cuidados com o tipo number


console.log(7/0) //javascript ao inves de dar erro ele retorna o tipo Infinity

console.log("10"/2) //caso a string seja um valor numerico que o a linguagem consiga indentifcar como um numerico ele ira realizar a operação
console.log("Show" *2) //caso ele não consiga interpretar essa string como um numero ele não realizara a operação e retornara o "NaN" not a number
console.log(0.1 + 0.7) //o resultado ira ter uma certa imprecisão por conta da especificação de ponto flutuante



