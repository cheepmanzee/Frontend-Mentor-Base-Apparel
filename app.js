const $emailInput = document.getElementById('email');
const $form = document.getElementById('form');
const $errorSign = document.querySelector('.error-icon');
const errorText = document.getElementById('errorText')

$form.addEventListener('submit', (e) => {
    let emailValue = $emailInput.value;
    if (validateEmail(emailValue)) {
        $emailInput.classList.remove('error');
        $errorSign.classList.remove('error-sign');
        errorText.remove();
    } else {
        createErrorText();
        $emailInput.classList.add('error');
        $errorSign.classList.add('error-sign');
        e.preventDefault();
    }
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function createErrorText() {
    const $errorText = document.createElement('p');
    $errorText.innerText = 'Please enter a valid email';
    $form.append($errorText);
    $errorText.style.display = 'block';
    $errorText.style.color = 'red';
    $errorText.style.position = 'absolute';
    $errorText.style.top = '80%';
    $errorText.style.width = '100%';
    $errorText.style.fontSize = '14px';
    $errorText.setAttribute('id', 'errorText');
}