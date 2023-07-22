const text = document.querySelector('input');
text.oninput = function() {
    document.getElementById('email').style.color = 'black';
    document.getElementById('email').style.borderColor = 'rgba(25, 24, 43, 0.25)';
}
const submitButton = document.getElementById('subscribe');
function validateUserEmail() {
    let userInput = document.getElementById('email').value;
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let check = res.test(String(userInput).toLowerCase());

    if (userInput === '') {
        document.getElementById('error').style.display = 'inline';
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email').style.color = 'red';
    }
    else if (check === false) {
        document.getElementById('error').style.display = 'inline';
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email').style.color = 'red';
    }
    else {
        showSuccesMessage(userInput);
    }
}

submitButton.addEventListener('click', validateUserEmail);
function showSuccesMessage(userInput) {
    document.getElementById('flex-container').style.display = 'none';
    document.getElementById('succes-message-container').style.display = 'block';
    document.getElementById('confirm-email').innerHTML = userInput;
}
const dismissButton = document.getElementById('dismiss');

function dismissSuccesMessage() {
    document.getElementById('flex-container').style.display = 'flex';
    document.getElementById('succes-message-container').style.display = 'none';
    document.getElementById('email').style.borderColor = 'green';
    document.getElementById('email').style.color = 'green';
    document.getElementById('email').style.backgroundColor = 'white';
    document.getElementById('error').style.display = 'none';
}

dismissButton.addEventListener('click', dismissSuccesMessage);