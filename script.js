const seta = document.getElementById('seta');
const items = document.querySelectorAll('.carousel-item');
const carousel = document.getElementById('carousel');
const icons = document.getElementById('carousel').querySelectorAll('.fa-brands');

let currentIndex = 0;
let habilidadesIcons = 1;
let carouselItemWidth = 222;
let posicaoInicial = { x: 0, y: 0 };
let totalItems = (items.length / 5) + habilidadesIcons;
let projetoOne = document.querySelector('.conteudo');
let projetosBox = document.querySelectorAll('.projetos-box');

if(window.innerWidth <= 506) {
  carouselItemWidth = 120;
  projetoOne.style.top = '-197px';
  projetosBox[1].style.display = 'none';
  habilidadesIcons = 4;

} else if(window.innerWidth <= 700) {
  carouselItemWidth = 135;
  projetoOne.style.top = '-222px';
  projetosBox[1].style.display = 'none';
  habilidadesIcons = 4;

} else if(window.innerWidth <= 940) {
  carouselItemWidth = 186;
  projetoOne.style.top = '-222px';
  projetosBox[1].style.display = 'none';
  habilidadesIcons = 4;

} else if(window.innerWidth <= 1060) {
  carouselItemWidth = 186;
  projetoOne.style.top = '-222px';
  projetosBox[1].style.display = 'flex';
  habilidadesIcons = 3;

} else if(window.innerWidth <= 1390) {
  carouselItemWidth = 222;
  habilidadesIcons = 3;
  projetoOne.style.top = '-252px';

} else if(window.innerWidth <= 1500) {
  habilidadesIcons = 2;

}

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

document.addEventListener("visibilitychange", () => {
    let elemCubos = document.getElementById('background').querySelectorAll('.cubos');

    if (document.visibilityState == 'visible') {
      elemCubos.forEach((e => {
        e.remove();
      }));
    }
});


function nextSlide() {
    if (currentIndex < Math.ceil(totalItems) - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = Math.ceil(totalItems) - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const newTransformValue = -currentIndex * carouselItemWidth + 'px';
    document.getElementById('carousel').style.transform = 'translateX(' + newTransformValue + ')';
}

function updateWidth() {
    let larguraJanela = window.innerWidth;
    totalItems = (items.length / 5) + habilidadesIcons;

    if(larguraJanela <= 506) {
      carouselItemWidth = 120;
      projetoOne.style.top = '-197px';
      projetosBox[1].style.display = 'none';
      habilidadesIcons = 4;

    } else if(larguraJanela <= 700) {
      carouselItemWidth = 135;
      projetoOne.style.top = '-222px';
      projetosBox[1].style.display = 'none';
      habilidadesIcons = 4;

    } else if(larguraJanela <= 940) {
      carouselItemWidth = 186;
      projetoOne.style.top = '-222px';
      projetosBox[1].style.display = 'none';
      habilidadesIcons = 4;

    } else if(larguraJanela <= 1060) {
      carouselItemWidth = 186;
      habilidadesIcons = 3;
      projetoOne.style.top = '-222px';
      projetosBox[1].style.display = 'flex';

    } else if(larguraJanela <= 1390) {
      carouselItemWidth = 222;
      habilidadesIcons = 3;
      projetoOne.style.top = '-252px';

    } else if(larguraJanela <= 1500) {
      habilidadesIcons = 2;

    } else if(larguraJanela > 1500) {
      habilidadesIcons = 1;

    }


    let elemCubos = document.getElementById('background').querySelectorAll('.cubos');
    elemCubos.forEach((e => {
      e.remove();
    }));
}

window.addEventListener('resize', updateWidth);

updateWidth();

projetoOne.addEventListener('mouseover', () => {
  let background = document.querySelector('.background');

  background.style.filter = 'blur(0px)';
});

projetoOne.addEventListener('mouseout', () => {
  let background = document.querySelector('.background');

  background.style.filter = 'blur(4px)';
});

projetoOne.addEventListener('click', () => {
  window.open('http://rifa-portfolio.rf.gd/', '_blank');
});


document.getElementById('html-box').addEventListener('mousemove', (event) => {mostrarDivDados(document.getElementById('divDadosHtml'), event)});
document.getElementById('html-box').addEventListener('mouseout', () => {esconderDivDados(document.getElementById('divDadosHtml'))});
document.getElementById('css-box').addEventListener('mousemove', (event) => {mostrarDivDados(document.getElementById('divDadosCss'), event)});
document.getElementById('css-box').addEventListener('mouseout', () => {esconderDivDados(document.getElementById('divDadosCss'))});
document.getElementById('js-box').addEventListener('mousemove', (event) => {mostrarDivDados(document.getElementById('divDadosJs'), event)});
document.getElementById('js-box').addEventListener('mouseout', () => {esconderDivDados(document.getElementById('divDadosJs'))});
document.getElementById('angular-box').addEventListener('mousemove', (event) => {mostrarDivDados(document.getElementById('divDadosAngular'), event)});
document.getElementById('angular-box').addEventListener('mouseout', () => {esconderDivDados(document.getElementById('divDadosAngular'))});
document.getElementById('php-box').addEventListener('mousemove', (event) => {mostrarDivDados(document.getElementById('divDadosPhp'), event)});
document.getElementById('php-box').addEventListener('mouseout', () => {esconderDivDados(document.getElementById('divDadosPhp'))});
document.getElementById('bs-box').addEventListener('mousemove', (event) => {mostrarDivDados(document.getElementById('divDadosBs'), event)});
document.getElementById('bs-box').addEventListener('mouseout', () => {esconderDivDados(document.getElementById('divDadosBs'))});
document.getElementById('sass-box').addEventListener('mousemove', (event) => {mostrarDivDados(document.getElementById('divDadosSass'), event)});
document.getElementById('sass-box').addEventListener('mouseout', () => {esconderDivDados(document.getElementById('divDadosSass'))});

let distanciaY;
let distanciaX = 3;

document.addEventListener("mousemove", updateMousePosition);

document.addEventListener("click", updateMousePosition);

function mostrarDivDados(divDados, event) {
  posicaoInicial.x = event.pageX;
  posicaoInicial.y = event.pageY;

  if(window.innerWidth <= 900) {
    distanciaY = 50;

  } else {
    distanciaY = 3;

  }

  divDados.style.left = (posicaoInicial.x + distanciaX) + 'px';
  divDados.style.top = (posicaoInicial.y + distanciaY) + 'px';
  divDados.style.display = 'flex';
}

function esconderDivDados(divDados) {
  divDados.style.display = 'none';
}

function updateMousePosition(event) {
  mouseX = event.clientX;
  let metadeWidth = window.innerWidth / 2;

  if(window.innerWidth <= 900 && mouseX >= metadeWidth) {
    distanciaX = -250;
    let divs = document.querySelectorAll('.div-dados');

    divs.forEach(function(div) {
      div.style.borderRadius = '26px 0px 26px 26px';
    });

  } else {
    distanciaX = 3;
    let divs = document.querySelectorAll('.div-dados');

    divs.forEach(function(div) {
      div.style.borderRadius = '0px 26px 26px 26px';
    });

  }
}