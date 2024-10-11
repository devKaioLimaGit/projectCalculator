function Calculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliquebotão();
        },

        colocaNoDisplay(valor) {
            this.display.focus()
            this.display.value += valor
           
        },

        apagaTudo() {
            this.display.value = ""
        },

        apagaUmDigito() {
            this.display.value = this.display.value.slice(0, -1)
        },

        calculo() {
            const valor = eval(this.display.value);
            this.display.value = valor;

        },

        cliquebotão() {
            document.addEventListener('click', (e) => {
                const evento = e.target;
                document.addEventListener('keypress', (e) => {
                    const eventoTecla = e
                    if (eventoTecla.charCode === 13) {
                        this.calculo()
                    }
                })
                if (evento.classList.contains('btn-num')) {
                    this.colocaNoDisplay(evento.innerText)
                }
                if (evento.classList.contains('btn-clear')) {
                    this.apagaTudo()
                }
                if (evento.classList.contains('btn-del')) {
                    this.apagaUmDigito()
                }
                if (evento.classList.contains('btn-eq')) {
                    this.calculo()
                }


            });
        }
    };
}



const calculadora = Calculadora()


calculadora.inicia()