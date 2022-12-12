function calcular(){
    var num = document. getElementById('txtn')
    var res = document.getElementById('res')
    if (num.value.length <= 0){
        window.alert('Porfavor Digite Um Número!')
    } else {
        res.innerHTML = ''
        var n = Number(num.value)
        var r = 0
        for(var c = 1; c <= 10; c ++){
            r = (n * c)
            res.innerHTML += `${n} x ${c} = ${r} <br>`
        }
    }
}