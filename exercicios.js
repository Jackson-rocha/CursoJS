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