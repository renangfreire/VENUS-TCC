const productAmount = document.querySelectorAll('.inputAmount')

const btnAddition = document.querySelectorAll('.amountAddition')

const btnSub = document.querySelectorAll('.amountSubtraction')

const qtdValue = document.querySelectorAll('.inputValue')

const buttonFrete = document.querySelector('#input-freight')

const displayFrete = document.querySelector('#freight')

const subTotal = document.querySelector('#sub')

const totalValue = document.querySelector('.totalValue')

const originalProductValues = []

// Para manter valor original dos produtos
qtdValue.forEach(value => {
  originalProductValues.push(Number(value.innerHTML))
})

const newProductValues = [...originalProductValues]

attSubTotalValue(originalProductValues)

function addQuantity(index) {
  productAmount[index].value = Number(productAmount[index].value) + 1

  qtdValue[index].innerHTML = (
    newProductValues[index] + originalProductValues[index]
  ).toFixed(2)
  newProductValues[index] += originalProductValues[index]

  attSubTotalValue(newProductValues)
}

function removeQuantity(index) {
  console.log(newProductValues)

  if (productAmount[index].value > 1) {
    productAmount[index].value = Number(productAmount[index].value) - 1
    qtdValue[index].innerHTML = (
      newProductValues[index] - originalProductValues[index]
    ).toFixed(2)
    newProductValues[index] -= originalProductValues[index]

    attSubTotalValue(newProductValues)
  }
}

function attSubTotalValue(newValue) {
  let sum = 0

  newValue.forEach(element => (sum += element))

  subTotal.innerHTML = sum.toFixed(2)

  attTotalValue(sum)
}

function attTotalValue(sum) {
  totalValue.innerHTML = sum.toFixed(2)
}

btnAddition.forEach((btn, index) => {
  btn.addEventListener('click', addQuantity.bind(btn, index))
})

btnSub.forEach((btn, index) => {
  btn.addEventListener('click', removeQuantity.bind(btn, index))
})

function sus() {
  btnAddition.addEventListener('click', function () {
    // if (amount.value < 30) {
    //   amount.value++
    //   sub.value = `${parseFloat(qtdValue.value) + parseFloat(150)}.00`
    //   qtdValue.value = `${parseFloat(qtdValue.value) + parseFloat(150)}.00`
    //   C.innerHTML = `R$ ${qtdValue.value}`
    //   F.innerHTML = `R$ ${
    //     parseFloat(qtdValue.value) + parseFloat(freight.value)
    //   }`
    // }
  })

  btnSub.addEventListener('click', function () {
    if (amount.value > 1) {
      amount.value--
      sub.value = `${parseFloat(qtdValue.value) - parseFloat(150)}.00`
      qtdValue.value = `${parseFloat(qtdValue.value) - parseFloat(150)}.00`
      C.innerHTML = `R$ ${qtdValue.value}`
      F.innerHTML = `R$ ${
        parseFloat(qtdValue.value) - parseFloat(freight.value)
      }`
    }
  })
  buttonFrete.addEventListener('click', () => {
    frete.value = buttonFrete.value
    S.innerHTML = `R$ ${buttonFrete.value}`
    F.innerHTML = `R$ ${
      parseFloat(qtdValue.value) + parseFloat(buttonFrete.value)
    }`
  })
}
sus()
