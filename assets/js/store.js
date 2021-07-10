if (document.readyState == 'loading') { // document ready
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    //loop through remove buttons
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem) // remove function
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged) // quantity input
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    // button purchade event listener
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

// purchase button
function purchaseClicked() {
    alert('Thank you for your purchasing' + 'this')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

// remove from cart button
function removeCartItem(event) {
    var buttonClicked = event.target // target button clicked
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    // if not a number OR less than or equal to 0 quantity will still be 1
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    // get item product values
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc) // additemtocart function
    updateCartTotal() // also update function
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div') // create div
    cartRow.classList.add('cart-row') // add class
    var cartItems = document.getElementsByClassName('cart-items')[0] 
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }

    // Cart row contents variable

    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Remove Product</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow) // append row
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem) // add remove function to row
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged) // add quantity function to row
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    var bookcounter1 = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('£', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity) // e.g 0 + 16

        if(quantity == 1){
            bookcounter1 = bookcounter1 + 1
            
        }
    }

    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '£' + total + '.00'

    if(bookcounter1 == 1){
        var totalValue = total
        document.getElementById("discountprice").innerHTML = totalValue.toFixed(2);
    }
    else if(bookcounter1 == 2){
        var numVal1 = total
        var numVal2 = 5 / 100; // 5%
        var totalValue = numVal1 - (numVal1 * numVal2)
        document.getElementById("discountprice").innerHTML = totalValue.toFixed(2);
    }
    else if(bookcounter1 == 3){
        var numVal1 = total
        var numVal2 = 10 / 100; // 5%
        var totalValue = numVal1 - (numVal1 * numVal2)
        document.getElementById("discountprice").innerHTML = totalValue.toFixed(2);
    }
    else if(bookcounter1 == 4){
        var numVal1 = total
        var numVal2 = 20 / 100; // 5%
        var totalValue = numVal1 - (numVal1 * numVal2)
        document.getElementById("discountprice").innerHTML = totalValue.toFixed(2);
    }
    else if(bookcounter1 == 5){
        var numVal1 = total
        var numVal2 = 25 / 100; // 5%
        var totalValue = numVal1 - (numVal1 * numVal2)
        document.getElementById("discountprice").innerHTML = totalValue.toFixed(2);
    }
}
