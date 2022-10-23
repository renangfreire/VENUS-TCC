    const btnSelect = document.querySelectorAll('.btnSelect')
    const addCartButton = document.getElementById('addCartButton')

    const inputColor = document.querySelector(".currentColor");
    const inputSize = document.querySelector('.currentSize')

    let btnColor = []
    let btnSize = []

    // BTNS Select Color/Size
    btnSelect.forEach( e => {
        const btnGroup = e.classList.contains('btnColor') ? btnColor : btnSize
        const inputGroup = e.classList.contains('btnColor') ? inputColor : inputSize

        e.classList.contains('btnColor') ? btnColor.push(e) : btnSize.push(e)

        e.addEventListener('click', selectButton.bind(e, btnGroup, inputGroup))
    })
    
    function selectButton(btnGroup, inputGroup){
        // Remover Select Anterior
        btnGroup.map(e => {
            if(e.classList.contains('selected')){
                e.classList.remove('selected')
            }
        }
        )
        // Inserir novo Select
            this.classList.toggle('selected')
            
            inputGroup.value = this.innerHTML
            
    }

    async function postCart(cName, cValue){

        const color = document.querySelector('.currentColor').value
        const size = document.querySelector('.currentSize').value
        const id = document.querySelector('.idProduct').value
        
        console.log(color)

        if(!color || !size || !id){
            alert("Please select a color or size") // trocar por toasty
            return
        }

    const fetchData = {
        headers:{
            'Accept': 'application/json',
             'Content-Type': 'application/json'
            // "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        body: JSON.stringify({
            id,
            color: color || undefined,
            size: size || undefined
        })
    }

    await fetch('/precarrinho',
    fetchData).then((response) => {
        window.location.href = response.url
    })
    }

  addCartButton.addEventListener('click', postCart)
  
  