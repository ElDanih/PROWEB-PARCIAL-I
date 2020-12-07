numeroInicial = 0;
numeroFinal = 0;
operacion = '';

function asignarNumero(numero){
    str = document.getElementById('txtcaja').value;
    document.getElementById('txtcaja').value = str + numero;

}

function asignarOperador(tmp){    
    numeroInicial = document.getElementById('txtcaja').value;
    document.getElementById('txtcaja').value = '';
    operacion = tmp;

}

function resultado(){

    numeroFinal = document.getElementById('txtcaja').value;

    if(operacion == '+' & numeroFinal != null){
        document.getElementById('txtcaja').value = parseInt(numeroInicial) + parseInt(numeroFinal);
    }

    if(operacion == '-' & numeroFinal != null){
        document.getElementById('txtcaja').value = parseInt(numeroInicial) - parseInt(numeroFinal);
    }

    if(operacion == '*' & numeroFinal != null){
        document.getElementById('txtcaja').value = parseInt(numeroInicial) * parseInt(numeroFinal);
    }

    if(operacion == '/' & numeroFinal != null){
        document.getElementById('txtcaja').value = parseInt(numeroInicial) / parseInt(numeroFinal);
    }

}

function borrar(){
    document.getElementById('txtcaja').value = '';
}

function calcularEcuacion(){

    //numeroInicial = document.getElementById('txtcaja').value;
    suma = 0;
    
    for(var i=1;i<=parseInt(document.getElementById('txtcaja').value);i++){
        y = i*i+5*i;
        suma += y;
    }

    document.getElementById('txtcaja').value = suma;
}

function creeGrafica(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //limpiar canvas
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    var alto    = canvas.height; 
    var ancho   = canvas.width;
    var color   = "rgba(0, 0, 200, 0.5)";
    
    linea(ctx, ancho/2, 0, ancho/2, alto, color); //Eje y
    linea(ctx, 0, alto/2, ancho, alto/2, color); //Eje x
    aux = 90;
    aux2 = 90;

    for(var i=0;i<=ancho;i++){
        
        y = Math.sin((aux*Math.PI)/180);
        y2 = Math.sin(((aux+1)*Math.PI)/180);

        linea(ctx, i, (y*-50)+alto/2, i+1, (y2*-50)+alto/2);

        aux = aux +1;

    }

    for(var i=0;i<=ancho;i=i+1){
        
        y = Math.cos((aux2*Math.PI)/180);
        y2 = Math.cos(((aux2+1)*Math.PI)/180);

        linea(ctx, i, (y*-50)+alto/2, i+1, (y2*-50)+alto/2);

        aux2 = aux2 +1;

    }
}

function limpiarCanvas(ctx){

    ctx.clearRect(0, 0, canvas.width, canvas.height); //limpiar canvas

}



//PUNTO 5 DEL PARCIAL----------------------------------------------->
function creeGraficaParcial(){
    
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    limpiarCanvas(ctx);

    var alto    = canvas.height; 
    var ancho   = canvas.width;
    var ecuacion_1 = 0;
    var ecuacion_2 = 0;

    linea(ctx, ancho/2, 0, ancho/2, alto); //Eje y
    linea(ctx, 0, alto/2, ancho, alto/2); //Eje x

    for(var i=0;i<=100;i++){
        
        ecuacion_1 = i * i + 3 * i; 
        ecuacion_2 = (i+1) * (i+1) + 3 * (i+1); 
        
        j1 = i + (ancho/2);
        j2 = (i+1)+(ancho/2);

        linea(ctx, j1, alto/2 - ecuacion_1, j2, alto/2 - ecuacion_2);     

    }

}
//PUNTO 5 DEL PARCIAL-----------------------------------------------<



//PUNTO 6 DEL PARCIAL----------------------------------------------->
function creeGraficaFiguraParcial(){

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    limpiarCanvas(ctx);
    linea(ctx, 70, 50, 530, 50);
    linea(ctx, 60, 65, 490, 65);
    linea(ctx, 70, 50, 60, 65); 
    linea(ctx, 110, 80, 473, 80); 
    linea(ctx, 490, 65, 298, 238);
    linea(ctx, 60, 65, 290, 270);
    linea(ctx, 290, 270, 310, 270);
    linea(ctx, 310, 270, 110, 80);
    linea(ctx, 530, 50, 540, 65); 
    linea(ctx, 540, 65, 310, 270); 
    linea(ctx, 530, 50, 310, 250); 
    linea(ctx, 310, 250, 130, 80); 

}

//PUNTO 6 DEL PARCIAL-----------------------------------------------<

function linea(ctx, xInicial, yInicial, xFinal, yFinal){

    ctx.beginPath();
    ctx.moveTo(xInicial, yInicial);
    ctx.lineTo(xFinal, yFinal);    
    ctx.stroke();
    ctx.closePath();

    //ctx.beginPath();
    //ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    //ctx.moveTo(110, 75);
    //ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    //ctx.moveTo(65, 65);
    //ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    //ctx.moveTo(95, 65);
    //ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    //ctx.stroke();

}


//PUNTO 2 DEL PARCIAL----------------------------------------------->

function calcularEscala(){
    borrar();
    
    var numero = 8;
    var resultado = 0;

    for(var i=1;i<=9;i++){

        resultado = numero * i;
        numero = resultado;

    }

    document.getElementById('txtcaja').value = resultado;
}

//PUNTO 2 DEL PARCIAL----------------------------------------------->