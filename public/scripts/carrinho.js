const amount = document.querySelector('#input')

const btnAddition = document.querySelector('#addition')

const qtdValue = document.querySelector('#input-value')

const btnSub = document.querySelector('#subtraction')

const C = document.querySelector('#span-1')

const S = document.querySelector('#span-2')

const F = document.querySelector('#span-3')

const input1 = document.querySelector('#input-1')

const input2 = document.querySelector('#input-2')

const input3 = document.querySelector('#input-3')

const input4 = document.querySelector('#input-4')

const input5 = document.querySelector('#input-5')

const input6 = document.querySelector('#input-6')

const sub = document.querySelector('#sub')
const frete = document.querySelector('#freight')

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
  input1.addEventListener('click', () => {
    frete.value = input1.value
    S.innerHTML = `R$ ${input1.value}`
    F.innerHTML = `R$ ${parseFloat(qtdValue.value) + parseFloat(input1.value)}`
  })
  input2.addEventListener('click', () => {
    frete.value = input2.value
    S.innerHTML = `R$ ${input2.value}`
    F.innerHTML = `R$ ${parseFloat(qtdValue.value) + parseFloat(input2.value)}`
  })
  input3.addEventListener('click', () => {
    frete.value = input3.value
    S.innerHTML = `R$ ${input3.value}`
    F.innerHTML = `R$ ${parseFloat(qtdValue.value) + parseFloat(input3.value)}`
  })
  input4.addEventListener('click', () => {
    frete.value = input4.value
    S.innerHTML = `R$ ${input4.value}`
    F.innerHTML = `R$ ${parseFloat(qtdValue.value) + parseFloat(input4.value)}`
  })
  input5.addEventListener('click', () => {
    frete.value = input5.value
    S.innerHTML = `R$ ${input5.value}`
    F.innerHTML = `R$ ${parseFloat(qtdValue.value) + parseFloat(input5.value)}`
  })
  input6.addEventListener('click', () => {
    frete.value = input6.value
    S.innerHTML = `R$ ${input6.value}`
    F.innerHTML = `R$ ${parseFloat(qtdValue.value) + parseFloat(input6.value)}`
  })
}
sus()
