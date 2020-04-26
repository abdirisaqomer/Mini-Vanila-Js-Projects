const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// Show input success outline
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Check email is valid
const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

//Event Listeners
// This is where the user types their details on the form (dom)
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const enteredUserName =
    username.value === ""
      ? showError(username, "Username is required")
      : showSuccess(username);

  const enteredEmail =
    email.value === ""
      ? showError(email, "Email is required")
      : !isValidEmail(email.value)
      ? showError(email, "Email is not valid")
      : showSuccess(email);

  const enteredPassword =
    password.value === ""
      ? showError(password, "Password is required")
      : showSuccess(password);

  const enteredPassword2 =
    password2.value === ""
      ? showError(password2, "Password 2 is required")
      : showSuccess(password2);
});
