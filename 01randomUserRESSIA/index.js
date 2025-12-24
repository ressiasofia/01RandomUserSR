"use strict";

//pointers
const main = document.getElementById("main");
const optionsBody = document.getElementById("optionsbody");
const cardBody = document.getElementById("cardbody");

const slider = document.getElementById("slider");
const lblSlider = document.getElementsByTagName("label")[0];

//variable
let nUsers = 0;

let params = {
    results: "50"
}

slider.addEventListener("change", function () {
    nUsers = parseInt(slider.value);
    lblSlider.innerHTML = `Users to view: ${nUsers}`;

    params.results = nUsers;
})

//functions
loadCard(params);

function loadCard(params) {
    let promise = ajax.sendRequest("GET", "./api", params);

    promise.catch(ajax.errore);
    promise.then(function (httpResponse) {
        let people = httpResponse.data.results;
        console.log(people)

        for (let person of people) {
            let card = document.createElement("div");
            card.classList.add("card");
            cardBody.append(card);

            let cardInner = document.createElement("div");
            cardInner.classList.add("cardInner");
            cardInner.addEventListener("click",function(){
                $(this).toggleClass("flipped");
            })
            card.append(cardInner);

            let cardFront = document.createElement("div");
            cardFront.classList.add("cardFront");

            let img = document.createElement("img");
            img.src = `${person.picture.medium}`;
            cardFront.append(img);

            let Name = document.createElement("div");
            Name.textContent = `${person.name.first} ${person.name.last}`;
            cardFront.append(Name);

            let cardBack = document.createElement("div");
            cardBack.classList.add("cardBack");


            cardInner.append(cardFront, cardBack);
        }
    })
}

