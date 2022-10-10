const navbar = document.querySelector('.navlist');
const detail = document.querySelector('.details');
const btns = document.querySelectorAll('.tabs');

function menubar() {
    navbar.classList.toggle("slidebar");
}
function hide() {
    navbar.classList.toggle("slidebar");
}

const details = [
    {
        inside: "Registeration",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "Registeration",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "Registeration",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "Registeration",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "dsc",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "dsc",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "dsc",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "dsc",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "income tax",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "income tax",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "income tax",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "income tax",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "services tax",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "services tax",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "services tax",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
    {
        inside: "services tax",
        src: "",
        title: "",
        price: "&#8377 499",
        disc: ""
    },
];



window.addEventListener('DOMContentLoaded', () => {
    let displayDetails = details.map(function (item) {
        if (item.inside == "Registeration") {
            return `<div class="detail" id="detail4">
        <img src=${item.src} alt="">
         <h2 class="title">${item.inside}</h2>
         <h1 class="price">${item.price}</h1>
         <p class="disc">${item.disc}</p>
        </div>`;
        }
    });
    displayDetails = displayDetails.join("");
    detail.innerHTML = displayDetails;
});
function registeration(){
    let displayDetails = details.map(function (item) {
        if (item.inside == "Registeration") {
            return `<div class="detail" id="detail4">
        <img src=${item.src} alt="">
         <h2 class="title">${item.inside}</h2>
         <h1 class="price">${item.price}</h1>
         <p class="disc">${item.disc}</p>
        </div>`;
        }
    });
    displayDetails = displayDetails.join("");
    detail.innerHTML = displayDetails;
}
function dsc(){
    let displayDetails = details.map(function (item) {
        if (item.inside == "dsc") {
            return `<div class="detail" id="detail4">
        <img src=${item.src} alt="">
         <h2 class="title">${item.inside}</h2>
         <h1 class="price">${item.price}</h1>
         <p class="disc">${item.disc}</p>
        </div>`;
        }
    });
    displayDetails = displayDetails.join("");
    detail.innerHTML = displayDetails;
}
function incometax(){
    let displayDetails = details.map(function (item) {
        if (item.inside == "income tax") {
            return `<div class="detail" id="detail4">
        <img src=${item.src} alt="">
         <h2 class="title">${item.inside}</h2>
         <h1 class="price">${item.price}</h1>
         <p class="disc">${item.disc}</p>
        </div>`;
        }
    });
    displayDetails = displayDetails.join("");
    detail.innerHTML = displayDetails;
}
function servicetax(){
    let displayDetails = details.map(function (item) {
        if (item.inside == "services tax") {
            return `<div class="detail" id="detail4">
        <img src=${item.src} alt="">
         <h2 class="title">${item.inside}</h2>
         <h1 class="price">${item.price}</h1>
         <p class="disc">${item.disc}</p>
        </div>`;
        }
    });
    displayDetails = displayDetails.join("");
    detail.innerHTML = displayDetails;
}