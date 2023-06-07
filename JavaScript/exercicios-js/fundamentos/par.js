// par nome/ valor

const saudacao = 'OPA' // contexto léxico

function exec(){
    const saudacao = 'Falaa' // contexto léxico
    return saudacao
}

// Objetos são grupos aninhasdo de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 98,
    endereco: {
        rua: 'rua hait', 
        numero: 177
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
