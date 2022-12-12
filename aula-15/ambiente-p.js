var valor = [5, 2, 4, 3, 8]
valor.push(1)
valor.sort()
console.log(valor)
console.log(`O vetor tem ${valor.length} posições`)
console.log(`O primeiro valor do vetor é ${valor[0]}`)
let pos = valor.indexOf(8)
if(pos == -1){
    console.log(`[ERRO] Este número não está na array!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
