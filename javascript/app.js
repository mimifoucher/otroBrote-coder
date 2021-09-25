const buttonRetailer = document.querySelector(".button-container__retailer");
const buttonWholesaler = document.querySelector(".button-container__wholesaler");
const typeName = document.querySelectorAll(".enlaces-price__type");
const value = document.querySelector("#value");


console.log(value);

buttonWholesaler.addEventListener("click", () => {
    for(let type of typeName) {
        type.textContent = "/Mayorista";
    }
    value.textContent = "$250";
    buttonWholesaler.classList.remove("button-unchoosed");
    buttonWholesaler.classList.add("button-choosed");
    buttonRetailer.classList.remove("button-choosed");
    buttonRetailer.classList.add("button-unchoosed");
});

buttonRetailer.addEventListener("click", () => {
    for(let type of typeName) {
        type.textContent = "/Minorista";
    }
    value.textContent = "$300";
    buttonRetailer.classList.remove("button-unchoosed");
    buttonRetailer.classList.add("button-choosed");
    buttonWholesaler.classList.remove("button-choosed");
    buttonWholesaler.classList.add("button-unchoosed");
});

