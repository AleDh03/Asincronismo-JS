//Implementando de una API con XMLHttpRequest

//Instancia del request
//Permite hacer peticiones a algún servidor en la nube

let XMLHttpRe
quest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    //referencia al objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    /* A la referencia xhttp le pasamos un LLAMADO 'open' donde:
    parametro1 = el método, parametro2 = URL,
    parametro3 = verificación si asíncrono o no valor por defecto TRUE*/
    xhttp.open('GET', url_api, true);
    // Cuando el estado del objecto cambia, ejecuta la función
    xhttp.onreadystatechange = function (event) {
        /* los estados que pueden tener son:
        estado 0: initialization
        estado 1: cargando
        estado 2: ya se cargo
        estado 3: ya hay información
        estado 4: solicitud completada
        PD: no olvidar  que al estarse trabajando con una API 
        externa osea un servidor por lo que depende del servidor
        cuanto demore cada estado lo que hago es un pedido por datos (request) y solo aplicar una lógica.*/
        if(xhttp.readyState === 4){
            //Verifica el estado
            if(xhttp.status === 200){
                //Estándar de node con callbacks, primer parametro error, segundo parametro resultado.
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error' + url_api);
                return callback(error, null)
            }
        }
    }
    //Envío de la solicitud
xhttp.send()
}


fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);

        });
    });
});
