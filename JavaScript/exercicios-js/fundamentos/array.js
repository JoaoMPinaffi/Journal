const valores = [7.7, 8.9, 6.3, 9.2] 
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length) // .length mostra a quantidde de elemntos que tem dentro do array

valores.push({id: 3}, false, null, 'teste') // .push insere novos valores no array a partir da ultima posição

console.log(valores.pop()) // .pop retira o ultimo valor do array
delete valores[0] // delete deleta a posição requisitado do array

console.log(typeof valores)