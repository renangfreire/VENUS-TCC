const amount = document.querySelector('#input')

const btnAddition = document.querySelector('#addition')

const qtdValue = document.querySelector('#input-value')

const btnSub = document.querySelector('#subtraction')

const C = document.querySelector('#span-1')

const S = document.querySelector('#span-2')

const F = document.querySelector('#span-3')

const buttonFrete = document.querySelector('#input-1')

const sub = document.querySelector('#sub')
const displayFrete = document.querySelector('#freight')

function sus() {
  btnAddition.addEventListener('click', function () {
    if (amount.value < 30) {
      amount.value++
      sub.value = `${parseFloat(qtdValue.value) + parseFloat(150)}.00`
      qtdValue.value = `${parseFloat(qtdValue.value) + parseFloat(150)}.00`
      C.innerHTML = `R$ ${qtdValue.value}`
      F.innerHTML = `R$ ${
        parseFloat(qtdValue.value) + parseFloat(freight.value)
      }`
    }
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
    F.innerHTML = `R$ ${parseFloat(qtdValue.value) + parseFloat(buttonFrete.value)}`
  })
}
sus()
