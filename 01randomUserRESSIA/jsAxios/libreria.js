"use strict";

//invia le richieste ajax
class Ajax {
	
 // Properties, scritte in modo diretto
 //inserisco il server di collegamento
 _URL = "https://randomuser.me"
 
 // Methods , scritte senza "function" davanti

 //method può essere GET o POST
 //url èla risorsa da richiedere al server (se: /api)
 //parameters contiene i parametri della richiesta, scritti in formato json

 //in caso di chiamata GET sarà sedRequest a convertire i parametri in url-encode e accodarli alla url
 sendRequest(method, url, parameters={}) {
	let options={
		"baseURL":this._URL, 		    //indirizzo server
		"url":  url, 		            //risorsa da richiedere
		"method": method.toUpperCase(),	//metodo da usare per la richiesta
		"headers": {"Accept": "application/json"},	//consigliata
		"responseType": "json",			//indica il formato dei dati che si ricevono
		"timeout": 5000,				//tempo massimo attesa di risposta (5s)
	}

	if(method.toUpperCase() == "GET")
	{
		//in che formato il server mi deve rispondere
		options.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8" ;
		options.params = parameters; //prende i parameters, li converte e li inserisce in param
	}
	else //method.toUpperCase() == "POST"
	{
		//restituisci i parametri in json
		options.headers["Content-Type"] = "application/json;charset=utf-8" ;
		options.data = parameters; //scrive i parametri nel body dell'http request
	}

	let promise = axios(options); //mi restituisce una promise
	return promise;
 }

 errore(err) {
	if(!err.response) //se server non ha risposto dopo 5s
		alert("Connection Refused or Server timeout");	
	else if (err.response.status == 200) //200 == no probelmi nel server
	//ma il risultato è stato restituito come json non valido, va in errore il parsing
        alert("Formato dei dati non corretto : " + err.response.data);
    else //errore dal server
        alert("Server Error: " +err.response.status + " - " +err.response.data);
 }

}

let ajax = new Ajax()
