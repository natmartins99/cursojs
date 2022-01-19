function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'crianca-mas.png')
            }else if (idade < 21) {
                //Jovem adolescente
                img.setAttribute('src', 'jovem-adol-mas.png')
            }else if (idade < 65) {
                //Jovem adulto
                img.setAttribute('src', 'jovem-adulto-mas.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso-mas.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'crianca-fem.png')
            }else if (idade < 21) {
                //Jovem adolescente
                img.setAttribute('src', 'jovem-adol-fem.png')
            }else if (idade < 65) {
                //Jovem adulto
                img.setAttribute('src', 'jovem-adulto-fem.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosa-fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}