// 1 copo (tipo americano) = 200ml = 6.7 oz
// 1 xícara (chá) = 150ml = 4 oz
// ¾ xícara (chá) = 112,5ml = 3 oz
// ½ xícara (chá) = 75ml = 2 oz
// ¼ xícara (chá) = 37,5ml = 1 oz
// 1 copo (do tipo de requeijão) = 250ml = 8 oz
// ¾ copo (do tipo de requeijão) = 187,5ml = 6 oz
// ½ copo (do tipo de requeijão) = 125ml = 4 oz
// ¼ copo (do tipo de requeijão) = 62,5ml = 2 oz
// ½ copo (do tipo de requeijão) = 125ml = 4 oz
// 1 colher (sopa) = 15ml
// 1 colher (sobremesa) = 10ml
// 1 colher (chá) = 5ml
// 1 colher (café) = 2,5ml
// 4 copos (do tipo de requeijão) = 1 litro
// 1 cálice = 9 colheres (sopa)

//VARIÁVEIS MEDIDAS
var  copoAmericano
let xicara
let xicaraMeia = 75
let xicaraTresQuartos = 112.5 
let xicaraUmQuarto = 37.5
let copoRequeijao
let copoRequeijaoMeio
let copoRequeijaoTresQuartos
let copoRequeijaoUmQuarto
let colherSopa
let colherSobremesa
let colherCha
let colherCafe

console.log("função anterior " + liquidoCalculo(1000))
//console.log("xicara " + liquidoXicara(1000))
let valorML =[200, 150, 250, 15, 10, 5, 2.5]
console.log("nova função "+ todasConversoes(1000, valorML))


//FUNÇÕES DE CALCULOS
export function liquidoCalculo(inputIngrediente) { //calculos com base em ml
    copoAmericano = liquidoCopoAmericano(inputIngrediente)
    xicara = liquidoXicara(inputIngrediente)
    copoRequeijao = liquidoRequeijao(inputIngrediente)
    colherSopa = liquidoColherSopa(inputIngrediente)
    colherSobremesa = liquidoColherSobremesa(inputIngrediente)
    colherCha = liquidoColherCha(inputIngrediente)
    colherCafe = liquidoColherCafe(inputIngrediente)
    

    return [copoAmericano[0], copoAmericano[1], xicara[0], xicara[1], copoRequeijao[0], copoRequeijao[1], colherSopa[0], colherSopa[1], colherSobremesa[0], colherSobremesa[1], colherCha[0], colherCha[1], colherCafe[0], colherCafe[1]]
    //[copoAmericano, xicara, xicaraMeia, xicaraTresQuartos, xicaraUmQuarto, copoRequeijao, copoRequeijaoMeio, copoRequeijaoTresQuartos, copoRequeijaoUmQuarto, colherSopa, colherSobremesa, colherCha, colherCafe]
} 

//FUNÇÕES MEDIDAS

function liquidoCopoAmericano(inputIngrediente) {
    
    let copoAmericanoML = 200

     copoAmericano = inputIngrediente/copoAmericanoML
    let copoAmericanoInt = Math.trunc(copoAmericano)
    let copoAmericanoFloat = Number((copoAmericano-copoAmericanoInt).toFixed(2))
    let mlRestante = copoAmericanoFloat*copoAmericano

    return [copoAmericanoInt, mlRestante]
}


function liquidoXicara(inputIngrediente) {
    
    let xicaraMl = 150
    let xicaraMeiaML = 75
    let xicaraTresQuartosML = 112.5
    let xicaraUmQuartoML = 37.5

    xicara = inputIngrediente/150
    let xicaraInt = Math.trunc(xicara) //numero inteiro de xicaras
    let xicaraFloat = Number((xicara-xicaraInt).toFixed(2)) //somente os decimais de xicaras
    let mlRestante = xicaraFloat*xicaraMl

        let qntdMeia = mlRestante/xicaraMeiaML
        let qntd34 = mlRestante/xicaraTresQuartosML
        let qnt14 = mlRestante/xicaraUmQuartoML
        let qntd
        
        if ((Number.isInteger(qntdMeia) === true)){ //verifica se numero é inteiro
            qntd = "meia xicara"
        } else if ((Number.isInteger(qntd34) === true))  {
            qntd = "tres quartos"
        } else if ((Number.isInteger(qnt14) === true)) {
            qntd = "um quarto"
        } else {
             qntd = mlRestante
        }
        //return [xicaraInt, mlRestante,qntd]
        //colocar na variável o resutado do if, lembrar de colocar no array que retorna a função que está sendo
        //exportada, depois pegar o indice do array no conversor e jogar no span que está na tabela
        //no spam tbm colocar uma classe que que esconde e no conversor fazer um if se valor for true, adicionar a classe que revela. para valor true, retornar um booleano
        //fazer um if para se o valor final for 0, não revelar a classe
        return [xicaraInt, mlRestante]
        // if(mlRestante == xicaraMeiaML) {
    //     return [xicaraInt, xicaraMeiaML]
    // } else if (mlRestante == xicaraTresQuartosML) {
    //     return [xicaraInt, xicaraTresQuartosML]
    // } else if (mlRestante == xicaraUmQuartoML){
    //     return [xicaraInt, xicaraUmQuartoML]
    // } else {
    //     return [xicaraInt, mlRestante]
    // }

}

function liquidoRequeijao(inputIngrediente) {

    let copoRequeijaoML = 250
    let copoRequeijaoMeioML = 125
    let copoRequeijaoTresQuartosML = 187.5
    let copoRequeijaoUmQuartoML = 62.5

    copoRequeijao = inputIngrediente/250
    let copoRequeijaoInt = Math.trunc(copoRequeijao)
    let copoRequeijaoFloat = Number((copoRequeijao-copoRequeijaoInt).toFixed(2))
    let mlRestante = copoRequeijaoFloat*copoRequeijaoML

    if(mlRestante == copoRequeijaoML) {
        return [copoRequeijaoInt, copoRequeijaoML]
    } else if (mlRestante == copoRequeijaoTresQuartosML) {
        return [copoRequeijaoInt, copoRequeijaoTresQuartosML]
    } else if (mlRestante == copoRequeijaoUmQuartoML){
        return [copoRequeijaoInt, copoRequeijaoUmQuartoML]
    } else {
        return [copoRequeijaoInt, mlRestante]
    }
    
}

function liquidoColherSopa(inputIngrediente) {
    
    let colherSopaML = 15

    colherSopa = inputIngrediente/colherSopaML
    let colherSopaInt = Math.trunc(colherSopa)
    let colherSopaFloat = Number((colherSopa-colherSopaInt).toFixed(2))
    let mlRestante = colherSopaFloat*colherSopaML

    return [colherSopaInt, mlRestante]

}

function liquidoColherSobremesa(inputIngrediente) {
    let colherSobremesaML = 10

    colherSobremesa = inputIngrediente/colherSobremesaML
    let colherSobremesaInt = Math.trunc(colherSobremesa)
    let colherSobremesaFloat = Number((colherSobremesa-colherSobremesaInt).toFixed(2))
    let mlRestante = colherSobremesaFloat*colherSobremesaML

    return [colherSobremesaInt, mlRestante]
}

function liquidoColherCha(inputIngrediente) {
    let colherChaML = 5

    colherCha = inputIngrediente/colherChaML
    let colherChaInt = Math.trunc(colherCha)
    let colherChaFloat = Number((colherCha-colherChaInt).toFixed(2))
    let mlRestante = colherChaFloat*colherChaML

    return [colherChaInt, mlRestante]
}

function liquidoColherCafe(inputIngrediente) {
    let colherCafeML = 2.5

    colherCafe = inputIngrediente/colherCafeML
    let colherCafeInt = Math.trunc(colherCafe)
    let colherCafeFloat = Number((colherCafe-colherCafeInt).toFixed(2))
    let mlRestante = colherCafeFloat*colherCafeML

    return [colherCafeInt, mlRestante]
}


//copoAmericano
//xicara
//xicaraMeia
//xicaraTresQuartos
//xicaraUmQuarto
//copoRequeijao
//copoRequeijaoMeio
//copoRequeijaoTresQuartos
//copoRequeijaoUmQuarto
//colherSopa
//colherSobremesa
//colherCha
//colherCafe

//teste
function todasConversoes(inputIngrediente, valorML) {//botar console log lá em cima
    //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
    //let valorML =[200, 150, 250, 15, 10, 5, 2.5]//liquido. alterar conforme ingrediente escolhido. A variável será preenchida fora da função e será recebida como parâmetro
    let copoAmericanoML = valorML[0]//200
    let xicaraML = valorML[1]//150
    let copoRequeijaoML = valorML[2]//250
    let colherSopaML = valorML[3]//15
    let colherSobremesaML = valorML[4]//10
    let colherChaML = valorML[5]//5
    let colherCafeML = valorML[6]//2.5

    //copo americano
    let copoAmericano = inputIngrediente/copoAmericanoML
    let copoAmericanoInt = Math.trunc(copoAmericano)
    let copoAmericanoFloat = Number((copoAmericano-copoAmericanoInt).toFixed(2))
    let mlRestanteCA = copoAmericanoFloat*copoAmericanoML

    //xicara
    let xicara = inputIngrediente/xicaraML
    let xicaraInt = Math.trunc(xicara) //numero inteiro de xicaras
    let xicaraFloat = Number((xicara-xicaraInt).toFixed(2)) //somente os decimais de xicaras
    let mlRestanteX = xicaraFloat*xicaraML

    //copo requeijão
    let copoRequeijao = inputIngrediente/copoRequeijaoML
    let copoRequeijaoInt = Math.trunc(copoRequeijao)
    let copoRequeijaoFloat = Number((copoRequeijao-copoRequeijaoInt).toFixed(2))
    let mlRestanteCR = copoRequeijaoFloat*copoRequeijaoML

    //colher sopa
    let colherSopa = inputIngrediente/colherSopaML
    let colherSopaInt = Math.trunc(colherSopa)
    let colherSopaFloat = Number((colherSopa-colherSopaInt).toFixed(2))
    let mlRestanteCSp = colherSopaFloat*colherSopaML

    //colher sobremesa
    let colherSobremesa = inputIngrediente/colherSobremesaML
    let colherSobremesaInt = Math.trunc(colherSobremesa)
    let colherSobremesaFloat = Number((colherSobremesa-colherSobremesaInt).toFixed(2))
    let mlRestanteCSb = colherSobremesaFloat*colherSobremesaML

    //colher chá
    let colherCha = inputIngrediente/colherChaML
    let colherChaInt = Math.trunc(colherCha)
    let colherChaFloat = Number((colherCha-colherChaInt).toFixed(2))
    let mlRestanteCCh = colherChaFloat*colherChaML

    //colher café
    let colherCafe = inputIngrediente/colherCafeML
    let colherCafeInt = Math.trunc(colherCafe)
    let colherCafeFloat = Number((colherCafe-colherCafeInt).toFixed(2))
    let mlRestanteCCf = colherCafeFloat*colherCafeML

    return [copoAmericanoInt, mlRestanteCA, xicaraInt, mlRestanteX, copoRequeijaoInt, mlRestanteCR, colherSopaInt, mlRestanteCSp, colherSobremesaInt, mlRestanteCSb, colherChaInt, mlRestanteCCh, colherCafeInt, mlRestanteCCf] 
}