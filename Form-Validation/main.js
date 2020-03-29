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
    formControl.className = "form-control success";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Check email is valid

const isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Event Listeners
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let enteredUserName = username.value === '' ? showError(username, 'Username is required') : showSuccess(username);

    let enteredEmail = email.value === '' ? showError(email, 'Email is required') : showSuccess(email);

    let enteredPassword  = password.value === '' ? showError(password, 'Password is required') : showSuccess(password);

    let enteredPassword2 = password2.value === '' ? showError(password2, 'Password 2 is required') : showSuccess(password2);
});


