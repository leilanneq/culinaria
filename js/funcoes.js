//FUNÇÃO PARA CONVERTER
                                //input          //array declarado ao escolher o select
export function todasConversoes(inputIngrediente, valorG) {
    //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
    //let valorG =[200, 150, 250, 15, 10, 5, 2.5]//liquido. alterar conforme ingrediente escolhido. A variável será preenchida fora da função e será recebida como parâmetro
    let copoAmericanoG = valorG[0]//200
    let xicaraG = valorG[1]//150
    let copoRequeijaoG = valorG[2]//250
    let colherSopaG = valorG[3]//15
    let colherSobremesaG = valorG[4]//10
    let colherChaG = valorG[5]//5
    let colherCafeG = valorG[6]//2.5

    //copo americano
    let copoAmericano = inputIngrediente / copoAmericanoG
    let copoAmericanoInt = Math.trunc(copoAmericano)
    let copoAmericanoFloat = Number((copoAmericano - copoAmericanoInt).toFixed(2))
    let gRestanteCA = copoAmericanoFloat * copoAmericanoG

    //xicara
    let xicara = inputIngrediente / xicaraG
    let xicaraInt = Math.trunc(xicara) //numero inteiro de xicaras
    let xicaraFloat = Number((xicara - xicaraInt).toFixed(2)) //somente os decimais de xicaras
    let gRestanteX = xicaraFloat * xicaraG

    //copo requeijão
    let copoRequeijao = inputIngrediente / copoRequeijaoG
    let copoRequeijaoInt = Math.trunc(copoRequeijao)
    let copoRequeijaoFloat = Number((copoRequeijao - copoRequeijaoInt).toFixed(2))
    let gRestanteCR = copoRequeijaoFloat * copoRequeijaoG

    //colher sopa
    let colherSopa = inputIngrediente / colherSopaG
    let colherSopaInt = Math.trunc(colherSopa)
    let colherSopaFloat = Number((colherSopa - colherSopaInt).toFixed(2))
    let gRestanteCSp = colherSopaFloat * colherSopaG

    //colher sobremesa
    let colherSobremesa = inputIngrediente / colherSobremesaG
    let colherSobremesaInt = Math.trunc(colherSobremesa)
    let colherSobremesaFloat = Number((colherSobremesa - colherSobremesaInt).toFixed(2))
    let gRestanteCSb = colherSobremesaFloat * colherSobremesaG

    //colher chá
    let colherCha = inputIngrediente / colherChaG
    let colherChaInt = Math.trunc(colherCha)
    let colherChaFloat = Number((colherCha - colherChaInt).toFixed(2))
    let gRestanteCCh = colherChaFloat * colherChaG

    //colher café
    let colherCafe = inputIngrediente / colherCafeG
    let colherCafeInt = Math.trunc(colherCafe)
    let colherCafeFloat = Number((colherCafe - colherCafeInt).toFixed(2))
    let gRestanteCCf = colherCafeFloat * colherCafeG

    return [copoAmericanoInt, gRestanteCA, xicaraInt, gRestanteX, copoRequeijaoInt, gRestanteCR, colherSopaInt, gRestanteCSp, colherSobremesaInt, gRestanteCSb, colherChaInt, gRestanteCCh, colherCafeInt, gRestanteCCf]
}



export function calculaMetade(valorInteiro) {

    let medidaMetade = valorInteiro/2
    if (Number.isInteger(medidaMetade) == false){
        //medidaMetade = medidaMetade.toFixed(2)
        medidaMetade = Math.round(medidaMetade)
    } else {
        medidaMetade
    }

    let medidaUmterco = valorInteiro/3
    if (Number.isInteger(medidaUmterco) == false){
        //medidaUmterco = medidaUmterco.toFixed(2)
        medidaUmterco = Math.round(medidaUmterco)
    } else {
        medidaUmterco
    }

    let medidaUmQuarto = valorInteiro/4
    if (Number.isInteger(medidaUmQuarto) == false) {
        //medidaUmQuarto = medidaUmQuarto.toFixed(2)
        medidaUmQuarto = Math.round(medidaUmQuarto)
    } else {
        medidaUmQuarto
    }

    let medidaTresQuartos = medidaUmQuarto*3
    if (Number.isInteger(medidaTresQuartos) == false) {
        //medidaTresQuartos = medidaTresQuartos.toFixed(2)
        medidaTresQuartos = Math.round(medidaTresQuartos)
    } else {
        medidaTresQuartos
    }

    //Math.roud para arredondar para o numero inteiro mais próximo
    //tofixed(2) para arredondar para duas casas decimais. Quando não tiver numero, vai retorar x.00
    //numeros passados com toFixed(2) viram string
    return [medidaMetade, medidaUmterco, medidaUmQuarto, medidaTresQuartos]
}

//TESTES

