const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
}

// Show input success message
const showSuccess = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control succeess";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Event Listeners
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (username.value === '') {
        showError(username, 'username is needed');
    } else {
        showSuccess(username);
    }
    // let enteredValue = username.value === '' ? showError('Username is required') : showSuccess(username);
});


