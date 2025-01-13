// обработчик по клику
document.getElementById("main-action-button").onclick = function(){
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

// получаем все 3 ссылки на уровне вложенности 1
const links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(){
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

const buttons = document.querySelectorAll(".products-item .button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(){
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

const prices = document.getElementsByClassName("products-item-pricing");
document.getElementById("change-currency").onclick = function(e){
    const currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let koeff = 1;
    if (currentCurrency === "$") {
        newCurrency = "₽";
        koeff = 103;
    }
    else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        koeff = 0.3;
    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        koeff = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        koeff = 6.9;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-item-price")*koeff).toFixed(1) + " " +newCurrency;
    }
}

const product=document.getElementById("product");
const name=document.getElementById("name");
const phone=document.getElementById("phone");

document.getElementById("order-action").onclick = function(){
    let hasError = false;

    [product, name, phone].forEach((item) => {
        if(!item.value){
            item.style.borderColor = "red";
            hasError = true;
        }
        else {
            item.style.borderColor = "";
        }
    });

    if(!hasError){
        [product, name, phone].forEach((item) => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы с Вами скоро свяжемся.")
    }
}







