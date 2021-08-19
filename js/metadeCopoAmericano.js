import { calculaMetade } from "./funcoes.js";

export function metadeConvertidaAmericano(valorG) {//calcula metade dos copos americanos
    
    let copoAmericano = calculaMetade(valorG[0])

    return copoAmericano
}

//função metadeConvertidaAmericano precisa ser declarada e o retorno dela vai ser o valor de metadesXicaras
export function americanoComparaGramas(metadesAmericano, gRestantes) { // compara gramas restantes com metades das xicaras //gRestantes tem que buscar o valor no resultado da função todasConversoes
    let gramasRestantes = gRestantes[0]
    let verdadeFalso = [false, false, false, false]

    if (gramasRestantes == metadesAmericano[0]) {
        verdadeFalso[0] = true
    } else if (gramasRestantes == metadesAmericano[1]) {
        verdadeFalso[1] = true
    } else if (gramasRestantes == metadesAmericano[2]) {
        verdadeFalso[2] = true
    }else if (gramasRestantes == metadesAmericano[3]) {
        verdadeFalso[3] = true
    }

    let resutadoAmericanos = [metadesAmericano, verdadeFalso]//junta os dois arrays
    return resutadoAmericanos
}

function metadeAmericanoExiste(trueFalse, resutadoAmericanos) {//declarar primeiro parametro como true
    
    return resutadoAmericanos.some(e => e == trueFalse) //vai retornar um booleano
}

export function americanoPosicaoTrue(resutadoAmericanos) {

    let ehVerdade = metadeAmericanoExiste(true, resutadoAmericanos[1]) //saber se tem true no resultado xicaras
    let indice
    if (ehVerdade == true) {
        indice = resutadoAmericanos[1].findIndex(e => e == true)
    } else {
        indice =false
    }

   return indice

}