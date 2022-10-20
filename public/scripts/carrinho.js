// DOM VARIABLES

const productAmount = document.querySelectorAll('.inputAmount')

const btnAddition = document.querySelectorAll('.amountAddition')

const btnSub = document.querySelectorAll('.amountSubtraction')

const qtdValue = document.querySelectorAll('.inputValue')

const buttonFrete = document.querySelector('.button-search')
const freteItem = document.querySelector('.frete-item')
const inputFrete = document.querySelector('#cepUser')
const freight = document.querySelector('#freight')

const loadingDiv = document.querySelector('.loading')

const subTotal = document.querySelector('#sub')

const btnTrash = document.querySelectorAll(".removeItem")

const spanTotalValue = document.querySelector('.totalValue')

// JS VARIABLES
const originalProductValues = []

// Para manter valor original dos produtos
qtdValue.forEach(value => {
  originalProductValues.push(Number(value.innerHTML))
})

let totalValue = 0
let freteValue = 0

const newProductValues = [...originalProductValues]

attValues(originalProductValues)
attSubTotalValue(originalProductValues)

function addQuantity(index) {
  productAmount[index].value = String(Number(productAmount[index].value) + 1)
  const displayValue = (newProductValues[index] + originalProductValues[index]).toFixed(2)

  qtdValue[index].innerHTML = String(displayValue).replace('.', ',')
  
  newProductValues[index] += originalProductValues[index]

  attSubTotalValue()
}

function removeQuantity(index){
  
  if(productAmount[index].value > 1){
    productAmount[index].value = String(Number(productAmount[index].value) - 1)
    displayValue = (newProductValues[index] - originalProductValues[index]).toFixed(2)

    qtdValue[index].innerHTML = String(displayValue).replace('.', ',')
    newProductValues[index] -= originalProductValues[index]

    attSubTotalValue()
  }
}

function attSubTotalValue() {
  let sum = 0

  newProductValues.forEach(element => (sum += element))
  const displayValue = sum.toFixed(2)

  subTotal.innerHTML = String(displayValue).replace('.', ',')

  attTotalValue(sum)
}

function attTotalValue() {
  let sum = 0

  newProductValues.forEach(element => (sum += element))
  const displayValue = (sum + freteValue).toFixed(2)

  spanTotalValue.innerHTML = String(displayValue).replace('.', ',')

  totalValue = displayValue
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

function hasLoadingReady(){
  loadingDiv.classList.toggle('add');
}

function addFrete(){
  const displayValue = String(freteValue.toFixed(2)).replace('.', ',')
  freight.innerHTML = `${displayValue}`

  attTotalValue()
}

async function calcFrete(){
  const cepUser = document.querySelector("#cepUser").value
  hasLoadingReady()

  const response = await fetch(`/calcFrete/${cepUser}`).then((response) => {
    hasLoadingReady()
    return response
  })

  const data = await response.json()
  
  if(data.message){
    alert(data.message)
    return
  }

  freteValue = Number((data.valor).replace(',', '.'))


  freteItem.innerHTML = 
  `
  <input
  type="radio"
  name="Pagamento"
  value="12.00"
  id="radioFrete"
  />
  <div class="freteDate">
  <p><span class="bold">SEDEX</span> | até 
  <span>${data.prazo} dia/s</span>
   -                 
  <span>R$ ${data.valor}</span>
  </p>
  </div>  
  `

  const radioFrete = document.querySelector('#radioFrete')
  radioFrete.addEventListener('click', addFrete)
}


buttonFrete.addEventListener('click', calcFrete)

btnAddition.forEach((btn, index) => {
  btn.addEventListener('click', addQuantity.bind(btn, index))
})

btnSub.forEach((btn, index) => {
  btn.addEventListener('click', removeQuantity.bind(btn, index))
})

btnTrash.forEach((btn, index) => {
  btn.addEventListener('click', removeProduct.bind(btn, index))
})