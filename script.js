const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

const validateForm = () => {
  //using constraint API
  isValid = form.checkValidity;
  //this is built in form method
  console.log(isValid);
};

const processFormData = (e) => {
  e.preventDefault();
  console.log(e);
  validateForm();
};
//Event Listener
form.addEventListener('submit', processFormData);
