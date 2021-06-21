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
})

// checks is there is an account still in localStorage
function checkAccount() {
    console.log(localStorage)
    if (localStorage.getItem('email') == null) {

    } else  {
        existingAccount = true;
    }
}

//checks if the input contains value, otherwise disable the submit button
function inputValidation() {
    if (email.value && password.value) {

    } else {
        submit.disabled = true
    }
}

// check localStorage to signIn validation
function checkStorage() {
    let storedEmail = localStorage.email;
    let storedPassword = localStorage.password;
    let message = []

    if (existingAccount == true) {

        //if password and email are correct, then go to next page
        if (email.value == storedEmail && password.value == storedpassword) {
            location.href = 'pages/start.html';

        //   if email is incorrect and password correct, give email error
        } else if (email.value !== storedEmail && password.value == storedpassword) {
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

