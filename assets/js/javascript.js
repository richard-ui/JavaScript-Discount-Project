
var bookcounter = 0
var quantity
var pricetotal = 0
var price = 8
var bookPrices = 0;

function getDiscountPrice(){

    if(bookcounter == 1){
        document.getElementById("discountprice").innerHTML = bookPrices + ".00";
    }
    else if(bookcounter == 2){
        var numVal1 = bookPrices
        var numVal2 = 5 / 100; // 5%
        var totalValue = numVal1 - (numVal1 * numVal2)
        document.getElementById("discountprice").innerHTML = totalValue.toFixed(2);
    }
    else if(bookcounter == 3){
        var numVal1 = bookPrices
        var numVal2 = 10 / 100; // 10%
        var totalValue = numVal1 - (numVal1 * numVal2)
        document.getElementById("discountprice").innerHTML = totalValue.toFixed(2);
    }
    else if(bookcounter == 4){
        var numVal1 = bookPrices
        var numVal2 = 20 / 100; // 10%
        var totalValue = numVal1 - (numVal1 * numVal2)
        document.getElementById("discountprice").innerHTML = totalValue.toFixed(2);
    }
    else if(bookcounter == 5){
        var numVal1 = bookPrices
        var numVal2 = 25 / 100; // 10%
        var totalValue = numVal1 - (numVal1 * numVal2)
        document.getElementById("discountprice").innerHTML = totalValue.toFixed(2);
    }
}


const productOptions = document.querySelectorAll(".product-options");


productOptions.forEach((node) => {
const quantity = node.querySelector(".item-quantity");
const add = node.querySelector("button[action='add']");
const remove = node.querySelector("button[action='remove']");
 

// 0 by default
if (quantity.value == 0) {
    node.querySelector(".remove").setAttribute("disabled", "disabled")
}

add.addEventListener("click", () => {
    quantity.value = parseInt(quantity.value, 10) + 1;
    
    pricetotal = quantity.value * price; // quantity x price
    node.querySelector(".price-total").innerText = pricetotal // place in total textbox
    
    bookPrices = bookPrices + pricetotal
    document.getElementById("bookPrices").innerText = bookPrices

    bookcounter = bookcounter + 1

    if (quantity.value > 0) {
        node.querySelector(".remove").removeAttribute("disabled");
        node.querySelector(".remove").classList.remove("disabled")

        node.querySelector(".add").setAttribute("disabled", "disabled")
    }
});

remove.addEventListener("click", () => {
    quantity.value = parseInt(quantity.value, 10) - 1;

    if (quantity.value == 0) {
        node.querySelector(".remove").setAttribute("disabled", "disabled")

        node.querySelector(".add").removeAttribute("disabled");
        node.querySelector(".add").classList.remove("disabled");

        pricetotal = quantity.value * price; // 08.00
        bookPrices = bookPrices - price
        document.getElementById("bookPrices").innerText = bookPrices
        node.querySelector(".price-total").innerText = pricetotal // = 0.00
        bookcounter = bookcounter - 1
    }
    else{
        pricetotal = quantity.value * price;
        bookPrices = bookPrices - pricetotal
        document.getElementById("bookPrices").innerText = bookPrices

        bookcounter = bookcounter - 1

         // quantity x price
        node.querySelector(".price-total").innerText = pricetotal // place in total textbox
    }

    // bookPrices = bookPrices - pricetotal
    // document.getElementById("bookPrices").innerText = bookPrices

    // bookcounter = bookcounter - 1

    // pricetotal = quantity.value * price; // quantity x price
    // node.querySelector(".price-total").innerText = pricetotal // place in total textbox
    });
});


//
// function priceTotal(quantity, price) {
//     pricetotal = quantity * price; // quantity x price
//     document.getElementById("price").innerText = pricetotal // place in total textbox
// }