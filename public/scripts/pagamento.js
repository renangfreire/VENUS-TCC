const mp = new MercadoPago('TEST-8386369f-066b-469b-8e28-e6d5181c347c');

const cardNumberElement = mp.fields.create('cardNumber', {
    placeholder: "Número do cartão"
}).mount('form-checkout__cardNumber');
const expirationDateElement = mp.fields.create('expirationDate', {
    placeholder: "MM/YY",
}).mount('form-checkout__expirationDate');
  const securityCodeElement = mp.fields.create('securityCode', {
      placeholder: "Código de segurança"
    }).mount('form-checkout__securityCode');
    
    const paymentMethodElement = document.getElementById('paymentMethodId');
    const issuerElement = document.getElementById('form-checkout__issuer');
    const installmentsElement = document.getElementById('form-checkout__installments');
    const formElement = document.getElementById('form-checkout');
    
    const issuerPlaceholder = "Banco emissor";
    const installmentsPlaceholder = "Parcelas";
    let currentBin;
    
 

    (async function getIdentificationTypes() {
      try {
        const identificationTypes = await mp.getIdentificationTypes();
        const identificationTypeElement = document.getElementById('form-checkout__identificationType');

        createSelectOptions(identificationTypeElement, identificationTypes);
      } catch (e) {
        return console.error('Error getting identificationTypes: ', e);
      }
    })();

  function createSelectOptions(elem, options, labelsAndKeys = { label: "name", value: "id" }) {
    const { label, value } = labelsAndKeys;

    elem.options.length = 0;

    const tempOptions = document.createDocumentFragment();

    options.forEach(option => {
      const optValue = option[value];
      const optLabel = option[label];

      const opt = document.createElement('option');
      opt.value = optValue;
      opt.textContent = optLabel;

      tempOptions.appendChild(opt);
    });

    elem.appendChild(tempOptions);
  }

  cardNumberElement.on('binChange', async (data) => {
    const { bin } = data;
    try {
      if (!bin && paymentMethodElement.value) {
        clearSelectsAndSetPlaceholders();
        paymentMethodElement.value = "";
      }

      if (bin && bin !== currentBin) {
        const { results } = await mp.getPaymentMethods({ bin });
        const paymentMethod = results[0];

        paymentMethodElement.value = paymentMethod.id;
        updatePCIFieldsSettings(paymentMethod);
        updateIssuer(paymentMethod, bin);
        updateInstallments(paymentMethod, bin);
      }

      currentBin = bin;
    } catch (e) {
      console.error('error getting payment methods: ', e)
    }
  });

  function clearSelectsAndSetPlaceholders() {
    clearHTMLSelectChildrenFrom(issuerElement);
    createSelectElementPlaceholder(issuerElement, issuerPlaceholder);

    clearHTMLSelectChildrenFrom(installmentsElement);
    createSelectElementPlaceholder(installmentsElement, installmentsPlaceholder);
  }

  function clearHTMLSelectChildrenFrom(element) {
    const currOptions = [...element.children];
    currOptions.forEach(child => child.remove());
  }

  function createSelectElementPlaceholder(element, placeholder) {
    const optionElement = document.createElement('option');
    optionElement.textContent = placeholder;
    optionElement.setAttribute('selected', "");
    optionElement.setAttribute('disabled', "");

    element.appendChild(optionElement);
  }

  // Esta etapa melhora as validações cardNumber e securityCode
  function updatePCIFieldsSettings(paymentMethod) {
    const { settings } = paymentMethod;

    const cardNumberSettings = settings[0].card_number;
    cardNumberElement.update({
      settings: cardNumberSettings
    });

    const securityCodeSettings = settings[0].security_code;
    securityCodeElement.update({
      settings: securityCodeSettings
    });
  }
  
  async function updateIssuer(paymentMethod, bin) {
    const { additional_info_needed, issuer } = paymentMethod;
    let issuerOptions = [issuer];

    if (additional_info_needed.includes('issuer_id')) {
      issuerOptions = await getIssuers(paymentMethod, bin);
    }

    createSelectOptions(issuerElement, issuerOptions);
  }

  async function getIssuers(paymentMethod, bin) {
    try {
      const { id: paymentMethodId } = paymentMethod;
      return await mp.getIssuers({ paymentMethodId, bin });
    } catch (e) {
      console.error('error getting issuers: ', e)
    }
  };

  
  async function updateInstallments(paymentMethod, bin) {
    try {
      const installments = await mp.getInstallments({
        amount: document.getElementById('transactionAmount').value,
        bin,
        paymentTypeId: 'credit_card'
      });
      const installmentOptions = installments[0].payer_costs;
      const installmentOptionsKeys = { label: 'recommended_message', value: 'installments' };
      createSelectOptions(installmentsElement, installmentOptions, installmentOptionsKeys);
    } catch (error) {
      console.error('error getting installments: ', e)
    }
  }

  async function createCardToken(event) {
    try {
      const tokenElement = document.getElementById('token');
      if (!tokenElement.value) {
        event.preventDefault();
        const token = await mp.fields.createCardToken({
          cardholderName: document.getElementById('form-checkout__cardholderName').value,
          identificationType: document.getElementById('form-checkout__identificationType').value,
          identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
        });
          console.log(document.getElementById("form-checkout__identificationType").value)
          
        tokenElement.value = token.id;
        formElement.requestSubmit();
      }
    } catch (e) {
      console.error('error creating card token: ', e)
    }
  }

  
  formElement.addEventListener('submit', createCardToken);

