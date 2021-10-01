const buttonRetailer = document.querySelector(".button-container__retailer");
const buttonWholesaler = document.querySelector(".button-container__wholesaler");
const typeName = document.querySelectorAll(".enlaces-price__type");
const value = document.querySelector("#value");


buttonWholesaler.addEventListener("click", () => {
    for(let type of typeName) {
        type.textContent = "/Mayorista";
    }
    value1.textContent = "$250";
    value2.textContent = "$250";
    value3.textContent = "$250";
    buttonWholesaler.classList.remove("button-unchoosed");
    buttonWholesaler.classList.add("button-choosed");
    buttonRetailer.classList.remove("button-choosed");
    buttonRetailer.classList.add("button-unchoosed");

    localStorage.setItem('buyClass','Mayorista');
});

buttonRetailer.addEventListener("click", () => {
    for(let type of typeName) {
        type.textContent = "/Minorista";
    }
    value1.textContent = "$300";
    value2.textContent = "$300";
    value3.textContent = "$300";
    buttonRetailer.classList.remove("button-unchoosed");
    buttonRetailer.classList.add("button-choosed");
    buttonWholesaler.classList.remove("button-choosed");
    buttonWholesaler.classList.add("button-unchoosed");

    localStorage.setItem('buyClass','Minorista');
});

window.addEventListener('DOMContentLoaded',() => {
    if(localStorage.getItem('buyClass') === 'Minorista'){
        for(let type of typeName) {
            type.textContent = "/Minorista";
        }
        value1.textContent = "$300";
        value2.textContent = "$300";
        value3.textContent = "$300";
        buttonRetailer.classList.remove("button-unchoosed");
        buttonRetailer.classList.add("button-choosed");
        buttonWholesaler.classList.remove("button-choosed");
        buttonWholesaler.classList.add("button-unchoosed");
    }else{
        for(let type of typeName) {
            type.textContent = "/Mayorista";
        }
        value1.textContent = "$250";
        value2.textContent = "$250";
        value3.textContent = "$250";
        buttonWholesaler.classList.remove("button-unchoosed");
        buttonWholesaler.classList.add("button-choosed");
        buttonRetailer.classList.remove("button-choosed");
        buttonRetailer.classList.add("button-unchoosed");
    }
  
})