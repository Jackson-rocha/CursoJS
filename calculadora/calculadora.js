function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        realizaConta(){
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta){
            alert('conta invalida');
        }
            this.display.value =String(conta);
            } catch(e) {
                alert('conta invalida');
                return;
            }
        },

        clearDisplay(){
        this.display.value ='';
        },

        apagaUm(){
        this.display.value = this.display.value.slice(0, -1);
        },
        
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
        this.display.addEventListener('keyup', e => {
            if(e.keycode === 13){
                this.realizaConta();
        }
        });
    },

        cliqueBotoes(){
            document.addEventListener('click',e =>{
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }   
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }     
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }     
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }

    };
}
const calculadora = criaCalculadora();
calculadora.inicia();