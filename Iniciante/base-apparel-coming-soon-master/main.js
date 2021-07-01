const signBtn = document.getElementById('signin-btn');

signBtn.addEventListener("click", (e) => {
    e.preventDefault();

    validateEmail();
});

function validateEmail () {
    const rg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailInput = document.getElementById('email-input');
    const errorIcon = document.getElementById('error-icon');
    const errorMsg = document.getElementById('error-msg');

    if (!rg.test(emailInput.value)) {
        addErrorStyle('Please provide a valid email');
    } else {
        removeErroStyle();
    }

    function addErrorStyle(errorMsgValue) {        
        errorIcon.style.display = "inline";
        errorMsg.innerHTML = errorMsgValue;
        emailInput.classList.add('invalid-input');
        signBtn.classList.add('invalid-btn')
    }

    function removeErroStyle() {
        errorIcon.style.display = "none";
        errorMsg.innerHTML = '';
        emailInput.classList.remove('invalid-input');
        signBtn.classList.remove('invalid-btn');
    }
}