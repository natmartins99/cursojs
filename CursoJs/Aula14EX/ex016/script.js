function contar() {
    let ini = document.getElementById(txtini)
    let fim = document.getElementById(txtfim)
    let passo = document.getElementById(txtpas)
    let res = document.getElementById('res')

    if (ini.ariaValueMax.length == 0 || fim.ariaValueMax.length == 0 || passo.ariaValueMax.length == 0) {
        //window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossível contar'
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){ //contagem crescente
            for (let cont = i; cont <= f; cont += p){
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        }else { //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} /u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}