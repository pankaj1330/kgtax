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
        title: "GST <br> Registeration",
        price: "<sup>&#8377</sup>499",
        disc: "Get your GST Registration done easily through KG Tax. Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your registration done at the earliest"
    },
    {
        inside: "Registeration",
        title: "TRADEMARK <br> Registeration",
        price: "<sup>&#8377</sup>499",
        disc: "Get your Trademark Registration done easily through KG Tax. Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your registration done at the earliest."
    },
    {
        inside: "Registeration",
        title: "IMPORT EXPORT CODE <br> Registeration",
        price: "<sup>&#8377</sup>499",
        disc: "Get your Import Export Code Registration done easily through KG Tax. Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your registration done at the earliest."
    },
    {
        inside: "Registeration",
        title: "AD CODE <br> Registeration",
        price: "<sup>&#8377</sup>499",
        disc: "Get your AD Code Registration done easily through KG Tax. Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your registration done at the earliest."
    },
    {
        inside: "dsc",
        title: "DSC Class  3 Signing -  (No Hidden Charges)",
        price: "<sup>&#8377</sup>499",
        disc: "Feel free to call or whatsapp us and Our Expert will follow up and ensure you to get your DSC earliest"
    },
    {
        inside: "dsc",
        title: "DSC Class  3 Signing with Token (No Hidden Charges)",
        price: "<sup>&#8377</sup>699",
        disc: "Feel free to call or whatsapp us and Our Expert will follow up and ensure you to get your DSC earliest"
    },
    {
        inside: "dsc",
        title: "DSC Class  3 Combo (Sign+Encryption) with USB Token (No Hidden Charges)",
        price: "<sup>&#8377</sup>1299",
        disc: "Feel free to call or whatsapp us and Our Expert will follow up and ensure you to get your DSC earliest"
    },
    {
        inside: "dsc",
        title: "DSC for E-TENDER with USB Token (No Hidden Charges)",
        price: "<sup>&#8377</sup>1299",
        disc: "Feel free to call or whatsapp us and Our Expert will follow up and ensure you to get your DSC earliest"
    },
    {
        inside: "income tax",
        title: "Income Tax Return - Salaried / Pension Income",
        price: "<sup>&#8377</sup>499",
        disc: "Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your Income Tax return filed at the earliest"
    },
    {
        inside: "income tax",
        title: "Income Tax Return Business 44AD",
        price: "<sup>&#8377</sup>999",
        disc: "Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your Income Tax return filed at the earliest"
    },
    {
        inside: "income tax",
        title: "Income Tax Return Professionals  44ADA",
        price: "<sup>&#8377</sup>999",
        disc: "Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your Income Tax return filed at the earliest"
    },
    {
        inside: "income tax",
        title: "Income Tax Return   TRUSTS",
        price: "<sup>&#8377</sup>2999",
        disc: "Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your Income Tax return filed at the earliest"
    },
    {
        inside: "services tax",
        title: "GST registrations",
        price: "<sup>&#8377</sup>499",
        disc: "Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your Income Tax return filed at the earliest"
    },
    {
        inside: "services tax",
        title: "Gst Returns",
        price: "<sup>&#8377</sup>499",
        disc: "Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your Income Tax return filed at the earliest"
    },
    {
        inside: "services tax",
        title: "GST Annual Return GSTR-9",
        price: "<sup>&#8377</sup>2499",
        disc: "Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your Income Tax return filed at the earliest"
    },
    {
        inside: "services tax",
        title: "GSTR 10 Final Return",
        price: "<sup>&#8377</sup>1299",
        disc: "Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your Income Tax return filed at the earliest"
    },
];



window.addEventListener('DOMContentLoaded', () => {
    let displayDetails = details.map(function (item) {
        if (item.inside == "Registeration") {
            return `<div class="detail" id="detail4">
         <h2 class="title">${item.title}</h2>
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
         <h2 class="title">${item.title}</h2>
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
         <h2 class="title">${item.title}</h2>
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
         <h2 class="title">${item.title}</h2>
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
         <h2 class="title">${item.title}</h2>
         <h1 class="price">${item.price}</h1>
         <p class="disc">${item.disc}</p>
        </div>`;
        }
    });
    displayDetails = displayDetails.join("");
    detail.innerHTML = displayDetails;
}
