import { calculaMetade } from "./funcoes.js";

export function metadeConvertidaXicara(valorG) { //calcula metade das xícaras
    
    let xicara = calculaMetade(valorG[1])

    return xicara
}

//função metadeConvertidaXicara precisa ser declarada e o retorno dela vai ser o valor de metadesXicaras
export function xicaraComparaGramas(metadesXicaras, gRestantes) { // compara gramas restantes com metades das xicaras //gRestantes tem que buscar o valor no resultado da função todasConversoes
    let gramasRestantes = gRestantes[1]
    let verdadeFalso = [false, false, false, false]

    if (gramasRestantes == metadesXicaras[0]) {
        verdadeFalso[0] = true
    } else if (gramasRestantes == metadesXicaras[1]) {
        verdadeFalso[1] = true
    } else if (gramasRestantes == metadesXicaras[2]) {
        verdadeFalso[2] = true
    }else if (gramasRestantes == metadesXicaras[3]) {
        verdadeFalso[3] = true
    }

    let resutadoXicaras = [metadesXicaras, verdadeFalso]//junta os dois arrays
    return resutadoXicaras
}

function metadeXicaraExiste(trueFalse, resultadoXicaras) {//declarar primeiro parametro como true
    
    return resultadoXicaras.some(e => e == trueFalse) //vai retornar um booleano
}

export function xicaraPosicaoTrue(resultadoXicaras) {

    let ehVerdade = metadeXicaraExiste(true, resultadoXicaras[1]) //saber se tem true no resultado xicaras
    let indice
    if (ehVerdade == true) {
        indice = resultadoXicaras[1].findIndex(e => e == true)
    } else {
        indice =false
    }

   return indice

}