const h1 = document.querySelector('.container h1');

const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'full'
};

h1.innerHTML = data.toLocaleDateString( {dateStyle: 'full', timeStyle: 'short'});