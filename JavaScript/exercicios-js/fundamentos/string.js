const escola = "Cod3r"

console.log(escola.charAt(4)) // .charAT(n) retorna o char de acordo com o indice indicado eno parametro 'n'
                              // a contagem do indice inicia no zero então no exemplo 'ola', 'o' será 0, 'l' será 1 e 'a' será 2, assim consecutivamente para qualquer string  
console.log(escola.charAt(5)) // caso vc aponte um indece fora da string, o retorno será nulo

console.log(escola.charCodeAt(3)) // .charCodeAT(n) terá praticamente a mesma função do .chatAT mas seu retorno sera o valor que o char apontado representa na tabela ASCP 

console.log(escola.indexOf("r")) // .indexOF("C") terá a mesma proposta do charAT mas ela li retornara o numero do index do char que está na string e você de parametro

console.log(escola.substring(1)) // .substring(n) retornara a string somente partir do index que foi colocado como parametro
console.log(escola.substring(0,3)) // com os dois parametros o .substring(n,n) retonara todos os achar da posição do primeiro parametro até a ultima posição do segundo parametro 

console.log("Escola " .concat(escola).concat("!"))

console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))