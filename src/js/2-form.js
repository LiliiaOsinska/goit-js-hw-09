let formData = { email: '', message: '' };
const LS_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
form.addEventListener('input', handleInput);
function handleInput() {
  const elEmail = email.value;
  const elMessage = message.value;
  formData.message = elMessage.trim();
  formData.email = elEmail.trim();
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}
addValues();
function addValues() {
  const valueLs = localStorage.getItem(LS_KEY);
  formData = JSON.parse(valueLs) || { email: '', message: '' };
  const { email, message } = formData;
  if (email) {
    document.querySelector('[name="email"]').value = email;
  }
  if (message) {
    document.querySelector('[name="message"]').value = message;
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
  form.reset();
  localStorage.removeItem(LS_KEY);
  console.log(formData);
}
