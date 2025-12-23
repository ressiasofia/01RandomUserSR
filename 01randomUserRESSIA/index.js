"use strict";

//pointers
const main = document.getElementById("main");
const optionsBody = document.getElementById("optionsbody");
const cardBody = document.getElementById("cardbody");

const slider = document.getElementById("slider");
const lblSlider = optionsBody.getElementsByTagName("label")[0];

//variable
let nUsers = 0;

let params = {
    results:"50"
}

slider.addEventListener("change",function(){
    nUsers = parseInt(slider.value);
    lblSlider.innerHTML = `Users to view: ${nUsers}`;
})

//functions
loadCard(params);

function loadCard(params){
    let promise = ajax.sendRequest("GET","./api",params);

    promise.catch(ajax.errore);
    promise.then(function(httpResponse){
        let people = httpResponse.data.results;
        console.log(people)
    })


}