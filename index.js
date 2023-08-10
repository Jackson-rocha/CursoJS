console.log('Hello word')
console.log('Meu nome é "JACKSON". Estou aprendendo javascript as 10 da manhã.');

//criando variaveis
// var let & const
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