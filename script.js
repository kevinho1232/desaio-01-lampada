const luzOn = document.getElementById('luzOn');
const luzOff = document.getElementById('luzOff');
const lamp = document.getElementById('lamp');
let mensagem;


function islampQuebrada () {
    return lamp.src.indexOf ('quebrada') > -1;
    
}
    
function lampOn () {
    if (!islampQuebrada()) { 
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if (!islampQuebrada()) { 
        lamp.src = './img/desligada.jpg';
    }
}

function lampQuebrada() {
    lamp.src = './img/quebrada.jpg';
}

luzOn.addEventListener('click', lampOn);
luzOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampQuebrada);


