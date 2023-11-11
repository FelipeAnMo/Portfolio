let infoHabilidades = document.getElementById('info-habilidades')
let paragrafo = document.getElementById('info-paragrafo');
let habilidades = document.getElementById('habilidades');
let boxBottom = document.getElementById('box-bottom');
let sobre = document.getElementById('sobre');
let seta = document.getElementById('seta');

let marketplace = document.getElementById('marketplace');
let youwrite = document.getElementById('youwrite');
let minigame = document.getElementById('minigame');
let icones = document.getElementById('icones');

let cloneInfo = paragrafo.cloneNode(true);
let cloneHabilidades = infoHabilidades.cloneNode(true);

let boxBottomSobre = 150;
let boxBottomHabilidades = 235;
let numero;


function mudarAba(num) {
    numero = num;
    if(num === 1) {
        sobre.style.background = 'linear-gradient(to bottom, var(--brancoAcinzentado), var(--branco))';
        sobre.style.borderTop = '2px solid var(--cinzaClaro)';
        sobre.style.borderRight = '2px solid var(--cinzaClaro)';
        sobre.style.borderBottom = 'none';
        sobre.style.borderRadius = '8px 8px 0px 0px';

        habilidades.style.borderBottom = '2px solid var(--cinzaClaro)';
        habilidades.style.background = 'var(--brancoAcinzentado)';
        habilidades.style.borderTop = 'none';
        habilidades.style.borderLeft = 'none';

        paragrafo.style.opacity = 0;
        
        setTimeout(function() {
            paragrafo.innerHTML = cloneInfo.innerHTML;
            
            if(window.innerWidth > 1024 && window.innerWidth < 1164 && (numero === 1 || numero === undefined)) {
                boxBottomSobre = 175;
            
            } else if(window.innerWidth < 1024 && window.innerWidth >= 620 && (numero === 1 || numero === undefined)) {
                boxBottomSobre = 125;
                
            } else if(window.innerWidth < 620 && window.innerWidth >= 524 && (numero === 1 || numero === undefined)) {
                boxBottomSobre = 150;
            
            } else if(window.innerWidth < 524 && window.innerWidth >= 452 && (numero === 1 || numero === undefined)) {
                boxBottomSobre = 175;
            
            } else if(window.innerWidth < 452 && window.innerWidth >= 410 && (numero === 1 || numero === undefined)) {
                boxBottomSobre = 200;
            
            } else if(window.innerWidth < 410 && window.innerWidth >= 366 && (numero === 1 || numero === undefined)) {
                boxBottomSobre = 225;
            
            } else if(window.innerWidth < 366 && (numero === 1 || numero === undefined)) {
                boxBottomSobre = 250;
            
            }

            boxBottom.style.height = boxBottomSobre + 'px';

            setTimeout(function() {
                paragrafo.style.opacity = 1;
            }, 200);
        }, 300);

    } else if(num === 2) {
        habilidades.style.background = 'linear-gradient(to bottom, var(--brancoAcinzentado), var(--branco))';
        habilidades.style.borderTop = '2px solid var(--cinzaClaro)';
        habilidades.style.borderLeft = '2px solid var(--cinzaClaro)';
        habilidades.style.borderBottom = 'none';
        habilidades.style.borderRadius = '8px 8px 0px 0px';

        sobre.style.borderBottom = '2px solid var(--cinzaClaro)';
        sobre.style.background = 'var(--brancoAcinzentado)';
        sobre.style.borderTop = 'none';
        sobre.style.borderRight = 'none';

        paragrafo.style.opacity = 0;

        setTimeout( () => {
            paragrafo.innerHTML = cloneHabilidades.innerHTML;

            if(window.innerWidth > 1024 && window.innerWidth < 1366 && numero === 2) {
                document.getElementById('icones').innerHTML = '';
                boxBottomHabilidades = 125;
        
                if(window.innerWidth < 1224) {
                    boxBottomHabilidades = 150;

                }

            } else if(window.innerWidth >= 620 && numero === 2) {
                document.getElementById('icones').innerHTML = icones.innerHTML;
                boxBottomHabilidades = 235;
        
            } else if(window.innerWidth < 620 && window.innerWidth >= 550 && numero === 2) {
                document.getElementById('icones').innerHTML = '';
                boxBottomHabilidades = 125;
        
            } else if(window.innerWidth < 550 && window.innerWidth >= 442 && numero === 2) {
                document.getElementById('icones').innerHTML = '';
                boxBottomHabilidades = 150;
        
            } else if(window.innerWidth < 442 && window.innerWidth >= 362 && numero === 2) {
                document.getElementById('icones').innerHTML = '';
                boxBottomHabilidades = 175;

            } else if(window.innerWidth < 362 && numero === 2) {
                document.getElementById('icones').innerHTML = '';
                boxBottomHabilidades = 200;
        
            }

            boxBottom.style.height = boxBottomHabilidades + 'px';

            setTimeout( () => {
                paragrafo.style.opacity = 1;

            }, 200);
        }, 300);

    }
}


function mudarAbaProjeto(num) {
    if(num === 1) {
        marketplace.style.backgroundColor = 'var(--branco)';
        marketplace.style.borderRight = 'none';
        marketplace.style.borderTop = 'none';
        marketplace.style.borderBottom = '2px solid var(--cinzaClaro)';

        youwrite.style.backgroundColor = 'var(--brancoAcinzentado)';
        youwrite.style.borderRight = '2px solid var(--cinzaClaro)';
        youwrite.style.borderBottom = '2px solid var(--cinzaClaro)';
        youwrite.style.borderTop = 'none';

        minigame.style.backgroundColor = 'var(--brancoAcinzentado)';
        minigame.style.borderRight = '2px solid var(--cinzaClaro)';
        minigame.style.borderBottom = '2px solid var(--cinzaClaro)';
        minigame.style.borderTop = 'none';

    } else if(num === 2) {
        youwrite.style.backgroundColor = 'var(--branco)';
        youwrite.style.borderRight = 'none';
        youwrite.style.borderTop = '2px solid var(--cinzaClaro)';
        youwrite.style.borderBottom = '2px solid var(--cinzaClaro)';

        marketplace.style.backgroundColor = 'var(--brancoAcinzentado)';
        marketplace.style.borderRight = '2px solid var(--cinzaClaro)';
        marketplace.style.borderBottom = 'none';

        minigame.style.backgroundColor = 'var(--brancoAcinzentado)';
        minigame.style.borderRight = '2px solid var(--cinzaClaro)';
        minigame.style.borderBottom = '2px solid var(--cinzaClaro)';
        minigame.style.borderTop = 'none';

    } else if(num === 3) {
        minigame.style.backgroundColor = 'var(--branco)';
        minigame.style.borderRight = 'none';
        minigame.style.borderTop = '2px solid var(--cinzaClaro)';
        minigame.style.borderBottom = '2px solid var(--cinzaClaro)';

        marketplace.style.backgroundColor = 'var(--brancoAcinzentado)';
        marketplace.style.borderRight = '2px solid var(--cinzaClaro)';
        marketplace.style.borderBottom = 'none';

        youwrite.style.backgroundColor = 'var(--brancoAcinzentado)';
        youwrite.style.borderRight = '2px solid var(--cinzaClaro)';
        youwrite.style.borderTop = '2px solid var(--cinzaClaro)';
        youwrite.style.borderBottom = 'none';

    }
}

window.addEventListener('resize', () => {
    navegadorWidth = window.innerWidth;

    if(navegadorWidth > 1024 && navegadorWidth < 1164 && (numero === 1 || numero === undefined)) {
        boxBottomSobre = 175;
        boxBottom.style.height = boxBottomSobre + 'px';

    } else if(navegadorWidth < 1024 && navegadorWidth >= 620 && (numero === 1 || numero === undefined)) {
        boxBottomSobre = 125;
        boxBottom.style.height = boxBottomSobre + 'px';
        
    } else if(navegadorWidth < 620 && navegadorWidth >= 524 && (numero === 1 || numero === undefined)) {
        boxBottomSobre = 150;
        boxBottom.style.height = boxBottomSobre + 'px';

    } else if(navegadorWidth < 524 && navegadorWidth >= 452 && (numero === 1 || numero === undefined)) {
        boxBottomSobre = 175;
        boxBottom.style.height = boxBottomSobre + 'px';

    } else if(navegadorWidth < 452 && navegadorWidth >= 410 && (numero === 1 || numero === undefined)) {
        boxBottomSobre = 200;
        boxBottom.style.height = boxBottomSobre + 'px';

    } else if(navegadorWidth < 410 && navegadorWidth >= 366 && (numero === 1 || numero === undefined)) {
        boxBottomSobre = 225;
        boxBottom.style.height = boxBottomSobre + 'px';

    } else if(navegadorWidth < 366 && (numero === 1 || numero === undefined)) {
        boxBottomSobre = 250;
        boxBottom.style.height = boxBottomSobre + 'px';

    }

    if(navegadorWidth > 1024 && navegadorWidth < 1366 && numero === 2) {
        document.getElementById('icones').innerHTML = '';
        boxBottomHabilidades = 125;
        boxBottom.style.height = boxBottomHabilidades + 'px';

        if(window.innerWidth < 1224) {
            boxBottomHabilidades = 150;
            boxBottom.style.height = boxBottomHabilidades + 'px';

        }

    } else if(navegadorWidth >= 620 && numero === 2) {
        document.getElementById('icones').innerHTML = icones.innerHTML;
        boxBottomHabilidades = 235;
        boxBottom.style.height = boxBottomHabilidades + 'px';

    } else if(navegadorWidth < 634 && navegadorWidth >= 564 && numero === 2) {
        document.getElementById('icones').innerHTML = '';
        boxBottomHabilidades = 125;
        boxBottom.style.height = boxBottomHabilidades + 'px';

    } else if(navegadorWidth < 564 && navegadorWidth >= 456 && numero === 2) {
        document.getElementById('icones').innerHTML = '';
        boxBottomHabilidades = 150;
        boxBottom.style.height = boxBottomHabilidades + 'px';

    } else if(navegadorWidth < 456 && navegadorWidth >= 376 && numero === 2) {
        document.getElementById('icones').innerHTML = '';
        boxBottomHabilidades = 175;
        boxBottom.style.height = boxBottomHabilidades + 'px';

    } else if(navegadorWidth < 376 && numero === 2) {
        document.getElementById('icones').innerHTML = '';
        boxBottomHabilidades = 200;
        boxBottom.style.height = boxBottomHabilidades + 'px';

    }
});


window.addEventListener('scroll', () => {
    let PosicaoScrollAtual = window.scrollY;
  
    if (PosicaoScrollAtual > 175) {

      seta.style.opacity = 0;
    } else {

      seta.style.opacity = 1;
    }
});


function criarCubo() {
    let randomNumero = Math.random();
    let styleLeft = Math.random() * window.innerWidth;
    
    if(window.innerWidth - styleLeft <= 30) {
        styleLeft = window.innerWidth - 30;
    }

    const cubo = document.createElement('div');
    cubo.className = 'cubos';
    cubo.style.left = styleLeft + 'px';
    cubo.style.opacity = Math.random();
    cubo.style.width = randomNumero * 30 + 'px';
    cubo.style.height = randomNumero * 30 + 'px';
    document.getElementById('background').appendChild(cubo);
    
    cubo.addEventListener('animationiteration', () => {
        document.getElementById('background').removeChild(cubo);
    });
}


setInterval(criarCubo, 400);

infoHabilidades.remove();

if(window.innerWidth > 1024 && window.innerWidth < 1164 && (numero === 1 || numero === undefined)) {
    boxBottomSobre = 175;

} else if(window.innerWidth < 1024 && window.innerWidth >= 620 && (numero === 1 || numero === undefined)) {
    boxBottomSobre = 125;
    
} else if(window.innerWidth < 620 && window.innerWidth >= 524 && (numero === 1 || numero === undefined)) {
    boxBottomSobre = 150;

} else if(window.innerWidth < 524 && window.innerWidth >= 452 && (numero === 1 || numero === undefined)) {
    boxBottomSobre = 175;

} else if(window.innerWidth < 452 && window.innerWidth >= 410 && (numero === 1 || numero === undefined)) {
    boxBottomSobre = 200;

} else if(window.innerWidth < 410 && window.innerWidth >= 366 && (numero === 1 || numero === undefined)) {
    boxBottomSobre = 225;

} else if(window.innerWidth < 366 && (numero === 1 || numero === undefined)) {
    boxBottomSobre = 250;

}

boxBottom.style.height = boxBottomSobre + 'px';
