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



// disabling submit and call store function on click
submit.addEventListener('click', function(e) {
    e.preventDefault()
    store();
    checkLogin();
    console.log(localStorage);

    //give error messages for empty input fields
    let message = []
    if (firstName.value === '' || firstName.value == null) {
        message.push('first name is required')    
    }

    if (lastName.value === '' || lastName.value == null) {
        message.push('last name is required')    
    }

    if (email.value === '' || email.value == null) {
        message.push('email is required')    
    }

    if (password.value === '' || password.value == null) {
        message.push('password is required')    
    }

    if (age.value === '' || age.value == null) {
        message.push('age is required')    
    }

    if (occupation.value === '' || occupation.value == null) {
        message.push('occupation is required')    
    }
    if (message.length > 0) {
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }
})

// checking if localstorage has data, and if it does it redirects back to login
function checkLogin() {
    console.log(localStorage);
    if (localStorage.email == null) {
    } 
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

