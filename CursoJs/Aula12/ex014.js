var agora = new Date()
var diaSem = agora.getDay()
/*
    DOMINGO
    SEGUNDA 
    TERÇA
    QUARTA
    QUINTA
    SEXTA
    SABADO
*/ 

console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;
    case 3:
        console.log('Quarta')
        break;
    case 0:
        console.log('Domingo')
        break;
    default:
        console.log('[ERRO] DIA INVALIDO')
        break;
}