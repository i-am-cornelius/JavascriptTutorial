/* const btn = document.querySelector('.btn');

let message = 'Submission succesfull';
btn.addEventListener('click', (btn) => {
    btn.preventDefault()
    alert(message);
    document.querySelector('#my-form').style.background = '#c3c6c6';
}) */

const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const msg = document.querySelector('.msg');
const email = document.querySelector('#email');
const itemsList = document.querySelector('#items')

function formSubmit(e) {
    e.preventDefault()
    if (name.value === '' || email.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'please fill all fields'
    } else {
        msg.innerHTML = 'Successfull';
    }
}

myForm.addEventListener('submit', formSubmit);