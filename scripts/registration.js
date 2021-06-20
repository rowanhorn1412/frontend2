let form = document.getElementById('form');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let age = document.getElementById('age');
let man = document.getElementById('man');
let woman = document.getElementById('woman');
let occupation = document.getElementById('occupation');
let submit = document.getElementById('submit'); 
let message = document.getElementById('message');

form.addEventListener('submit', e => { //krijg error in console
    e.preventDefault();

    checkInput();
});

function checkInput() {
    // getting the value from the input fields
    const firstNameValue = firstName.value();
    const lastNameValue = lastName.value();
    const emailValue = lastName.value();
    const passwordValue = password.value();
    const ageValue = age.value();

    if(firstNameValue === '') {
        //show error
        //add error class
        setErrorFor(firstName, 'First name cannot be empty');
    } else {
        //add succes class
        setSuccesFor(firstName);
    }

    if(lastNameValue === '') {
        setErrorFor(lastName, 'Last name cannot be empty');
    } else {
        setSuccesFor(lastName);
    }

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!emailCorrect(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(passwordValue === '') {
        setErrorFor(email, 'Email cannot be empty');
    } else {
        setSuccesFor(email);
    }

    if(ageValue === '') {
        setErrorFor(age, 'Age cannot be empty');
    // } else if (!emailCorrect(emailValue)) {
	// 	setErrorFor(email, 'Not a valid email');
	} else {
        setSuccesFor(age);
    }
}

function setErrorFor(input, message) {
    const formContent = input.parentElement; 
    const small = formContent.querySelector('small');
    //add error inside small
    small.innerText = message;
    //add error class
    formContent.className = 'form-content error';
}

function setSuccesFor(input) {
    const formContent = input.parentElement;
    formContent.className = 'form-content succes';

}

function emailCorrect(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function store() {
    if (email.value.length == 0 && password.value.length == 0) {
        message.classList.add('error');

    }  else {
        localStorage.setItem('firstName', firstName.value);
        localStorage.setItem('lastName', firstName.value);
        localStorage.setItem('email', firstName.value);
        localStorage.setItem('password', firstName.value);
        localStorage.setItem('age', firstName.value);
        location.href = 'https://rowanhorn1412.github.io/front-end/';
    }
}