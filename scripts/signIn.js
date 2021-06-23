let form = document.getElementById('form');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');
let message = document.getElementById('message');
let errorElement = document.getElementById('error');
let existingAccount = false;


// disabling submit and checks the localStorage
submit.addEventListener('click', function(e) {
    e.preventDefault()
    checkStorage();
    console.log(localStorage);
    checkAccount();
    inputValidation();
    // validateForm();
})

// checks is there is an account still in localStorage
function checkAccount() {
    console.log(localStorage)
    if (localStorage.getItem('email') == null) {

    } else  {
        existingAccount = true;
    }
}

// // Function to check the validation at each keydown event, so it auto refreshes
// form.addEventListener('keydown', function() {
//     validateForm();
//     if (fieldvalidate == true) {
//         submit.disabled = false
//     }
// });

//checks if the input contains value, otherwise disable the submit button
function inputValidation() {
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    let valid = true;

  if (!emailField.value) {
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
    emailError.setAttribute('aria-hidden', false);
    emailError.setAttribute('aria-invalid', true);
  }
  
  if (!passwordField.value) {
    const passwordError = document.getElementById("passwordError");
    passwordError.classList.add("visible");
    passwordField.classList.add("invalid");
    passwordError.setAttribute('aria-hidden', false);
    passwordError.setAttribute('aria-invalid', true);
  }

  return valid;
}

// check localStorage to signIn validation
function checkStorage() {
    let storedEmail = localStorage.email;
    let storedPassword = localStorage.password;
    let message = []

    if (existingAccount == true) {

        //if password and email are correct, then go to next page
        if (email.value == storedEmail && password.value == storedPassword) {
            location.href = 'pages/start.html';

        //   if email is incorrect and password correct, give email error
        } else if (email.value !== storedEmail && password.value == storedPassword) {
            message.push('email is incorrect')
            errorElement.innerText = message.join(', ')

        //  if email is correct and password incorrect, give password error
        } else if (email.value == storedEmail && password.value !== storedPassword) {
            message.push('password is incorrect')
            errorElement.innerText = message.join(', ')

        //if both are incorrect give mutual error
        } else {
            message.push('email and password are incorrect')
            errorElement.innerText = message.join(', ')
        }    
    }
};

