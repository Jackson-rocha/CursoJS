//capturar evento de submit do formulario

const form = document.querySelector('#form');

form.addEventListener ('submit' , function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if(!peso){
        setResultado('peso inválido', false);
        return;
    }
    if(!altura){
        setResultado('altura invalida', false);
        return;
    }
    const imc = getImc(peso, altura);

    console.log(imcmc)
    
        
});


function getImc(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    };


function criaP(){
    const p = document.createElement('p');
    return p;
};

function setResultado(msg,){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;

    const p = criaP
    p.innerHTML = msg;
    resultado.appendChild(p);
};