let formData = { email: '', message: '' };
const LS_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', handleInput);
const obj = {};
function handleInput(event) {
  const key = event.target.name;
  const value = event.target.value;
  obj[key] = value;
  localStorage.setItem(LS_KEY, JSON.stringify(obj).trim());
}

addValues();
function addValues() {
  const value = localStorage.getItem(LS_KEY);
  formData = JSON.parse(value) || { email: '', message: '' };
  const { email, message } = formData;
  if (email) {
    document.querySelector('.form-input').value = email;
  }
  if (message) {
    document.querySelector('.form-textarea').value = message;
  }
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  const elEmail = elements.email.value.trim();
  const elMessage = elements.message.value.trim();
  if (elEmail === '' || elMessage === '') {
    return alert('Fill please all fields');
  }
  formData.email = elEmail.trim();
  formData.message = elMessage.trim();
  event.target.reset();
  localStorage.removeItem(LS_KEY);
  console.log(formData);
}
