/*console.log('Hello word');
console.log('Meu nome é "JACKSON". Estou aprendendo javascript as 8h da manhã.');

//criando variaveis
//var let & const
let nome = 'joão';
console.log( nome + ' e o pé de feijão')
//declarando varial 
let n; //declarou
n = 'jackson' //atribuindo valor a variavel 
console.log(n)

//regra de variaveis com palavras reservadas
//variasveis precisam ter nomes significativo 
//nao pode comecar com numeros
//nao pode conter espaços nem traços
//ultilizamos calCase
//case-sensitive
//nao ultilize var
let nomeCliente = 'luiz';
let nomecliente = 'Otavio';
console.log(nomeCliente,  nomecliente)
//const nao pode ser alterado e nem redefinido
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero
console.log(resultado)
//exercicio
const cliente = 'luiz otavio';
const sobrenome = 'mirando';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
imc = peso/(altura*altura)
let anoNacimento;
anoNacimento = 2023 - idade
console.log(cliente, sobrenome,'tem', idade,'anos, pesa', peso, 'kg tem',altura ,'de altura e seu imc é de', imc )
//template strings
console.log(`${cliente} ${sobrenome} nasceu em ${anoNacimento}`)
//tipo de dados primitivos
const pessoa = 'luiz';//string
const pessoa1 = "luiz";//string
const pessoa2 = `luiz`;//string
const num1 = 10;//number
const num2 = 10.52;//number
let nomeAluno; //undefined-> nao aponta para local nenhum na memoria
let sobrenomeAluno = null;//nulo -> nao aponta para local nenhum na memoria
const aprovado = false;//boolean = true, false (logico)
console.log(typeof nomeAluno);// tipo de dado primitivo
/*operadores aritimetico, de contribuição e incremento
+ adição / concatenação
- subtração / * divisão
** potencia / % resto da divisão

*/
/*
const num4 = 10;
const num5 = 5;
console.log(num4 + num5);
console.log(num4 - num5);
console.log(num4 ** num5);
console.log(num4 * num5);
console.log(num4 % num5);
/* orden de precedencia
1 ()
2 **
3 * / %
4 + -
*/
/* incremento = ++
   decremento = --
*/
/*Nan - not a number / parseInt(inteiro), parseFloat(flutuante decimais), Number(decimal e inteiro) */

/*EXERCICIOS

         let num6 = Number( prompt('digite um numero'));
         let num7 = Number(prompt('digite um numero'));
         const resultadoo = num6 + num7;
         alert(`O resultado foi ${resultadoo}`);


let varA = 'A'
let varB = 'B'
let varC = 'C'

const temp = varA
varA = varB
varB = varC
varC = temp

console.log(varA, varB, varC);
[varA, varB, varC] = [varB,varC, varA] 
//formas de concatenação

let umaString ="um texto";

console.log(umaString.concat('em um lindo dia.'));
console.log(umaString + 'em um lindo dia.');
console.log(`${umaString} em um lindo dia.`)

const nome = prompt('Digite seu nome completo:')
document.body.innerHTML += `Seu nome é: ${nome} <br />`
document.body.innerHTML += `Seu nome tem ${nome.length}letras <br />`
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`
document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ${nome[0]} <br />`
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.slice(-1)} <br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`

// convertendo numeros para string

let num8 = 1;     //number
let num9 = 2.5;   //number

console.log(num9.toString() + num8);

//representação binaria

console.log(num8.toString(2));

//apresenta casas decimais

console.log(num9.toFixed(2))

// checador de numeros inteiros

console.log(Number.isInteger(num8));

//checador para saber se é um numero ou nao

console.log(Number.isNaN(num9));

// objeto math.()

let num10 = 9.651761;
let num11 = Math.floor(num10);// aredonda para cima
           Math.ceil();// aredonda para baixo
           Math.round();// aredonda de forma altomatica
           Math.max(1,3,9,4,5,); //pega o maior numero da lista
           Math.min(1,3,9,4,5,);//pega o menor numero da lista
           Math.random();// escolhe numeros aleatorios
console.log(num10);

const numero = Number(prompt('digite um numero :'));
const nomeroTitulo = document.getElementById('nomero-Titulo');
const texto = document.getElementById('texto');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const baixo =document.getElementById('baixo');
const cima =document.getElementById('cima');
const decimais = document.getElementById('decimais')

nomeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>seu numero + 2 é ${numero + 2 } </p>`;
raiz.innerHTML = `<p>A raiz quadrada de ${numero} é ${Math.sqrt(numero)}</p>`;//ou elevado a potencia .. (numero ** 0.5)
inteiro.innerHTML = `<p>${numero} é inteiro? ${Number.isInteger(numero)} </p>`;
nan.innerHTML = `<p>È NaN: ${Number.isNaN(numero)}</p>`
baixo.innerHTML = `<p>arredondando pra baixo  ${Math.floor(numero)}</p>`;
cima.innerHTML = `<p>arredondando pra cima ${Math.ceil(numero)}</p>`;
decimais.innerHTML = `<p>com duas casas decimais ${numero.toFixed(2)}</p>`

// modo do curso

texto.innerHTML = "";
texto.innerHTML += `<p>seu numero + 2 é ${numero + 2 } </p>`;
texto.innerHTML += `<p>A raiz quadrada de ${numero} é ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)} </p>`;
//Arrays

const alunos =['pai','jr','jean','jackson',];
alunos[0] = 'wagner' //alterando item
//adicionando elemento no array
alunos.push('mae');
alunos.push('Duda');
alunos[alunos.length]= 'aline'; //outra forma de adc
alunos.unshift('isac'); //adc antes da lista
alunos.pop();//removendo o ultimo item
alunos.shift();//removendo o primeiro item
console.console.log(alunos.slice(0, 4)); //fatiamento de arrays
console.log(alunos);

// crindo funções
//funções precisam ter nomes significativo 
//nao pode comecar com numeros
//nao pode conter espaços nem traços
//ultilizamos calCase
//case-sensitive

function saudacao(nome){
   // console.log(`bom dia ${nome} !`);
       return `Bom dia ${nome} !`;    
   };
   const variavel = saudacao('jackson'); //chamando função
   console.log(variavel);
   saudacao('leonardo'); //chamando função
   saudacao('joao'); //chamando função
   saudacao('kleber'); //chamando função
   //função de soma
   
   function soma(x, y){
       const resultado = x + y;
       return resultado;
   }
   
   console.log(soma(3,7));
   //outro modo de criar função
   const raiz = function(n){
      return n**0.5;
   };
   
   // Arrow function
   const raiz = (n) => {
       return n**0.5;
   };
   console.log(raiz(9));
   
   // Arrow function simplificada
   const raiz = n => return n ** 0.5;
   
   console.log(raiz(9));
   //Objetos {}
//Objetos literais
const pessoa ={
   nome:'luiz',
   sobrenome:'Iranda',
   idade:25
};
function criarPessoa(nome, sobrenome, idade){
   return{nome, sobrenome, idade }; //retornando objeto
};
const pessoa1 =criarPessoa('luiz','Iranda',25);
const pessoa2 =criarPessoa('luiz','Iranda',25);
const pessoa3 =criarPessoa('luiz','Iranda',25);
const pessoa4 =criarPessoa('luiz','Iranda',25);
const pessoa5 =criarPessoa('luiz','Iranda',25);
console.log(pessoa3);
//objeto
const pessoa6 = {
   nome:'luiz',
   sobrenome:'Iranda',
   idade:25,
   //metodo(função dentro de um objeto..)
   fala(){
       console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
   },
   //metodo(função dentro de um objeto..)
   incrementaIdade(){
       ++this.idade;
   }
}
pessoa6.fala();


/*
primitivos (imtaveis) - string, boolean, undefined, null (bigint, symbol) - valor

referencia (mutavel) - array, object, function 
*/

/*exercicio... arrays e objects

function meuEscopo () {
   const form = document.querySelector('.form');
  
   //      uma maneira de enviar formulario
   form.onsubmit = function (evento) {
       evento.preventDefault();
        alert(1);
       console.log('foi enviado');
       
   };
}

meuEscopo();*/

 /* outra maneira de enviar formulario

 function meuEscopo () {
   const form = document.querySelector('.form');
   
   let contador =  1;
   function recebeEventoForm (evento) {
       evento.preventDefault();
       console.log(`Form nao foi enviado ${contador}`);
       contador++;
   }

   form.addEventListener('submit', recebeEventoForm );
}

meuEscopo();


// salvando dados do formulario em objetos...

function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas =[];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,

        });
        console.log(pessoas);
        
        resultado.innerHTML += `<p>seu nome completo é ${nome.value} ${sobrenome.value} O Sr. pesa ${peso.value}kg. e tem ${altura.value} de altura</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
*/
/*
operadores de comparaão

> maior que
>= maior que ou igual a
< menor que 
<= menor que ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/
/* 
operadores logicos

&& -> and -> E -> todas as expressoes precicam ser verdadeiras
|| -> or -> ou -> uma expressoes precicam ser verdadeira, para ser true..
! -> not -> nao -> negação, inverção de valor
*/

/*
   if e else ifs elses
 
   if = pode ser usado sozinho
   sempre que ultilizo a palavra else, preciso de um if antes
   Eu posso ter varios elses ifs na checagem 


const hora = 45;

if (hora >= 6 && hora <= 12){
    console.log('Bom dia!');
}else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde!');
}else if (hora >= 18 && hora <= 24) {
    console.log('Boa noite!');
}else if (hora >= 0 && hora <= 6) {
    console.log('Boa Madrugada!');
}else{
    console.log('não encontramos a Hora')
}

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
    const NivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${NivelImc}).`;

    setResultado(msg, true);
    
        
});

function getNivelImc (imc) {
    const nivel = ['abaixo do peso', 'peso normal','sobre peso', 'obesidade grau 1', 'obesidade grau2', 'obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.9) return nivel[1];
    if (imc >= 18.9) return nivel[0];
}

function getImc(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }


function criaP(){
    const p = document.createElement('p');
    return p;
};

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    
    const p = criaP ();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
};


// ? : operadores ternario
// ? valor para verdadeiro
// : valor para falso
const pontuacaoUsuario = 90;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);


if(pontuacaoUsuario >= 1000)
{
    console.log('Usuario vip');
} else{
    console.log('Usuario noraml')
}; 
// objeto date  

const data = new Date('2019-04 20:20:59');
console.log('dia', data.getDate());
console.log('mes', data.getMonth() + 1);//mes começa do zero 
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('dia da semana', data.getDay());// 0 - domingo / 6- sabado
console.log(data.toString()); 

function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() + 1);
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const seg = zeroAesquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);*/

// estruturas switch/case

/* const data = new Date('1987-04-26 00:00:00');
let diaSemana = data.getDay();
diaSemana = 8;
let diaSemanaTexto;

switch(diaSemana){
    case 0:
        diaSemanaTexto ='domingo';
        break;
    case 1:
        diaSemanaTexto ='segunda';
        break;
    case 2:
        diaSemanaTexto ='terça';
        break;
    case 3:
        diaSemanaTexto ='quarta';
        break;
    case 4:
        diaSemanaTexto ='quinta';
        break;
    case 5:
        diaSemanaTexto ='sexta';
        break;
    case 6:
        diaSemanaTexto ='sabado';
        break;
    default:
        diaSemanaTexto = 'dia invalido';
}

console.log(diaSemana, diaSemanaTexto);*/

/*

const h1 = document.querySelector('.container h1');

const data = new Date();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
    case 0:
        diaSemanaTexto ='domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto ='segunda-feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto ='terça-feira';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto ='quarta-feira';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto ='quinta-feira';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto ='sexta-feira';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto ='sabado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = 'dia invalido';
        return diaSemanaTexto;
    }
}

function getNomeMes(numeroMes){
    let NomeMes;

    switch(numeroMes){
    case 0:
        NomeMes ='janeiro';
        return NomeMes;
    case 1:
        NomeMes ='fevereiro';
        return NomeMes;
    case 2:
        NomeMes ='março';
        return NomeMes;
    case 3:
        NomeMes ='abril';
        return NomeMes;
    case 4:
        NomeMes ='maio';
        return NomeMes;
    case 5:
        NomeMes ='junho';
        return NomeMes;
    case 6:
        NomeMes ='julho';
        return NomeMes;
    case 7:
        NomeMes ='agosto';
        return NomeMes;
    case 8:
        NomeMes ='setembro';
        return NomeMes;
    case 9:
        NomeMes ='outubro';
        return NomeMes;
    case 10:
        NomeMes ='novembro';
        return NomeMes;
    case 11:
        NomeMes ='dezembro';
        return NomeMes;
    default:
        NomeMes = 'dia invalido';
        return NomeMes;
    }
}
function zeroAesquerda (num){
    return num >= 10 ? num : `0${num}`
}
function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const NomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${NomeMes}` + ` de ${data.getFullYear()} ` + 
        ` ${zeroAesquerda( data.getHours())}: ${zeroAesquerda(data.getMinutes())}`
    );
}
h1.innerHTML = criaData(data);

//outro modo de witch e data

const h1 = document.querySelector('.container h1');

const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'full'
};

h1.innerHTML = data.toLocaleDateString( {dateStyle: 'full', timeStyle: 'short'});



// Atribuição via desestruturação

let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

const numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, tres, ...resto] =numeros;
console.log(um, dois, tres);
console.log(resto);


// ...rest, ...spread
//                   0           1           2
//                0  1  2     0  1  2     0  1  2 
const numeros =[ [1, 2, 3,], [4, 5, 6], [ 7, 8, 9] ];
const [lista1, lista2, lista3] =numeros;
console.log(lista3[0]);

// estrutura de repetição

/* for (let i = 0; i <= 30; i++) {/*+=10*/
//console.log(i);
//}

/* const frutas = ['pera', 'uva', 'laranja'];

for (let i = 0; i < frutas.length; i++) { +=10
    console.log(i);
};
*/
//Exercicio com for
/*
//for classico geralmente com interaveis(arrays ou string)
const elementos = [
    {tag: 'p', texto: 'qualquer texto que voce quiser'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 3'},
    {tag: 'footer', texto: 'frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let{tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
    
}

container.appendChild(div);
*/

// for in --> le os indices ou chaves do objeto

/* const frutas = ['pera', 'maçã', 'uva'];

for (let i in frutas) {
    console.log(frutas[i]);
}

//

const pessoas = {
    nome: 'luiz',
    sobrenome: 'otavio',
    idade: 30
};

// for in --> le os indices ou chaves do objeto
for(let chave in pessoas){
    console.log(chave, pessoas[chave]);
}

// for of --> retorna os valores em si..

const pessoas = [
    'luiz',
    'otavio',
    'henrique',
]

for (let valor of pessoas){
    console.log(valor);
}

// forEach

pessoas.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})
*/

// exercicios com node list
/*
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
};



// while  do while estrutura de repetição
//while checa a condição e dps le o cod
function random(min, max){
    const r = Math.random() * (max -min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
};
//do while checa o cod e dps le a condição
do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);

//break e continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){

    if(numero === 2){
    continue;//pula o intem selecionado
    }

    if (numero === 7){
        break;//para no item selecionado
    }

    console.log(numero);
}

// exercicios com logica de programação

function max(x, y){
    if(x > y) return x;
    return y;
    
}
//
function max(x, y){
    return x > y ? x : y;
}

const max2 = (x, y) => x > y ? x : y;


console.log(max2(100, 20));

// exercicio 2 com logica de programação !!!

const ePaisagem = (largura, altura) => largura >= altura;

console.log(ePaisagem(1920.1920));

// exercicio de logica de programação 03

function fizzBuzz(numero){
    if(typeof numero !== 'number') return 'fizzBuzz';
    if(numero % 3 === 0 && numero % 5 === 0)return 'fizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'));
for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}

//tratando e lançando erros(try, catch, throw)

try {
    console.log(naoExisto);
} catch (err){
    console.log('naoExisto nao existe.');
    console,log(err);
}

//lancando erros 

function soma(x, y){
    if(
        typeof x !== 'number' || 
        typeof y !== 'number'
        ){
        throw new Error('x e y precisam ser numeros.');
    }
    return x + y;
}
try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));
}catch(error){
    console.log(error);
};

//tratando e lançando erros(try, catch, finally)

try{
    //executa quando nao há erros
}catch (e){
    //executa quando há erros
}finally{
    //executa sempre
};

//tratando e lançando erros(try, catch, finally)
 function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando intancia de data.');
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
 }

 try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
 }catch(e){
    //tratar erro
    //console.log(e);
 }finally{
    console.log('tenha um bom dia. ');
 }

 //setInterval e setTimeout

function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 10000);

setTimeout(function(){
    console.log('Ola mundo!');
}, 10000);
// exercicios de cronometro
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}
console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar= document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado');
    clearInterval(timer);
});
zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML ='00:00:00';
    segundos = 0;
});

// exercicios de cronometro modo mais curto
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}
console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar= document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML ='00:00:00';
        segundos = 0;
    }
    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    if(el.classList.contains('pausar')){
        relogio.classList.add('pausado');
        clearInterval(timer);
    }
})

// LISTA DE TAREFAS

const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value =''
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText +=' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText ='Apagar';
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);    
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();  
    criaBotaoApagar(li);
    salvarTarefas();
};

btnTarefa.addEventListener('click', function (){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    };
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();

//declaração de função ( function hoisting); são lidas prieiro
function falaOi(){
    console.log('oi');
}
falaOi();

//First-class objects (objetos de primeira class)
//function expression
const souUmDado = function(){
    console.log('sou um dado.');
};
souUmDado();

//arrow function
const funçãoArrow = () => {
    console.log('sou arrow function.')
}
funçãoArrow();

const obj = {
    falar: function(){
        console.log('Estou falando...');
    }
};
obj.falar(); 

//Parametros

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);    
}
conta('*', 3, 3, 5);

// returno de função

function criaMultiplicador(multiplicador){
    return function(n){
        return n* multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// factory function (função fabrica)
//constructor function(função construtora)
function criarPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        //GETTER
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto = 'falando sobre NADA'){
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        //GETTER
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criarPessoa('luiz' , 'otavio', 1.80, 80);
const p2 = criarPessoa('joao' , 'otavio', 1.90, 57);
const p3 = criarPessoa('junior' , 'otavio', 1.50, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

*/
//numeros pares
// dobrar os valores
//reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7,11, 15,22, 27];
const numeroPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor)

console.log(numeroPares);

// defineProperty - defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: false, //pode alterar
        configurable: true //configuravel
    });

    
}
const p1 = new Produto('camiseta', 20, 3);
p1.estoque = 500000;
console.log(p1);

//obct.assign(des, any)
//object.getOwPropertyDescriptor(o, 'prop')
// ...(spread)

//object.keys (retorna as chaves)
//object.freezer (congela o objeto)
//object.defineProperties(define varias propriedades)
//object.defineProperty (define uma propriedade)

function myFunction(parameter) {

    const a = parameter.map(p => {
  
       return p.value
  
    })
  
  const b = a.reduce((c, d) => {
  
        return c *= d * 3
  
    }, 1)
  
  return b
  
  }
  
  console.log(myFunction([
    {
        name: 'a', 
        value: 3 
    }, 
    { 
        name : 'b', 
        value: 18 
    }
]))

//super class
function Conta(agecia, conta, saldo){
    this.agecia = agecia;
    this.conta =conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this,this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`ag/c: ${this.agecia}/${this.conta}  saldo: R$${this.saldo.toFixed(2)}`
    );
};

function CC(agecia, conta, saldo, limite){
    Conta.call(this, agecia, conta, saldo);
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this,this.verSaldo();
};

function CP(agecia, conta, saldo, limite){
    Conta.call(this, agecia, conta, saldo);
    this.limite = limite;
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;



const cc = new CC(11, 22, 0, 100); 
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);