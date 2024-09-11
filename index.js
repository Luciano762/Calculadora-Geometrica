document.getElementById('meuBotao').addEventListener('click', start);

let opcao = ""

function areaTriangulo (triangulo) {
  const resultado = (triangulo.base * triangulo.altura) / 2
  alert("o resultado do calculo é: " + resultado)
}

function areaRetangulo (retangulo) {
  const resultado = (retangulo.base * retangulo.altura)
  alert("o resultado do calculo é: " + resultado)
}

function areaQuadrado (quadrado) {
  const resultado = (quadrado * quadrado)
  alert("o resultado do calculo é: " + resultado)
}

function areaTrapezio (trapezio) {
  console.log(trapezio)
  const resultado = (parseFloat(trapezio.baseMaior) + parseFloat(trapezio.baseMenor)) * trapezio.altura / 2
  alert("o resultado do calculo é: " + resultado)
}

function areaCirculo (raio) {
  const pi = Math.PI
  const resultado =  pi * (raio * raio)
  alert("o resultado do calculo é: " + resultado)
}

function start () {
  opcao = prompt("Calculadora de operações: " + "\n 1) Área do Triângulo \n 2)Área do retângulo \n 3) Área do quadrado \n 4) Área do trapézio \n 5) Área do circulo \n 6) Sair")
  switch (parseFloat(opcao)) {
    case 1:
      let triangulo = {}
      triangulo.base = prompt("Qual a base? ")
      triangulo.altura = prompt("Qual a altura? ")
      areaTriangulo(triangulo)
      break
    case 2:
      let retangulo = {}
      retangulo.base = prompt("Qual a base? ")
      retangulo.altura = prompt("Qual a altura? ")
      areaRetangulo(retangulo)
      break
    case 3:
      let lado = 0
      lado = prompt("Qual o Lado do quadrado? ")
      areaQuadrado(lado)
      break
    case 4:
      let trapezio = {}
      trapezio.baseMaior = prompt("Qual a base maior? ")
      trapezio.baseMenor = prompt("Qual a base menor? ")
      trapezio.altura = prompt("Qual a altura? ")
      areaTrapezio(trapezio)
      break
    case 5:
      let raio = 0
      raio = prompt("Qual o raio? ")
      areaCirculo(raio)
      break
    case 6:
      alert("Saindo...")
    default:
      break;
  }
}
 

  console.clear();

const TAIL_LENGTH = 20;

const cursor = document.getElementById('cursor');

let mouseX = 0;
let mouseY = 0;

let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({x: 0, y: 0});

function onMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function initCursor() {
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let div = document.createElement('div');
    div.classList.add('cursor-circle') ;
    cursor.append(div);
  }
  cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'));
}

function updateCursor() {  
  cursorHistory.shift();
  cursorHistory.push({ x: mouseX, y: mouseY });
    
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let current = cursorHistory[i];
    let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];
    
    let xDiff = next.x - current.x;
    let yDiff = next.y - current.y;
    
    current.x += xDiff * 0.35;
    current.y += yDiff * 0.35;
    cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i/TAIL_LENGTH})`;  
  }
  requestAnimationFrame(updateCursor)
}

document.addEventListener('mousemove', onMouseMove, false);

initCursor();
updateCursor();