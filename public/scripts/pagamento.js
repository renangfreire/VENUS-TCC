const mp = new MercadoPago('TEST-8386369f-066b-469b-8e28-e6d5181c347c');

const bricksBuilder = mp.bricks();

const modalPagamento = document.querySelector('.modalPagamento-overlay');
const closeModalButton = document.querySelector('.closeModalPagamento')
const loadingDiv = document.querySelector('.loading')

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


closeModalButton.addEventListener('click', toggleModalPagamento)