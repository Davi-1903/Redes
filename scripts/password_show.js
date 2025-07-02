const password = document.querySelector('#password');
const passwordBtn = document.querySelector('#password-btn');

let show = false

passwordBtn.onclick = function() {
    show = !(show);
    password.type = (show) ? 'text' : 'password';
}