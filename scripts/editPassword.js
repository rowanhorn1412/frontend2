let existingAccount = false,
    password = document.getElementById('changePassword'),
    submit = document.getElementById('setNewPassword');

checkAccount();

// check for localStorage data
function checkAccount() {
    console.log(localStorage);
    if (localStorage.email == null) {
        location.href = 'https://rowanhorn1412.github.io/frontend2/';
    } else {
        existingAccount = true;
    }
}

//submit new password too localStorage
submit.addEventListener('click', function(e) {
    e.preventDefault()
    if (existingAccount == true) {
        localStorage.setItem('password', password.value);
        location.href = 'start.html';
    }
})