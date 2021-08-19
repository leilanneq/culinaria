import { calculaMetade } from "./funcoes.js";

export function metadeConvertidaRequeijao(valorG) {//calcula metade dos copos Requeijaos
    
    let copoRequeijao = calculaMetade(valorG[0])

    return copoRequeijao
}

//função metadeConvertidaRequeijao precisa ser declarada e o retorno dela vai ser o valor de metadesXicaras
export function requeijãoComparaGramas(metadesRequeijao, gRestantes) { // compara gramas restantes com metades das xicaras //gRestantes tem que buscar o valor no resultado da função todasConversoes
    let gramasRestantes = gRestantes[2]
    let verdadeFalso = [false, false, false, false]

    if (gramasRestantes == metadesRequeijao[0]) {
        verdadeFalso[0] = true
    } else if (gramasRestantes == metadesRequeijao[1]) {
        verdadeFalso[1] = true
    } else if (gramasRestantes == metadesRequeijao[2]) {
        verdadeFalso[2] = true
    }else if (gramasRestantes == metadesRequeijao[3]) {
        verdadeFalso[3] = true
    }

    let resutadoRequeijao = [metadesRequeijao, verdadeFalso]//junta os dois arrays
    return resutadoRequeijao
}

function metadeRequeijaoExiste(trueFalse, resutadoRequeijao) {//declarar primeiro parametro como true
    
    return resutadoRequeijao.some(e => e == trueFalse) //vai retornar um booleano
}

export function RequeijaoPosicaoTrue(resutadoRequeijao) {

    let ehVerdade = metadeRequeijaoExiste(true, resutadoRequeijao[1]) //saber se tem true no resultado xicaras
    let indice
    if (ehVerdade == true) {
        indice = resutadoRequeijao[1].findIndex(e => e == true)
    } else {
        indice =false
    }

   return indice

}