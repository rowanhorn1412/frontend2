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
let textvalidate = false;
let fieldvalidate = false;


// disabling submit and call store function on click
submit.addEventListener('click', function(e) {
    e.preventDefault()
    store();
    checkLogin();
    console.log(localStorage);

    let message = []
    if (this.name.value === '' || this.name.value == null) {
        message.push('first name is required')    
    }

    if (message.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})

// checking if localstorage has data, and if it does it redirects back to login
function checkLogin() {
    console.log(localStorage);
    if (localStorage.email == null) {

    } else {
        message.classList.add('small');
        message.classList.replace('none', 'block');
    }
}


// Storing the user-data to local storage to create account in local storage (database mimic)
function store() {
    if (email.value.length == 0 && password.value.length == 0) {
        message.classList.add('error');
        message.classList.replace('none', 'block');
        document.getElementById('small').innerHTML = "Please add email + password";
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

