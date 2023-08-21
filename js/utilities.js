
function getValue(elementId) {
    const element = document.getElementById(elementId);
    const value = parseFloat(element.innerText);
    return value;
  }

  
function  discountOffer(totalPrice) {
    let offerAmount = "0.00";
    const discountElement = document.getElementById("discount-amount");
    discountElement.innerText = offerAmount;
    const applyButton = document.getElementById("discount-btn");
    if (totalPrice > 199) {
      applyButton.removeAttribute("disabled");
    } else {
      applyButton.setAttribute("disabled", true);
    }
  }

  function getTotalAmount(productPriceId, previousAmountId) {
    const price = getValue(productPriceId);
    const previousAmountPrice = getValue(previousAmountId);
    const totalPrice = previousAmountPrice + price;
    getPurchaseButton(totalPrice)
    const totalPricEleemnt = document.getElementById(previousAmountId);
    totalPricEleemnt.innerText = totalPrice;
    return totalPrice;
  }
  

  function getPurchaseButton(totalPrice){
    const clickedButton = document.getElementById('clicked-btn');
      if(totalPrice > 0){
        clickedButton.removeAttribute('disabled');
      } else{
        clickedButton.setAttribute('disabled',true);
      }
  }