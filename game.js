let personagem = document.querySelector("#personagem");

let moeda = document.querySelector("#moeda");

let topo = 0;
let esquerdo = 0;

let moedaX = parseInt( Math.random() * 620 );
let moedaY = parseInt( Math.random() * 428 );

moeda.style.top = moedaY + "px";
moeda.style.left = moedaX + "px";



document.addEventListener("keydown", teclapressionada);

function teclapressionada(evento) {
    let tecla = evento.keyCode; /*Recupera o código da tecla que foi pressionada */
    /*codigo da tecla*/ 
    personagem.classList = "";
    personagem.classList.add("andando");

    if (tecla == 40) {
        topo += 10; /*topo = topo + 10 */
        if (topo >= 410) {
            topo = 410;
        }
        personagem.style.top = topo + "px";
    }
    else if (tecla == 38) {
        topo -= 10; /*topo = topo - 10 */
        if (topo <= 0) {
            topo = 0;
        }
        personagem.style.top = topo + "px";
        personagem.classList.add("cima");
    }
    else if (tecla == 39) {
        esquerdo += 10; /*esquerdo = esquerdo + 10 */
        
        if (esquerdo >= 598) {
            esquerdo = 598;
        }
        personagem.style.left = esquerdo + "px";
        personagem.classList.add("direita");
    }
    else if (tecla == 37) {
        esquerdo -= 10; /*esquerdo = esquerdo - 10 */
       
        if (esquerdo <= 10) {
            esquerdo = 10;
        } 
        personagem.style.left = esquerdo + "px";
        personagem.classList.add("esquerda");
    }
    /*awsd*/
    else if (tecla == 83) {
        topo += 10; /*topo = topo + 10 */
        personagem.style.top = topo + "px";
        if (topo >= 400) {
            topo = 400;
        }
    }
    else if (tecla == 87) {
        topo -= 10; /*topo = topo - 10 */
        if (topo <= 10) {
            topo = 10;
        }
        personagem.style.top = topo + "px";
        personagem.classList.add("cima");
    }
    else if (tecla == 68) {
        esquerdo += 10; /*esquerdo = esquerdo + 10 */
        if (esquerdo >= 598) {
            esquerdo = 598;
        }
        personagem.style.left = esquerdo + "px";
        personagem.classList.add("direita");
    }
    else if (tecla == 65) {
        esquerdo -= 10; /*esquerdo = esquerdo - 10 */
        if (esquerdo <= 10) {
            esquerdo = 10;
        }
        personagem.style.left = esquerdo + "px";
        personagem.classList.add("esquerda");
    }
}
