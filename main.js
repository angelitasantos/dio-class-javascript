// Footer - Relógio

function relogio(){
    // Variáveis
    var data = new Date();                  //Obter a data/hora atual
    var dia = data.getDate();               // 1-31
    var mes = data.getMonth()+1;            // 0-11 (zero=janeiro)
    var ano = data.getFullYear();           // 4 dígitos
    var horas = data.getHours();            // 0-23
    var minutos = data.getMinutes();        // 0-59
    var segundos = data.getSeconds();       // 0-59

    //Incluir um 0 a esquerda dos números abaixo de 10
    if(dia < 10){
        dia = "0"+dia;
    }

    if(mes < 10){
        mes = "0"+mes;
    }

    if(horas < 10){
        horas = "0"+horas;
    }

    if(minutos < 10){
        minutos = "0"+minutos;
    }

    if(segundos < 10){
        segundos = "0"+segundos;
    }

    var string_data = dia + '/' + mes + '/' + ano;
    var string_hora = horas + ':' + minutos + ':' + segundos;

    //Referência a div criada no arquivo HTML
    document.getElementById("datalocal").innerHTML=string_data+" - "+string_hora;

}

window.setInterval("relogio()",1000);


// Links

function abrirBrasil(){
    window.open("https://pt.wikipedia.org/wiki/Brasil");
}

function abrirAmericaSul(){
    window.open("https://pt.wikipedia.org/wiki/Am%C3%A9rica_do_Sul");
}

function abrirAmericaNorte(){
    window.open("https://pt.wikipedia.org/wiki/Am%C3%A9rica_do_Norte");
}

function abrirEuropa(){
    window.open("https://pt.wikipedia.org/wiki/Europa");
}


// Passar o mouse sobre o elemento

function cliqueAqui(elemento){
    elemento.innerHTML="Clique no ícone";
}

function voltarClique(elemento){
    elemento.innerHTML="";
}

function saibaMais(elemento){
    elemento.innerHTML="Clique aqui";
}

function voltarSaibaMais(elemento){
    elemento.innerHTML="Saiba mais";
}

