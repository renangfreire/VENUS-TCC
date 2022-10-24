const productTotalValue = document.querySelectorAll('.productTotalValue')

const subTotalDisplay = document.querySelector('.subTotal')
const totalDisplay = document.querySelector('.totalDisplayed')
const freteDisplay = document.querySelector('.freteDisplayed').innerHTML

let sub = 0;

productTotalValue.forEach(el => sub += Number(el.innerHTML.replace(',', '.')))

subTotalDisplay.innerHTML = String(sub.toFixed(2)).replace('.', ',')

totalDisplay.innerHTML = String((Number(freteDisplay.replace(',', '.')) + sub).toFixed(2)).replace('.', ',')