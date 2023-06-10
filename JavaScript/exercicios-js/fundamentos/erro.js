

function tratarErro(erro) {
    //throw new Error('correu um erro de conexão tente mais tarde')
    //throw 10
    throw {
        nome: erro.name,
        msg: erro.massage,
        date: new Date
    }
}

function imprimirNome(obj) {
    try{
        console.log(obj.name.toUpperCase() +'!!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('final')
    }
   

}

const obj = { nome: 'Roberto'}
imprimirNome(obj)