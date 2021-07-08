const fnInput = document.getElementsByName('first-name');
const lnInput = document.getElementsByName('last-name');
const emailInput = document.getElementsByName('email');
const pwInput = document.getElementsByName('password');
const inputs = document.getElementsByTagName('input');

const btnRegister = document.getElementById('btn-register');
for (let input of inputs) {
    input.addEventListener("change", () => {
        let inputSpace = input.parentElement;
        let formCel = inputSpace.parentElement;
        let imgError = inputSpace.getElementsByClassName('inputErrorIcon').item(0);
        let msgError = formCel.getElementsByClassName('inputErrorMsg').item(0);
        resetInputValidation(input, imgError, msgError);
    });
}

btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    
    validateInputs();
});

function resetInputValidation(input, imgError, msgError) {
    imgError.style.display = 'none';
    msgError.innerHTML = '';
    input.style.border = '1px solid #DCDCDC';
}

function validateInputs () {

    if (fnInput.item(0).value == '') {
        const fnErrorImg = document.getElementById('fn-error');
        const fnWarn = document.getElementById('fn-warn');
        invalidateInputs(fnInput.item(0), fnErrorImg, fnWarn, 'First Name cannot be empty');
    }
    if (lnInput.item(0).value == '') {
        const lnErrorImg = document.getElementById('ln-error');
        const lnWarn = document.getElementById('ln-warn');
        invalidateInputs(lnInput.item(0), lnErrorImg, lnWarn, 'Last Name cannot be empty');
    }
    if (emailInput.item(0).value == '') {
        const emailErrorImg = document.getElementById('email-error');
        const emailWarn = document.getElementById('email-warn');
        invalidateInputs(emailInput.item(0), emailErrorImg, emailWarn, 'Email cannot be empty');
    }
    if (pwInput.item(0).value == '') {
        const pwErrorImg = document.getElementById('pw-error');
        const pwWarn = document.getElementById('pw-warn');
        invalidateInputs(pwInput.item(0), pwErrorImg, pwWarn, 'Password cannot be empty');
    }

    function invalidateInputs(input, errorImg, errorWarn, errorMsg) {
        input.style.border = '2px solid #D28E8F'
        errorImg.style.display = 'inline-block';
        errorWarn.innerHTML = errorMsg;
    }
}