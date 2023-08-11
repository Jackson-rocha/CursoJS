console.log('Hello word')
console.log('Meu nome é "JACKSON". Estou aprendendo javascript as 8 da manhã.');

//criando variaveis
// var let & const
//let nome = 'joão';
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

EXERCICIOS

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
let num11 = Math.floor(num10);
console.log(num10);





