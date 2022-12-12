var valores = [4, 9, 3, 2, 1, 7]
/*
MANEIRA INTELIGENTE

for(var pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//=====================
//MANEIRA SUPERDOOPIE

for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
//======================
