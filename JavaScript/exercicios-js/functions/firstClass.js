// criar de forma literal
function fun1() {

}

// Armazenar função em uma variavel
const fun2 = function () {

}

// Armazenar função dentro de um Array
const array = [function (a, b) {return a + n}, fun1, fun2]

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}

// passar função como parametro
function run(fun) {
    fun()
}

run (function () {console.log('executando ....')})

//uma fução pode retornar/conter uma função
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)