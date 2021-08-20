import { todasConversoes } from "./funcoes.js";
import { metadeConvertidaXicara, xicaraComparaGramas, xicaraPosicaoTrue } from "./metadeXicara.js";
import { metadeConvertidaAmericano, americanoComparaGramas, americanoPosicaoTrue } from "./metadeCopoAmericano.js";
import { metadeConvertidaRequeijao, requeijãoComparaGramas, RequeijaoPosicaoTrue } from "./metadeCopoRequeijao.js";
//importar funções

const botaoConverter = $('[data-botao-converter]')

console.log(botaoConverter)

function conversor() {
    let selectEscolhido = $("[data-select] option:selected").val()
    let inputIngrediente = $('[data-input]').val()
    $('[data-resultado]').removeClass("esconder")

    if (selectEscolhido == "acucar"){ //AÇUCAR
        //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [200, 200, 200, 14, 9, 4, 2.5]
        conversaoTela(inputIngrediente, valorG)

        
    } else if (selectEscolhido == "acucarimpalpavel"){ 
        //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [0, 144, 0, 9, 0, 3, 0]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)
        // metadeAmericano(inputIngrediente, valorG)
        // metadeXicara(inputIngrediente, valorG)
        // metadeRequeijao(inputIngrediente, valorG)
        // verificaZero(valorG)
        
    
    }else if (selectEscolhido == "amido"){ //AMIDO
        //[copoAmericano, 150, copoRequeijao, 9, colherSobremesa, 3, colherCafe]
        let valorG = [0, 128, 0, 8,	6, 3, 0]
        conversaoTela(inputIngrediente, valorG)
        //ingredienteConverter(inputIngrediente, valorG)
        

    } else if (selectEscolhido == "arroz"){ 
        //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [150, 185, 0, 12, 8, 4, 0]
        conversaoTela(inputIngrediente, valorG)
        //ingredienteConverter(inputIngrediente, valorG)
        
    
    } else if (selectEscolhido == "aveia"){ //AVEIA
        //[copoAmericano, 80, copoRequeijao, 5, colherSobremesa, 1.5, colherCafe]
        let valorG = [0, 80, 0, 5, 0,	1.5, 0]
        conversaoTela(inputIngrediente, valorG)
        //ingredienteConverter(inputIngrediente, valorG)

    }else if (selectEscolhido == "azeite"){ //AZEITE
        let valorG = [170, 200, 220, 14, 9, 4.5, 2.3]
        conversaoTela(inputIngrediente, valorG)
        //ingredienteConverter(inputIngrediente, valorG)
            
    } else if (selectEscolhido == "bicarbonato"){ 
        //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [184, 224, 0, 14, 10, 5, 0]
        conversaoTela(inputIngrediente, valorG)
        //ingredienteConverter(inputIngrediente, valorG)
            
    } else if (selectEscolhido == "cafe") {//CAFÉ
        //[copoAmericano, xicara, copoRequeijao, 5, colherSobremesa, 1.5, colherCafe]
        let valorG = [66, 80, 0, 5, 4, 2, 0]
        conversaoTela(inputIngrediente, valorG)
        //ingredienteConverter(inputIngrediente, valorG)

    }else if (selectEscolhido == "canela") {//CANELA
        //[copoAmericano, xicara, copoRequeijao, 5, colherSobremesa, 1.5, colherCafe]
        let valorG = [0, 0 , 0, 5, 0, 1.5, 0]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)

    } else if (selectEscolhido == "castanha") {//CASTANHA
        let valorG = [115,140,0,9,6,3,0]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)
    
    } else if (selectEscolhido == "chocolate") {//CHOCOLATE
        let valorG = [74,90,0,6,4,2,0]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)

    } else if (selectEscolhido == "cocofresco") {//COCO RALADO FRESCO
        let valorG = [0, 100, 0, 7, 0, 2, 0]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)

    } else if (selectEscolhido == "cocoseco"){ 
        //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [0, 80, 0, 5, 0, 1.5, 0]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)
        
    
    } else if (selectEscolhido == "farinhamandioca"){ 
        //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [0, 150, 0, 9, 0, 3, 0]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)
        
    
    } else if (selectEscolhido == "farinhatrigo"){ 
        //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [165, 165, 212, 13, 5, 2, 0]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)
        
    
    }else if (selectEscolhido == "fermentopo"){ 
      //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [xxxxx]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)
        
    
    } else if (selectEscolhido == "flocao"){ 
        //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [xxxxx]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)
        
    
    } else if (selectEscolhido == "fuba"){ 
        //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [104, 126, 0, 7.9, 5.25, 2.6, 0]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)
        
    
    } else if (selectEscolhido == "manteiga"){ 
        //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [165, 200, 0, 12.5, 8.4, 4.2, 0]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)
        
    
    } else if (selectEscolhido == "mel"){ 
        //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [246, 300, 0, 18, 12, 6, 0]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)
        
    
    } else if (selectEscolhido == "polvilho"){ 
        //[copoAmericano, xicara, copoRequeijao, colherSopa, colherSobremesa, colherCha, colherCafe]
        let valorG = [105, 128, 0, 8, 5.2, 2.6, 0]
        conversaoTela(inputIngrediente, valorG)
        // ingredienteConverter(inputIngrediente, valorG)
        
    
    } else if (selectEscolhido == "liquido"){ //LIQUIDO
        let valorG = [200, 150, 250, 15, 10, 5, 2.5]
        conversaoTela(inputIngrediente, valorG)
        // liquidoConverter(inputIngrediente)
        //teste(inputIngrediente, valorG)        
    }
}

//FUNÇÃO DO BOTÃO
botaoConverter.click(conversor)

//FUNÇÃO TELA UNIFICADA
function conversaoTela(inputIngrediente, valorG) {
    ingredienteConverter(inputIngrediente, valorG)
    metadeAmericano(inputIngrediente, valorG)
    metadeXicara(inputIngrediente, valorG)
    metadeRequeijao(inputIngrediente, valorG)
    verificaZero(valorG)
    verificaInteiros(inputIngrediente, valorG)
}


//FUNÇÕES PARA JOGAR RESULTADO NA TELA
function ingredienteConverter(inputIngrediente, valorG) {
    let ingredienteConvertido = todasConversoes(inputIngrediente, valorG)
    $('[data-copo-americano]').text(ingredienteConvertido[0])
    $('[data-xicara]').text(ingredienteConvertido[2])
    $('[data-copo-requeijao]').text(ingredienteConvertido[4])
    $('[data-colher-sopa]').text(ingredienteConvertido[6])
    $('[data-colher-sobremesa]').text(ingredienteConvertido[8])
    $('[data-colher-cha]').text(ingredienteConvertido[10])
    $('[data-colher-cafe]').text(ingredienteConvertido[12])
                    //copo americano        //xicara                    //requeijao
    //gRestantes = [ingredienteConvertido[1], ingredienteConvertido[3], ingredienteConvertido[5]]
}

//CALCULA SE GRAMAS RESTANTES CABEM NAS METADES
//COPO AMERICANO
function metadeAmericano(inputIngrediente, valorG) {
    let ingredienteConvertido = todasConversoes(inputIngrediente, valorG)
    let gRestantes = [ingredienteConvertido[1], ingredienteConvertido[3], ingredienteConvertido[5]]
    let metadeAmericanoConvertida = metadeConvertidaAmericano(valorG)
    let gRestanteX = Math.round(gRestantes[0])//indice da metade do copo americano

    let comparacaoMetadesGramas = americanoComparaGramas(metadeAmericanoConvertida, gRestantes) //array com as metades e os true/false
    let indiceMetadeTrue = americanoPosicaoTrue(comparacaoMetadesGramas)

    if (indiceMetadeTrue === 0) { //0 pode ser false
        //mudar o valor para MeiaXicara
        $('[data-valor-metade-americano]').text("")//numero
        $('[data-metade-americano]').text("Meio copo americano")
        $("[data-linha-americano='mais']").removeClass("esconder-metades")
        $("[data-linha-americano='metades']").removeClass("esconder-metades")
        $("[data-linha-americano='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-americano='ou']").removeClass("esconder-inteiros")
        
    } else if (indiceMetadeTrue === 1) {
        //mudar o valor para UmTerço
        $('[data-valor-metade-americano]').text("")//numero
        $('[data-metade-americano]').text("Um terço de copo americano")
        $("[data-linha-americano='mais']").removeClass("esconder-metades")
        $("[data-linha-americano='metades']").removeClass("esconder-metades")
        $("[data-linha-americano='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-americano='ou']").removeClass("esconder-inteiros")
        
    } else if (indiceMetadeTrue === 2) {
        //mudar valor para UmQuarto
        $('[data-valor-metade-americano]').text("")//numero
        $('[data-metade-americano]').text("Um quarto de copo americano")
        $("[data-linha-americano='mais']").removeClass("esconder-metades")
        $("[data-linha-americano='metades']").removeClass("esconder-metades")
        $("[data-linha-americano='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-americano='ou']").removeClass("esconder-inteiros")
        
    } else if (indiceMetadeTrue === 3) {
        //mudar valor para TresQuartos
        $('[data-valor-metade-americano]').text("")//numero
        $('[data-metade-americano]').text("Um terço de copo americano")
        $("[data-linha-americano='mais']").removeClass("esconder-metades")
        $("[data-linha-americano='metades']").removeClass("esconder-metades")
        $("[data-linha-americano='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-americano='ou']").removeClass("esconder-inteiros")
        
    } else {
        if (gRestanteX == 0) {
           $("[data-linha-americano='mais']").addClass("esconder-metades")
           $("[data-linha-americano='metades']").addClass("esconder-metades")
           
        } else if ((gRestanteX != 0) && (ingredienteConvertido[0] == 0)) {
            //esconder as gramas quando não tiver valor inteiro
            $("[data-linha-americano='inteiro']").addClass("esconder-inteiros")
            $("[data-linha-americano='ou']").addClass("esconder-inteiros")
            $("[data-linha-americano='mais']").addClass("esconder-metades")
           $("[data-linha-americano='metades']").addClass("esconder-metades")
        }
        else{
            $('[data-valor-metade-americano]').text(gRestanteX)
            $('[data-metade-americano]').text("gramas")
            $("[data-linha-americano='mais']").removeClass("esconder-metades")
            $("[data-linha-americano='metades']").removeClass("esconder-metades")
            $("[data-linha-americano='inteiro']").removeClass("esconder-inteiros")
            $("[data-linha-americano='ou']").removeClass("esconder-inteiros")
            
            //mostrar valores das gramas
        }
    }   
}


//XÍCARAS
function metadeXicara(inputIngrediente, valorG) {
    let ingredienteConvertido = todasConversoes(inputIngrediente, valorG)
    let gRestantes = [ingredienteConvertido[1], ingredienteConvertido[3], ingredienteConvertido[5]]
    let metadeXicaraConvertida = metadeConvertidaXicara(valorG)
    let gRestanteX = Math.round(gRestantes[1])//indice da metade da xicara //arredondar

    let comparacaoMetadesGramas = xicaraComparaGramas(metadeXicaraConvertida, gRestantes) //array com as metades e os true/false
    let indiceMetadeTrue = xicaraPosicaoTrue(comparacaoMetadesGramas)

    if (indiceMetadeTrue === 0) { //0 pode ser false
        //mudar o valor para MeiaXicara
        $('[data-valor-metade-xicara]').text("")//numero
        $('[data-metade-xicara]').text("Meia xicara")
        $("[data-linha-xicara='mais']").removeClass("esconder-metades")
        $("[data-linha-xicara='metades']").removeClass("esconder-metades")
        $("[data-linha-xicara='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-xicara='ou']").removeClass("esconder-inteiros")
        
    } else if (indiceMetadeTrue === 1) {
        //mudar o valor para UmTerço
        $('[data-valor-metade-xicara]').text("")
        $('[data-metade-xicara]').text("Um terço de xicara")
        $("[data-linha-xicara='mais']").removeClass("esconder-metades")
        $("[data-linha-xicara='metades']").removeClass("esconder-metades")
        $("[data-linha-xicara='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-xicara='ou']").removeClass("esconder-inteiros")
        
    } else if (indiceMetadeTrue === 2) {
        //mudar valor para UmQuarto
        $('[data-valor-metade-xicara]').text("")
        $('[data-metade-xicara]').text("Um quarto de xicara")
        $("[data-linha-xicara='mais']").removeClass("esconder-metades")
        $("[data-linha-xicara='metades']").removeClass("esconder-metades")
        $("[data-linha-xicara='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-xicara='ou']").removeClass("esconder-inteiros")
        
    } else if (indiceMetadeTrue === 3) {
        $('[data-valor-metade-xicara]').text("")
        $('[data-metade-xicara]').text("Um terço de xicara")
        $("[data-linha-xicara='mais']").removeClass("esconder-metades")
        $("[data-linha-xicara='metades']").removeClass("esconder-metades")
        $("[data-linha-xicara='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-xicara='ou']").removeClass("esconder-inteiros")
        
        //mudar valor para TresQuartos
    } else {
        if (gRestanteX == 0) {
            $("[data-linha-xicara='mais']").addClass("esconder-metades")
            $("[data-linha-xicara='metades']").addClass("esconder-metades")
            
         } else if ((gRestanteX != 0) && (ingredienteConvertido[2] == 0)) {
             //esconder as gramas quando não tiver valor inteiro
            $("[data-linha-xicara='inteiro']").addClass("esconder-inteiros")
            $("[data-linha-xicara='ou']").addClass("esconder-inteiros")
            $("[data-linha-xicara='mais']").addClass("esconder-metades")
           $("[data-linha-xicara='metades']").addClass("esconder-metades")
         } 
         else{
             $('[data-valor-metade-xicara]').text(gRestanteX)
             $('[data-metade-xicara]').text("gramas")
             $("[data-linha-xicara='mais']").removeClass("esconder-metades")
             $("[data-linha-xicara='metades']").removeClass("esconder-metades")
             $("[data-linha-xicara='inteiro']").removeClass("esconder-inteiros")
             $("[data-linha-xicara='ou']").removeClass("esconder-inteiros")
             
             //mostrar valores das gramas
         }
       
    }   
}

//COPO REQUEIJÃO
function metadeRequeijao(inputIngrediente, valorG) {
    let ingredienteConvertido = todasConversoes(inputIngrediente, valorG)
    let gRestantes = [ingredienteConvertido[1], ingredienteConvertido[3], ingredienteConvertido[5]]
    let metadeRequeijaoConvertida = metadeConvertidaRequeijao(valorG)
    let gRestanteX = Math.round(gRestantes[2])//indice da metade da xicara

    let comparacaoMetadesGramas = requeijãoComparaGramas(metadeRequeijaoConvertida, gRestantes) //array com as metades e os true/false
    let indiceMetadeTrue = RequeijaoPosicaoTrue(comparacaoMetadesGramas)

    if (indiceMetadeTrue === 0) { //0 pode ser false
        //mudar o valor para MeiaXicara
        $('[data-valor-metade-requeijao]').text("")//numero
        $('[data-metade-requeijao]').text("Meio copo de requeijão")
        $("[data-linha-requeijao='mais']").removeClass("esconder-metades")
        $("[data-linha-requeijao='metades']").removeClass("esconder-metades")
        $("[data-linha-requeijao='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-requeijao='ou']").removeClass("esconder-inteiros")
             
        
    } else if (indiceMetadeTrue === 1) {
        //mudar o valor para UmTerço
        $('[data-valor-metade-requeijao]').text("")
        $('[data-metade-requeijao]').text("Um terço de copo de requeijão")
        $("[data-linha-requeijao='mais']").removeClass("esconder-metades")
        $("[data-linha-requeijao='metades']").removeClass("esconder-metades")
        $("[data-linha-requeijao='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-requeijao='ou']").removeClass("esconder-inteiros")
        
    } else if (indiceMetadeTrue === 2) {
        //mudar valor para UmQuarto
        $('[data-valor-metade-requeijao]').text("")
        $('[data-metade-requeijao]').text("Um quarto de copo de requeijão")
        $("[data-linha-requeijao='mais']").removeClass("esconder-metades")
        $("[data-linha-requeijao='metades']").removeClass("esconder-metades")
        $("[data-linha-requeijao='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-requeijao='ou']").removeClass("esconder-inteiros")
        
    } else if (indiceMetadeTrue === 3) {
        $('[data-valor-metade-requeijao]').text("")
        $('[data-metade-requeijao]').text("Um terço de copo de requeijão")
        $("[data-linha-requeijao='mais']").removeClass("esconder-metades")
        $("[data-linha-requeijao='metades']").removeClass("esconder-metades")
        $("[data-linha-requeijao='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-requeijao='ou']").removeClass("esconder-inteiros")
        
        //mudar valor para TresQuartos
    } else {

        if (gRestanteX == 0) {
            $("[data-linha-requeijao='mais']").addClass("esconder-metades")
            $("[data-linha-requeijao='metades']").addClass("esconder-metades")
            
         } else if ((gRestanteX != 0) && (ingredienteConvertido[4] == 0)) {
            $("[data-linha-requeijao='inteiro']").addClass("esconder-inteiros")
            $("[data-linha-requeijao='ou']").addClass("esconder-inteiros")
            $("[data-linha-requeijao='mais']").addClass("esconder-metades")
            $("[data-linha-requeijao='metades']").addClass("esconder-metades")
         } else{
             $('[data-valor-metade-requeijao]').text(gRestanteX)
             $('[data-metade-requeijao]').text("gramas")
             $("[data-linha-requeijao='mais']").removeClass("esconder-metades")
             $("[data-linha-requeijao='metades']").removeClass("esconder-metades")
             $("[data-linha-requeijao='inteiro']").removeClass("esconder-inteiros")
             $("[data-linha-requeijao='ou']").removeClass("esconder-inteiros")
             
             //mostrar valores das gramas
         }

    }   
}

function verificaZero(valorG) {
    
    if (valorG[0] === 0){
        $('[data-linha-americano]').addClass("esconder")    
        //$('[data-linha-americano-2]').addClass("esconder")    
    } else {
        $('[data-linha-americano]').removeClass("esconder")
        $//('[data-linha-americano-2]').removeClass("esconder")
    }
    

    if (valorG[1] === 0){
        $('[data-linha-xicara]').addClass("esconder")     
        //$('[data-linha-xicara-2]').addClass("esconder")     
    } else {
        $('[data-linha-xicara]').removeClass("esconder")     
        //$('[data-linha-xicara-2]').removeClass("esconder")     
    }
    

    if (valorG[2] === 0) {
        $('[data-linha-requeijao]').addClass("esconder")           
        $('[data-linha-requeijao-2]').addClass("esconder")           
    } else {
        $('[data-linha-requeijao]').removeClass("esconder")           
        $('[data-linha-requeijao-2]').removeClass("esconder")           
    }


    if (valorG[3] === 0) {
        $('[data-linha-sopa]').addClass("esconder")      
    } else {
        $('[data-linha-sopa]').removeClass("esconder")    
    }


    if (valorG[4] === 0) {
        $('[data-linha-sobremesa]').addClass("esconder")            
    } else {
        $('[data-linha-sobremesa]').removeClass("esconder")    
    }


    if (valorG[5] === 0) {
        $('[data-linha-cha]').addClass("esconder")           
    } else {
        $('[data-linha-cha]').removeClass("esconder")    
    }


    if (valorG[6] === 0) {
        $('[data-linha-cafe]').addClass("esconder")        
    } else {
        $('[data-linha-cafe]').removeClass("esconder")    
    }
    


}

function verificaInteiros(inputIngrediente, valorG) {
    let ingredienteConvertido = todasConversoes(inputIngrediente, valorG)

    if (ingredienteConvertido[0] == 0 ) {
        $("[data-linha-americano='inteiro']").addClass("esconder-inteiros")
        $("[data-linha-americano='mais']").addClass("esconder-inteiros")
    } else {
        $("[data-linha-americano='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-americano='mais']").removeClass("esconder-inteiros")
    }

    if(ingredienteConvertido[2] == 0) {
        $("[data-linha-xicara='inteiro']").addClass("esconder-inteiros")
        $("[data-linha-xicara='mais']").addClass("esconder-inteiros")
    } else {
        $("[data-linha-xicara='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-xicara='mais']").removeClass("esconder-inteiros")
    }

    if(ingredienteConvertido[4] == 0) {
        $("[data-linha-requeijao='inteiro']").addClass("esconder-inteiros")
        $("[data-linha-requeijao='mais']").addClass("esconder-inteiros")
    } else {
        $("[data-linha-requeijao='inteiro']").removeClass("esconder-inteiros")
        $("[data-linha-requeijao='mais']").removeClass("esconder-inteiros")
    }
}
//ver se aluma dessas metades bate com os ml restantes. Se sim, retorna