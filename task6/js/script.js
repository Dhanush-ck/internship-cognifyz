const username = document.getElementById('username');
const password = document.getElementById('password');
var usernameError = document.getElementById('username-error');
var passwordError = document.getElementById('password-error');
const submitBtn = document.getElementById('submit');

usernameError.style.display = 'none';
passwordError.style.display = 'none';

submitBtn.addEventListener('click', ()=> {

    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    
    const userVal = username.value.trim();
    const passVal = password.value.trim();
    
    if(!userVal || userVal == "") {
        usernameError.innerText = "Username can't be empty";
        usernameError.style.display = 'block';
        return;
    }
    
    if(!passVal || passVal == "") {
        passwordError.innerText = "Password can't be empty";
        passwordError.style.display = 'block';
        return;
    }
    
    if(passVal.length < 8) {
        passwordError.innerText = "Password should be atleast 8 characters";
        passwordError.style.display = 'block';
        return;
    }

    document.location.href = 'success.html';
})