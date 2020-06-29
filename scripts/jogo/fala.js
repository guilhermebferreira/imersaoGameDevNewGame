class Fala{

    constructor() {
        this.helpIndex = 0;
        this.helpFalas = [
            'Use as setas do teclado para controlar o personagem',
            'Seta pra frente, fara o personagem correr',
            'Voce pode pular usando Seta para Cima ou barra de espaco',
            'Para parar bruscamente, use seta para tras'
        ];
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
            this.texto=texto;
            this.exibeTexto = true;
            setTimeout(() => {
                this.exibeTexto = false;
            }, 10000);
        }
    }

    personagem(y){
        image(imagemHipsta,width/10, y, width/10, width/10);
    }

    cuidado(){
        if(!this.exibeCuidado){
            this.exibeCuidado = true;
            setTimeout(() => {
                this.exibeCuidado = false;
            }, 5000);
        }
    }


    help(){
        this.personagem(height/7*5);
        texto = this.helpFalas[this.helpIndex];

        this.contador++;
        if(this.contador>10){
            this.contador = 0;
            this.helpIndex++;
        }


        if( this.helpIndex > this.helpFalas.length -1){
            this.helpIndex = 0;
        }

        textAlign(LEFT);
        textSize(40);
        text(texto , width/4, height/9*7);
    }

    exibe(){
        if(this.exibeTexto ){

            this.personagem(height/6);

            textAlign(LEFT);
            fill('#fff');
            textSize(50);
            text(this.texto , width/4, height/4);

            if(this.exibeCuidado){

                text('Cuidado!!!' , width/4, height/3);
            }
        }else if(this.exibeCuidado){

            this.personagem(height/6);
            textAlign(LEFT);
            fill('#fff');
            textSize(50);
            text('Cuidado!!!', width/4, height/4);
        }else if(this.exibeSempre){

            this.personagem(height/6);

            textAlign(LEFT);
            fill('#fff');
            textSize(50);
            text(this.texto , width/4, height/4);
        }
    }
}