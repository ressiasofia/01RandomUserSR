"use strict";

//CONST
const Icons = [
    {
        text: "Hi, my name is ",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>'
    },
    {
        text: "My email is ",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>'
    },
    {
        text: "My birthday date is ",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-80q-17 0-28.5-11.5T120-120v-200q0-33 23.5-56.5T200-400v-160q0-33 23.5-56.5T280-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T760-560v160q33 0 56.5 23.5T840-320v200q0 17-11.5 28.5T800-80H160Zm120-320h400v-160H280v160Zm-80 240h560v-160H200v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H200h560Z"/></svg>'
    },
    {
        text: "My address is ",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>'
    },
    {
        text: "My cell number is ",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>'
    },
    {
        text: "My password is ",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-640h360v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85h-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640Zm0 480h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-160v-400 400Z"/></svg>'
    },
]

//pointers
const main = document.getElementById("main");
const customeBody = document.getElementById("customeBody");
const cardBody = document.getElementById("cardbody");

const slider = document.getElementById("slider");
const lblSlider = document.getElementsByTagName("label")[0];
const divDetails = document.getElementsByClassName("divDetail");
const imgDetails = document.getElementsByClassName("imgDetails")[0];
const cmdGender = document.getElementById("cmdGender");
const divNat = document.querySelectorAll("div[nat]");
const btnSave = document.getElementById("btnSave");
const btnStars = document.getElementById("btnStars");
const btnGenerate = document.getElementById("btnGenerate");
const btnAllUser = document.getElementById("allUsers");
const txtSearch = document.getElementById("txtSearch");
const footer = document.getElementById("footer");
const btnCustomize = document.getElementById("btnCustomize");

//variable
let params = {
    results: "6",
    nat: "",
    gender: ""
}

let nUsers = params.results;
let flip = false;
let Name = "";

lblSlider.innerHTML = `Users to view: ${nUsers}`;

//functions
slider.addEventListener("change", function () {
    nUsers = parseInt(slider.value);
    lblSlider.innerHTML = `Users to view: ${nUsers}`;

    params.results = nUsers;
})

cmdGender.addEventListener("change", function () {
    params.gender = cmdGender.value;
})

btnCustomize.addEventListener("click",function(){
    if(main.style.width <= "992px"){
        footer.style.position = ""
    }
})

for (let div of divNat) {
    div.dataset.clicked = false;
    div.addEventListener("click", function () {
        let nat = this.getAttribute("nat");

        if (div.dataset.clicked == "false") {
            this.style.backgroundColor = "green";
            params.nat += nat + ","
            div.dataset.clicked = true;
        }
        else {
            div.dataset.clicked = false;
            this.style.backgroundColor = "";

            params.nat = params.nat.split(",").filter(function (nation) {
                return nation != `${nat}`
            }).toString();
        }
    })
}

btnSave.addEventListener("click", function () {
    loadCard(params, Name);
})

btnStars.addEventListener("click", function () {
    let peoplefav = JSON.parse(localStorage.getItem("stars"));

    if(main.style.width <= "992px"){
        footer.style.position = "fixed"
        footer.style.bottom = "0px";
    }

    loadFav(peoplefav);
})
btnGenerate.addEventListener("click", function () {
    if(main.style.width <= "992px"){
        footer.style.position = ""
    }

    params = {
        results: "6",
        nat: "",
        gender: ""
    }

    loadCard(params, Name);
})

btnAllUser.addEventListener("click", function () {
    customeBody.style.display = "none";
    cardBody.style.display = "none";

    params = {
        results: "500"
    }
    loadUserPhoto(params);
})

txtSearch.addEventListener("change", function () {
    Name = this.value;

    params = {
        results: "5000"
    }

    loadCard(params, Name);
    this.value = "";
    Name = "";
})

loadCard(params, Name);

function loadUserPhoto(params) {

    main.classList.remove("d-lg-flex","d-block");
    main.style.overflow = "auto";
    main.style.display = "grid";
    if(main.style.width <= "992px")
    {
        main.style.gridTemplateColumns = "1fr 1fr 1fr";
    }
    else
    {
        main.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    }
    
    main.style.justifyItems = "center";

    let promise = ajax.sendRequest("GET", "./api", params);

    promise.catch(ajax.errore);
    promise.then(function (httpResponse) {
        let people = httpResponse.data.results;

        main.innerHTML = "";
        let index = 0;

        for (let person of people) {

            let photo = document.createElement("div");
            photo.dataset.person = index;
            index++;
            photo.setAttribute("data-bs-target", "#modalDetails");
            photo.setAttribute("data-bs-toggle", "modal");
            photo.classList.add("photoDiv");

            photo.addEventListener("click", function () {
                showDetails(people[this.dataset.person]);
            })
            main.append(photo);

            let img = document.createElement("img");
            img.src = `${person.picture.medium}`;
            photo.append(img);
        }
    })
}

function loadFav(people) {
    cardBody.innerHTML = "";
    let index = 0;

    for (let person of people) {
        let card = document.createElement("div");
        card.classList.add("card");
        cardBody.append(card);

        let cardInner = document.createElement("div");
        cardInner.classList.add("cardInner");
        cardInner.addEventListener("click", function () {
            if (!flip)
                $(this).toggleClass("flipped");

            flip = false;
        })
        card.append(cardInner);

        //*******************CARD FRONT***************************** */
        let cardFront = document.createElement("div");
        cardFront.classList.add("cardFront");

        let star = document.createElement("div");
        star.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        star.dataset.clicked = true;
        star.classList.add("star");

        star.addEventListener("click", function () {
            starred(this, person);
            flip = true;
        })
        cardFront.append(star);

        let img = document.createElement("img");
        img.src = `${person.picture.medium}`;
        cardFront.append(img);

        let Name = document.createElement("div");
        Name.textContent = `${person.name.first} ${person.name.last}`;
        cardFront.append(Name);

        //****************CARD BACK****************************
        let cardBack = document.createElement("div");

        let info = document.createElement("button");
        info.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
        info.classList.add("star");
        info.classList.add("btn");
        info.dataset.person = index;
        index++;
        info.setAttribute("data-bs-target", "#modalDetails");
        info.setAttribute("data-bs-toggle", "modal");
        info.addEventListener("click", function () {
            flip = true;
            showDetails(people[this.dataset.person]);
        })

        let text = document.createElement("div");
        let navbar = document.createElement("div");

        let textMini = document.createElement("div");
        let label = document.createElement("div");
        textMini.textContent = "Hi, my name is ";
        label.textContent = `${person.name.first} ${person.name.last}`;

        text.append(textMini, label);

        text.classList.add("cardText");
        navbar.classList.add("cardNav");

        loadUserNav(navbar, person);

        cardBack.append(text, navbar, info);
        cardBack.classList.add("cardBack");

        cardInner.append(cardFront, cardBack);
    }
}

function loadCard(params, Name) {
    console.log(Name.toUpperCase());
    let promise = ajax.sendRequest("GET", "./api", params);

    promise.catch(ajax.errore);
    promise.then(function (httpResponse) {
        let people = httpResponse.data.results;
        //console.log(people)

        cardBody.innerHTML = "";
        let index = -1;
        for (let person of people) {

            index++;

            if (Name.toUpperCase() == person.name.first.toUpperCase() || Name == "") {
                let card = document.createElement("div");
                card.classList.add("card");
                cardBody.append(card);

                let cardInner = document.createElement("div");
                cardInner.classList.add("cardInner");
                cardInner.addEventListener("click", function () {
                    if (!flip)
                        $(this).toggleClass("flipped");

                    flip = false;
                })
                card.append(cardInner);

                //*******************CARD FRONT***************************** */
                let cardFront = document.createElement("div");
                cardFront.classList.add("cardFront");

                let star = document.createElement("div");
                star.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
                star.dataset.clicked = false;
                star.classList.add("star");

                star.addEventListener("click", function () {
                    starred(this, person);
                    flip = true;
                })
                cardFront.append(star);

                let img = document.createElement("img");
                img.src = `${person.picture.medium}`;
                cardFront.append(img);

                let Name = document.createElement("div");
                Name.textContent = `${person.name.first} ${person.name.last}`;
                cardFront.append(Name);

                //****************CARD BACK****************************
                let cardBack = document.createElement("div");

                let info = document.createElement("button");
                info.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
                info.classList.add("star");
                info.classList.add("btn");
                info.dataset.person = index;
                
                info.setAttribute("data-bs-target", "#modalDetails");
                info.setAttribute("data-bs-toggle", "modal");
                info.addEventListener("click", function () {
                    flip = true;
                    showDetails(people[this.dataset.person]);
                })

                let text = document.createElement("div");
                let navbar = document.createElement("div");

                let textMini = document.createElement("div");
                let label = document.createElement("div");
                textMini.textContent = "Hi, my name is ";
                label.textContent = `${person.name.first} ${person.name.last}`;

                text.append(textMini, label);

                text.classList.add("cardText");
                navbar.classList.add("cardNav");

                loadUserNav(navbar, person);

                cardBack.append(text, navbar, info);
                cardBack.classList.add("cardBack");

                cardInner.append(cardFront, cardBack);
            }
        }
    })
}

function loadUserNav(nav, person) {
    let info = [
        `${person.name.first} ${person.name.last}`,
        `${person.email}`,
        `${person.dob.date.split("T")[0]}`,
        `${person.location.street.name} ${person.location.street.number}`,
        `${person.cell}`,
        `${person.login.password}`
    ]

    let i = 0;
    for (let icon of Icons) {
        let navElement = document.createElement("div");

        navElement.dataset.text = icon.text;
        navElement.dataset.value = info[i];
        navElement.innerHTML = icon.icon;

        navElement.addEventListener("click", function () {
            flip = true;
            this.parentElement.parentElement.firstElementChild.firstElementChild.textContent = this.dataset.text;
            this.parentElement.parentElement.firstElementChild.lastElementChild.textContent = this.dataset.value;
        })
        nav.append(navElement);

        i++;
    }
}

function starred(star, person) {
    if (star.dataset.clicked == "false") {
        star.dataset.clicked = true;
        star.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        saveLS("stars", person);
    }
    else {
        star.dataset.clicked = false;
        star.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        deleteInLS("stars", person);
    }
}

function showDetails(person) {
    imgDetails.src = `${person.picture.large}`;
    divDetails[0].textContent = `${person.name.first} ${person.name.last}`;
    divDetails[1].textContent = `${person.gender}`;
    divDetails[2].textContent = `${person.dob.age}y`;
    divDetails[3].textContent = `${person.location.city}`;
    divDetails[4].textContent = `${person.location.country} (${person.nat})`;
    divDetails[5].textContent = `${person.login.username}`;
}

function saveLS(key, person) {
    let json = JSON.parse(localStorage.getItem(key));

    if (!json) {
        json = [];
    }

    json.push(person);
    localStorage.setItem(key, JSON.stringify(json));
}

function deleteInLS(key, person) {
    let json = JSON.parse(localStorage.getItem(key));

    json = json.filter(function (element) {
        return element.name.first != person.name.first;
    });

    localStorage.setItem(key, JSON.stringify(json));
}