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


/*if(pontuacaoUsuario >= 1000)
{
    console.log('Usuario vip');
} else{
    console.log('Usuario noraml')
}; */
// objeto date  

/* const data = new Date('2019-04 20:20:59');
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
*/
