function validateFields() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function toggleEmailErrors() {
    const email = document.getElementById("email").value;
    if (!email) {
        document.getElementById("email-required-error").style.display = "block";
    } else {
        document.getElementById("email-required-error").style.display = "none";
    }
    function toggleButtonsDisable() {
        const emailValid = isEmailValid();
        document.getElementById("recover-password-button").disabled = !emailValid;
    
        const passwordValid = isPasswordValid();
        document.getElementById("login-button").disabled = !emailValid || !passwordValid;
    }
}