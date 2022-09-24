    const btnSelect = document.querySelectorAll('.btnSelect')
    const btnQuantity = document.querySelectorAll('.btnQuantity')
    const amountProduct = document.querySelector('#amount-product')

    let btnColor = []
    let btnSize = []

    // BTNS Select Color/Size
    btnSelect.forEach( e => {
        const btnGroup = e.classList.contains('btnColor') ? btnColor : btnSize

        e.classList.contains('btnColor') ? btnColor.push(e) : btnSize.push(e)


        e.addEventListener('click', select.bind(e, btnGroup))
    })

    // BTNS Quantity 
    btnQuantity.forEach( e => {
        e.addEventListener('click', changeQuantityValue.bind(e, e.id))
        
    })

    // Disable Negative Numbers in Amount Product
    amountProduct.addEventListener('input', (event) => {
        disableNegativeAmount.bind(amountProduct, event)()
    })
    
    function select(btnGroup){
        // Remover Select Anterior
        btnGroup.map(e => {
            if(e.classList.contains('selected')){
                e.classList.remove('selected')
            }
        }
        )
        // Inserir novo Select
            this.classList.toggle('selected')
    }
    function changeQuantityValue(btnId){
        switch(btnId){   
            case 'increaseValue':     
                    amountProduct.value = Number(amountProduct.value) + 1;
             break;
             case 'decreaseValue':
                amountProduct.value = Number(amountProduct.value) - 1;
            break;
            default:
                console.log('good morning');
                break;
        }
        if(amountProduct.value <= 0){
            amountProduct.value = 1
        }        
}
    function disableNegativeAmount(event){
        this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null

        if(this.value == '0' && event.data == '0'){
            this.value = 1          
        }
}