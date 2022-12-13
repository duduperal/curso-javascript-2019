var n = [document.getElementById('txtn')]
var res = document.getElementById('res')

function adicionar(){
    for(let c in n){
        res.innerHTML = `Valor ${n[c]} adicionado`
    }
}