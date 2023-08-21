// first- Card
document.getElementById('first-card').addEventListener('click', function () {
    const totalAmount = getTotalAmount('first-product-price', 'total-price');
    discountOffer(totalAmount)
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.innerText = totalAmount;

    const cardNameElement = document.getElementById('card-name')
    const cardName = cardNameElement.innerText;

    addToHtmlTag(cardName);
});
// second- Card
document.getElementById('second-card').addEventListener('click', function () {
    const totalAmount = getTotalAmount('second-product-price', 'total-price');
    discountOffer(totalAmount)
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.innerText = totalAmount;

    
    const cardNameElement = document.getElementById('card-name-2')
    const cardName = cardNameElement.innerText;

    addToHtmlTag(cardName);
});
// third- Card
document.getElementById('third-card').addEventListener('click', function () {
    const totalAmount = getTotalAmount('third-product-price', 'total-price');
    discountOffer(totalAmount)
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.innerText = totalAmount;

    const cardNameElement = document.getElementById('card-name-3')
    const cardName = cardNameElement.innerText;

    addToHtmlTag(cardName);
});
// fourth- Card
document.getElementById('fourth-card').addEventListener('click', function () {
    const totalAmount = getTotalAmount('fourth-product-price', 'total-price');
    discountOffer(totalAmount)
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.innerText = totalAmount;

    const cardNameElement = document.getElementById('card-name-4')
    const cardName = cardNameElement.innerText;

    addToHtmlTag(cardName);
});
// fifth- Card
document.getElementById('fifth-card').addEventListener('click', function () {
    const totalAmount = getTotalAmount('fifth-product-price', 'total-price');
    discountOffer(totalAmount)
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.innerText = totalAmount;

    const cardNameElement = document.getElementById('card-name-5')
    const cardName = cardNameElement.innerText;

    addToHtmlTag(cardName);
});
// six- Card
document.getElementById('six-card').addEventListener('click', function () {
    const totalAmount = getTotalAmount('six-product-price', 'total-price');
    discountOffer(totalAmount)
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.innerText = totalAmount;

    const cardNameElement = document.getElementById('card-name-6')
    const cardName = cardNameElement.innerText;

    addToHtmlTag(cardName);
});



document.getElementById("discount-btn").addEventListener("click", function () {
    const voucherField = document.getElementById("inputField");
    const voucher = voucherField.value;
    const previousTotalPrice = getValue("total-price");

    let offerAmount = "0.00";
    let totalPrice = "";
    if (voucher === "SELL200") {
        offerAmount = (previousTotalPrice * 20) / 100;
    } else {
        alert("Please enter the coupon");
    }

    const discountElement = document.getElementById("discount-amount");
    discountElement.innerText = offerAmount;
    const offer = parseFloat(discountElement.innerText);
    totalAmount = previousTotalPrice - offer;

    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.innerText = totalAmount;
})

function addToHtmlTag(cardName){
    const createElement = document.getElementById('create-element')
    const count = createElement.childElementCount;

    const p = document.createElement('p');
    p.innerText = `${count + 1}.  ${cardName}`;
    createElement.appendChild(p);

}






































    // document.getElementById('first-card').addEventListener('click', function () {
    //     const productPrice = document.getElementById('first-product-price');
    //     const productPriceString = productPrice.innerText;
    //     const addProductPrice = parseFloat(productPriceString);

    //     const firstCardPrice = document.getElementById('total-price');
    //     const firstCardPriceString = firstCardPrice.innerText;
    //     const firstCardTotal = parseFloat(firstCardPriceString);

    //     const firstCardTotalPrice = firstCardTotal + addProductPrice;

    //     firstCardPrice.innerText = firstCardTotalPrice;

    //     const totalAmount = document.getElementById('total-amount');
    //     const totalAmountString = totalAmount.innerText;
    //     const total = parseFloat(totalAmountString);
    //     const totalPrice = total + addProductPrice;

    //     totalAmount.innerText = totalPrice;
    // })

    // document.getElementById('second-card').addEventListener('click', function () {
    //     const productPrice = document.getElementById('second-product-price');
    //     const productPriceString = productPrice.innerText;
    //     const addProductPrice = parseFloat(productPriceString);

    //     const firstCardPrice = document.getElementById('total-price');
    //     const firstCardPriceString = firstCardPrice.innerText;
    //     const firstCardTotal = parseFloat(firstCardPriceString);

    //     const firstCardTotalPrice = firstCardTotal + addProductPrice;

    //     firstCardPrice.innerText = firstCardTotalPrice;

    //     const totalAmount = document.getElementById('total-amount');
    //     const totalAmountString = totalAmount.innerText;
    //     const currenTotal = parseFloat(totalAmountString);
    //     const totalPrice = currenTotal + addProductPrice;


    // let total = '';
    // let discount = '';

    // if (totalPrice >= 200) {
    //     discount = (totalPrice * 20) / 100;
    // } else {
    //     discount = 0.00;
    // }

    // const discountTk = document.getElementById('discount-amount')
    // discountTk.innerText = discount;
    // const discountAmount = parseFloat(discountTk.innerText);

    // if (discountAmount > 0) {
    //     total = totalPrice - discountAmount;
    // } else {
    //     total = totalPrice;
    // }



// document.getElementById('first-card').addEventListener('click', function () {

//     const cardTittel = document.getElementById('card-tittle');
//     const createElement = document.getElementById('create-element')
//     const p = document.createElement('p');
//     p.innerText = cardTittel;
//     createElement.appendChild(p);
// })