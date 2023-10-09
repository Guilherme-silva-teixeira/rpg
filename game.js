let personagem = document.querySelector("#personagem");

let topo = 0;
let esquerdo = 0;


document.addEventListener("keydown",teclapressionada);

function teclapressionada(evento){
    let tecla = evento.keyCode; /*Recupera o código da tecla que foi pressionada */

    if(tecla == 40){
        topo += 10; /*topo = topo + 10 */
        if(topo >= 410){
            topo = 410;
        }
        personagem.style.top = topo + "px";
    }
    else if(tecla == 38){
        topo -= 10; /*topo = topo - 10 */
        if(topo <= 0){
            topo = 0;
        }
        personagem.style.top = topo + "px";
    }
    else if(tecla == 39){
        esquerdo += 10; /*esquerdo = esquerdo + 10 */
        personagem.style.left = esquerdo + "px";
        if(esquerdo >= 598){
            esquerdo = 598;
        }
    }
    else if(tecla == 37){
        esquerdo -= 10; /*esquerdo = esquerdo - 10 */
        personagem.style.left = esquerdo + "px";
        if(esquerdo <= 10){
            esquerdo = 10;
        }
    }
    /*awsd*/
    else if(tecla == 83){
        topo += 10; /*topo = topo + 10 */
        personagem.style.top = topo + "px";
        if(topo >= 400){
            topo = 400;
        }
    }
    else if(tecla == 87){
        topo -= 10; /*topo = topo - 10 */
        personagem.style.top = topo + "px";
        if(topo <= 10){
            topo = 10;
        }
    }
    else if(tecla == 68){
        esquerdo += 10; /*esquerdo = esquerdo + 10 */
        personagem.style.left = esquerdo + "px";
        if(esquerdo >= 598){
            esquerdo = 598;
        }
    }
    else if(tecla == 65){
        esquerdo -= 10; /*esquerdo = esquerdo - 10 */
        personagem.style.left = esquerdo + "px";
        if(esquerdo <= 10){
            esquerdo = 10;
        }
    }
}
