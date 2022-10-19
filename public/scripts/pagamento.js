const mp = new MercadoPago('TEST-8386369f-066b-469b-8e28-e6d5181c347c');

const bricksBuilder = mp.bricks();

const modalPagamento = document.querySelector('.modalPagamento-overlay');
const closeModalButton = document.querySelector('.closeModalPagamento')
const loadingDiv = document.querySelector('.loading')
const searchCepButton = document.querySelector('.search-cep')
const registerNewAddress = document.querySelector('.register-new-address')

let cepData

const renderPaymentBrick = async (bricksBuilder) => {
  const settings = {
    initialization: {
      amount: 100, // valor total a ser pago
    },
    
    customization: {
      paymentMethods: {
        creditCard: 'all',
        debitCard: 'all',
        bankTransfer: ['pix'],
        ticket: 'all',
      },
    },
    callbacks: {
      onReady: () => {
        hasLoadingReady()
      },
      onSubmit: ({ selectedPaymentMethod, formData }) => {
        // callback chamado ao clicar no botão de submissão dos dados
          return new Promise((resolve, reject) => {
            
              fetch("/pagamento", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
              })
                .then(async (response) => {
                  
                  const data = await response.json();
  
                  renderStatusScreenBrick(bricksBuilder, data.id);
  
                  resolve();
                })
                .catch((error) => {
                  // lidar com a resposta de erro ao tentar criar o pagamento
                  reject();
                })  
          });
      },
      onError: (error) => {
        // callback chamado para todos os casos de erro do Brick
      },
    },
  };
  window.paymentBrickController = await bricksBuilder.create(
    'payment',
    'paymentBrick_container',
    settings
  );
 };
 renderPaymentBrick(bricksBuilder);

 const renderStatusScreenBrick = async (bricksBuilder, paymentId) => {
   const settings = {
     initialization: {
       paymentId, // id de pagamento gerado pelo Mercado Pago
      },
      callbacks: {
        onReady: () => {
          // callback chamado quando o Brick estiver pronto
        },
        onError: (error) => {
          // callback chamado para todos os casos de erro do Brick
        },
      },
    };
    window.statusBrickController = await bricksBuilder.create(
      'statusScreen',
      'statusScreenBrick_container',
      settings
      );
      toggleModalPagamento()
    };
    
  function toggleModalPagamento(){
  modalPagamento.classList.toggle('active')
  }

  function hasLoadingReady(){
    loadingDiv.classList.add('remove');
  }

  async function searchCep(){
    const cepUser = document.querySelector("#cepUser").value
    
    if(cepUser == ''){
      alert('Por favor insira um CEP')
      return 
    }

    const response = await fetch(`/searchCep/${cepUser}`)

    const data = await response.json()

    if(data.message){
      alert(data.message)
      return
    }

    cepData = data.address

    document.querySelector('.address-location').innerHTML = `${data.address.rua}, ${data.address.bairro}, ${data.address.cidade}-${data.address.estado}, Cep ${data.address.cep}`

    document.querySelector('.address-form').classList.add('active')
  }
  async function fetchAddress(){
    const { cep, rua, bairro, cidade, estado } = cepData
    const numeroAddress = document.querySelector('#numeroAddress').value
    const complementoAddress = document.querySelector('#complementoAddress').value
    const identificationAddress = document.querySelector('#identificationAddress').value
    const destinatarioAddress = document.querySelector('#destinatarioAddress').value

    const fetchData = {
      headers:{
        'Accept': 'application/json',
         'Content-Type': 'application/json'
        // "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "post",
    body: JSON.stringify({
      cep,
      rua,
      bairro,
      cidade,
      estado,
      numeroAddress,
      complementoAddress,
      identificationAddress,
      destinatarioAddress
    })     
  }

  await fetch('/new-address', fetchData).then(response => {
    window.location.href = response.url
  })
}

closeModalButton.addEventListener('click', toggleModalPagamento)

searchCepButton.addEventListener('click', searchCep)

registerNewAddress.addEventListener('click', fetchAddress)