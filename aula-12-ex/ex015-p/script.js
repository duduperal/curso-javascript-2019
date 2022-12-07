function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    } else {
        var genero = ''
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança

                img.setAttribute('src', 'imagens//foto-bebe-m.png')
            } else if (idade >= 10 && idade < 21){
                //Jovem

                img.setAttribute('src', 'imagens//foto-jovem-m.png')
            } else if (idade >= 21 && idade < 50){
                //Adulto
                
                img.setAttribute('src', 'imagens//foto-adulto-m.png')
            } else if (idade >= 50 && idade < 120) {
                //idoso

                img.setAttribute('src', 'imagens//foto-idoso-m.png')
            } else {
                window.alert('[ERRO] IDADE NÃO PERMITIDA!')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens//foto-bebe-f.png')
            } else if (idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens//foto-jovem-f.png')
            } else if (idade >= 21 && idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens//foto-adulto-f.png')
            } else if (idade >= 50 && idade < 120){
                //Idoso
                img.setAttribute('src', 'imagens//foto-idoso-f.png')
            } else {
                window.alert('[ERRO] IDADE NÃO PERMITIDA!')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectei um ${genero} de ${idade} anos` 
        res.appendChild(img)
    }
}