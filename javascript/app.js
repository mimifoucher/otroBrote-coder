const buttonRetailer = $(".button-container__retailer");
const buttonWholesaler = $(".button-container__wholesaler");
const typeName = $(".enlaces-price__type");
const value = $("#value");


buttonWholesaler.click(() => {
    for(let type of typeName) {
        type.textContent = "/Mayorista";
    }
    value1.textContent = "$250";
    value2.textContent = "$250";
    value3.textContent = "$250";
    buttonWholesaler.remove("button-unchoosed");
    buttonWholesaler.add("button-choosed");
    buttonRetailer.remove("button-choosed");
    buttonRetailer.add("button-unchoosed");

    localStorage.setItem('buyClass','Mayorista');
});

buttonRetailer.click(() => {
    for(let type of typeName) {
        type.textContent = "/Minorista";
    }
    value1.textContent = "$300";
    value2.textContent = "$300";
    value3.textContent = "$300";
    buttonRetailer.remove("button-unchoosed");
    buttonRetailer.add("button-choosed");
    buttonWholesaler.remove("button-choosed");
    buttonWholesaler.add("button-unchoosed");

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
        buttonRetailer.remove("button-unchoosed");
        buttonRetailer.add("button-choosed");
        buttonWholesaler.remove("button-choosed");
        buttonWholesaler.add("button-unchoosed");
    }else{
        for(let type of typeName) {
            type.textContent = "/Mayorista";
        }
        value1.textContent = "$250";
        value2.textContent = "$250";
        value3.textContent = "$250";
        buttonWholesaler.remove("button-unchoosed");
        buttonWholesaler.add("button-choosed");
        buttonRetailer.remove("button-choosed");
        buttonRetailer.add("button-unchoosed");
    }
  
})