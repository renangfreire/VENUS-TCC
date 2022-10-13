    const btnSelect = document.querySelectorAll('.btnSelect')
    const btnQuantity = document.querySelectorAll('.btnQuantity')
    const amountProduct = document.querySelector('#amount-product')
    const addCartButton = document.getElementById('addCartButton')

    let btnColor = []
    let btnSize = []

    // BTNS Select Color/Size
    btnSelect.forEach( e => {
        const btnGroup = e.classList.contains('btnColor') ? btnColor : btnSize

        e.classList.contains('btnColor') ? btnColor.push(e) : btnSize.push(e)


        e.addEventListener('click', select.bind(e, btnGroup))
    })

    // BTNS Quantity 
    // btnQuantity.forEach( e => {
    //     e.addEventListener('click', changeQuantityValue.bind(e, e.id))
        
    // })

    // // Disable Negative Numbers in Amount Product
    // amountProduct.addEventListener('input', (event) => {
    //     disableNegativeAmount.bind(amountProduct, event)()
    // })
    
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
//     function changeQuantityValue(btnId){
//         switch(btnId){   
//             case 'increaseValue':     
//                     amountProduct.value = Number(amountProduct.value) + 1;
//              break;
//              case 'decreaseValue':
//                 amountProduct.value = Number(amountProduct.value) - 1;
//             break;
//             default:
//                 console.log('good morning');
//                 break;
//         }
//         if(amountProduct.value <= 0){
//             amountProduct.value = 1
//         }        
// }
//     function disableNegativeAmount(event){
//         this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null

//         if(this.value == '0' && event.data == '0'){
//             this.value = 1          
//         }
// }

    function createCookie(cName, cValue){
        let date = new Date()
        date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * 14);
        const expires = "expires=" + date.toUTCString()
    }

    function attCart(){

        

     }
  addCartButton.addEventListener('click', async () => {
    const fetchData = {
        headers:{
            'Accept': 'application/json',
             'Content-Type': 'application/json'
            // "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        body: JSON.stringify({
            id: 19672533,
            color: "PRETO",
            size: "M"
        })
    }

   const test = await fetch('/precarrinho',
    fetchData).then((response) => {
        console.log(response)
    })
  })
  
  