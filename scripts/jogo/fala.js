class Fala{

    constructor() {
        this.texto = '';
        this.contador = 0;
        this.exibeTexto = false;
        this.exibeCuidado = false;
        this.exibeSempre = false;
    }

    setTexto(texto, sempre = false){
        this.exibeSempre = sempre;
        if(this.texto!=texto){
            this.contador = 0;
            this.texto=texto
            this.exibeTexto = true;
            setTimeout(() => {
                this.exibeTexto = false;
            }, 5000);
        }
    }

    personagem(){
        image(imagemHipsta,width/10, height/6, width/10, width/10);
    }

    cuidado(){
        if(!this.exibeCuidado){
            this.exibeCuidado = true;
            setTimeout(() => {
                this.exibeCuidado = false;
            }, 5000);
        }
    }

    exibe(){
        if(this.exibeTexto ){

            this.personagem();

            textAlign(LEFT);
            fill('#fff');
            textSize(50);
            text(this.texto , width/4, height/4);

            if(this.exibeCuidado){

                text('Cuidado!!!' , width/4, height/3);
            }
        }else if(this.exibeCuidado){

            this.personagem();
            textAlign(LEFT);
            fill('#fff');
            textSize(50);
            text('Cuidado!!!', width/4, height/4);
        }else if(this.exibeSempre){

            this.personagem();

            textAlign(LEFT);
            fill('#fff');
            textSize(50);
            text(this.texto , width/4, height/4);
        }
    }
}