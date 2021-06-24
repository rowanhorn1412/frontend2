let form = document.getElementById('form');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let age = document.getElementById('age');
let occupation = document.getElementById('occupation');
let submit = document.getElementById('submit');
let message = document.getElementById('message');
let errorElement = document.getElementById('error');
const numbers = /[0-9]/;



// disabling submit and call store function on click
submit.addEventListener('click', function(e) {
    e.preventDefault()
    store();
    // checkLogin();
    console.log(localStorage);
    inputValidation();

    //give error messages for empty input fields
    let message = []
    if (firstName.value.match(numbers) || lastName.value.match(numbers)) {
        message.push('Numbers are not allowed in your name')    
    }

    if (firstName.value.match(numbers) || lastName.value.match(numbers)) {
        message.push('Numbers are not allowed in your name')    
    }

    if (email.value === '/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/') {
        message.push('Please provide a valid email address')    
    }

    if (password.value.match('password') || password.value.match('password')) {
        message.push('password cant be password')    
    }

    if (age.value == 18) {
        message.push('You must be 18 or older')    
    }

    if (occupation.value === '' || occupation.value == null) {
        message.push('Please fill in your current Occupation')    
    }
    
    if (message.length > 0) {
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }
})

//checks if the input contains value, otherwise disable the submit button and give error messages
function inputValidation() {
    const firstNameField = document.getElementById("firstName");
    const lastNameField = document.getElementById("lastName");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const ageField = document.getElementById("age");
    const occupationField = document.getElementById("occupation")
    let valid = true;

  if (!firstNameField.value) {
    const firstNameError = document.getElementById("firstNameError");
    firstNameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    firstNameError.setAttribute('aria-hidden', false);
    firstNameError.setAttribute('aria-invalid', true);
  }
  
  if (!lastNameField.value) {
    const lastNameError = document.getElementById("lastNameError");
    lastNameError.classList.add("visible");
    lastNameField.classList.add("invalid");
    lastNameError.setAttribute('aria-hidden', false);
    lastNameError.setAttribute('aria-invalid', true);
  }

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

  if (!ageField.value) {
    const ageError = document.getElementById("ageError");
    ageError.classList.add("visible");
    ageField.classList.add("invalid");
    ageError.setAttribute('aria-hidden', false);
    ageError.setAttribute('aria-invalid', true);
  }
  
  if (!occupationField.value) {
    const occupationError = document.getElementById("occupationError");
    occupationError.classList.add("visible");
    occupationField.classList.add("invalid");
    occupationError.setAttribute('aria-hidden', false);
    occupationError.setAttribute('aria-invalid', true);
  }

  return valid;
}

// Storing the user-date in localStorage, to keep te session live
function store() {
    if (email.value.length == 0 && password.value.length == 0) {

    } else {
        localStorage.setItem('firstName', firstName.value);
        localStorage.setItem('lastName', lastName.value);
        localStorage.setItem('age', age.value);
        localStorage.setItem('occupation', occupation.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        location.href = 'https://rowanhorn1412.github.io/frontend2/';
    }
}

