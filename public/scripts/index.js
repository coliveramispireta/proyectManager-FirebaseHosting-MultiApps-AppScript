import dotenv from 'dotenv';
dotenv.config();

function obtenerParametroDeURL(nombreParametro) {
    const queryString = window.location.search;
    const parametros = new URLSearchParams(queryString);
    const valorParametro = parametros.get(nombreParametro);
    return valorParametro;
}

function cambiarSrcIframeSegunParametro() {
  const urlLogin = process.env.URL_LOGIN; 
  const urlCenares = process.env.URL_APP_1; 
  const urlDiremid = process.env.URL_APP_2; 
  const urlLaboratorios = process.env.URL_APP_3; 
  const urlAdmin = process.env.URL_APP_4; 
  
    const page = obtenerParametroDeURL('p');
    const user = obtenerParametroDeURL('u');
    const token = obtenerParametroDeURL('t');

    const iframe = document.getElementById('iframeBody');


    if (page === "app_Cenares") {
        iframe.src = `${urlCenares}?u=${user}&t=${token}`; 
        ocultarParametros();
    } else if ( page === "app_Diremid"){ 
        iframe.src = `${urlDiremid}?u=${user}&t=${token}`; 
        ocultarParametros();
    } else if ( page === "app_Labs"){ 
        iframe.src = `${urlLaboratorios}?u=${user}&t=${token}`; 
        ocultarParametros();
    } else if ( page === "app_Admin"){ 
        iframe.src = `${urlAdmin}?u=${user}&t=${token}`; 
        ocultarParametros();
    } else {
      iframe.src = urlLogin; 
        console.log('No se proporcionó ningún parámetro válido, se redirege al login.');
        ocultarParametros();
    }
}

window.addEventListener('DOMContentLoaded', cambiarSrcIframeSegunParametro);


function ocultarParametros() {
    if (window.history.replaceState && window.location.search) {
        let nuevaUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({}, document.title, nuevaUrl);
    }
}


