let form = document.getElementById('form');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');
let message = document.getElementById('message');
let existingAccount = false;


// disabling submit and call store function on click
submit.addEventListener('click', function(e) {
    e.preventDefault()
    checkStorage();
    console.log(localStorage);
    checkAccount();
})


function checkAccount() {
    console.log(localStorage)
    if (localStorage.getItem('email') == null) {

    } else  {
        existingAccount = true;
    }
}

function inputValidation() {
    if (email.value && password.value) {
        fieldvalidate = true;
    } else {
        submit.disabled = true
        submit.classList.add('false');
    }
}

function checkStorage() {
    let storedEmail = localStorage.email;
    let storedPassword = localStorage.password;

    if (existingAccount == true) {
        message.classList.replace('none', 'succes');
        if (email.value == storedEmail && password.value == storedpassword) {
            location.href = 'pages/start.html';
        } else if (email.value !== storedEmail && password.value == storedpassword) {
            email.classList.add('error');
            message.classList.add('error');
        } else if (email.value == storedEmail && password.value !== storedPassword) {
            password.classList.add('error');
            message.classList.add('error');
        } else {
        email.classList.add('error');
        password.classList.add('error');
        message.classList.add('error');
    }

    }   else {
        // message.classList.add('error');
        // message.classList.replace('none', 'succes');
        location.href = 'https://rowanhorn1412.github.io/frontend2/';
    }
};
