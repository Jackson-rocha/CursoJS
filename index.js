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

meuEscopo();*/







