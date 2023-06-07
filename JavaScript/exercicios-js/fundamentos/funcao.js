// funcao retorno

function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(3)
imprimirSoma()
imprimirSoma(2,'2')
imprimirSoma(2)

//função com retorno

function soma(a = 0, b = 0){
    return a + b
}

console.log(soma(2, 3))
