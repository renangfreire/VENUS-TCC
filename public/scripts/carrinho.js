// DOM VARIABLES

const productAmount = document.querySelectorAll('.inputAmount')

const btnAddition = document.querySelectorAll('.amountAddition')

const btnSub = document.querySelectorAll('.amountSubtraction')

const qtdValue = document.querySelectorAll('.inputValue')

const buttonFrete = document.querySelector('.button-search')
const freteBox = document.querySelector('.freteBox')


const displayFrete = document.querySelector('#freight')

const subTotal = document.querySelector('#sub')

const btnTrash = document.querySelectorAll(".removeItem")

const totalValue = document.querySelector('.totalValue')

// JS VARIABLES
const originalProductValues = []

// Para manter valor original dos produtos
qtdValue.forEach((value) => {originalProductValues.push(Number(value.innerHTML))})

const newProductValues = [...originalProductValues]



attSubTotalValue(originalProductValues)

function addQuantity(index){
        productAmount[index].value = Number(productAmount[index].value) + 1

        qtdValue[index].innerHTML = (newProductValues[index] + originalProductValues[index]).toFixed(2)
        newProductValues[index] += originalProductValues[index]
      
        attSubTotalValue(newProductValues)
}

function removeQuantity(index){
  
  if(productAmount[index].value > 1){
    productAmount[index].value = Number(productAmount[index].value) - 1
    qtdValue[index].innerHTML = (newProductValues[index] - originalProductValues[index]).toFixed(2) 
    newProductValues[index] -= originalProductValues[index]

    attSubTotalValue(newProductValues)
  } 
}

function attSubTotalValue(newValue){
  let sum = 0;

  newValue.forEach((element) => sum += element)
  
  subTotal.innerHTML = sum.toFixed(2)

  attTotalValue(sum)
}

function attTotalValue(sum){
  totalValue.innerHTML = sum.toFixed(2)
}

async function removeProduct(index){
  const fetchData = {
    headers:{
        'Accept': 'application/json',
         'Content-Type': 'application/json'
        // "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "post",
    body: JSON.stringify({
        index
    })
}

await fetch('/removeProduct', fetchData).then((response) => {
  window.location.href = response.url
})
  
}

btnAddition.forEach((btn, index) => {
  btn.addEventListener('click', addQuantity.bind(btn, index))
})

btnSub.forEach((btn, index) => {
  btn.addEventListener('click', removeQuantity.bind(btn, index))
})

btnTrash.forEach((btn, index) => {
  btn.addEventListener('click', removeProduct.bind(btn, index))
})

async function calcFrete(){
  const response = await fetch('/calcFrete')

  const data = await response.json()

  freteBox.innerHTML = 
  `
  <input
  type="radio"
  name="Pagamento"
  value="12.00"
  id="input-1"
  />
  <div class="freteDate">
  <p>SEDEX | até 
  <span>${data.prazo} dia/s</span>
   -                 
  <span>R$ ${data.valor}</span>
  </p>
  </div>  
  `
}




buttonFrete.addEventListener('click', calcFrete)

