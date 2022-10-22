const cpfInput = document.querySelector('#cpfInput')
const passwordInput = document.querySelector('#passwordInput')
const confirmPasswordInput = document.querySelector('#confirmPasswordInput')
const btnSend = document.querySelector('#btnSend')

// function formatCpf(){
//     const inputLength = this.value.length
//     if(inputLength == 3){
//         this.value += Number('.')
//     } else if(inputLength == 7){
//         this.value += Number('.')
//     } else if(inputLength == 11){
//         this.value += Number('-')
//     }
// }


function cpfChange() {
    const numeric = this.value.replace(/[^0-9]+/g, '');
    const cpfLength = numeric.length;

    const partOne = numeric.slice(0, 3) + ".";
    const partTwo = numeric.slice(3, 6) + ".";
    const partThree = numeric.slice(6, 9) + "-";

    let formatCPF

    if (cpfLength < 4) { 
        cpfInput.value = numeric;
    } else if (cpfLength >= 4 && cpfLength < 7) {
         formatCPF = partOne +
                       numeric.slice(3);
        cpfInput.value = formatCPF;
    } else if (cpfLength >= 7 && cpfLength < 10) {
         formatCPF = partOne +
                       partTwo +
                       numeric.slice(6);
        cpfInput.value = formatCPF;
    } else if (cpfLength >= 10 && cpfLength < 12) {
         formatCPF = partOne +
                       partTwo +
                       partThree +
                       numeric.slice(9);
        this.value = formatCPF;
    } else if (cpfLength >= 12) {
         formatCPF = partOne +
                       partTwo +
                       partThree +
                       numeric.slice(9, 11);
        cpfInput.value = formatCPF;
    }
    
    console.log(numeric)
}

cpfInput.addEventListener('input', cpfChange)

passwordInput.addEventListener('input', function(){
    if(this.value == ""){
        btnSend.classList.remove('disabled')
        btnSend.removeAttribute('disabled')
    }
})

confirmPasswordInput.addEventListener('input', function() {
    console.log(this.value, passwordInput.value)
    if(this.value != passwordInput.value){
        btnSend.classList.add('disabled')
        btnSend.setAttribute('disabled')
    } else if(this.value == passwordInput.value){
        btnSend.classList.remove('disabled')
        btnSend.removeAttribute('disabled')
    }
})