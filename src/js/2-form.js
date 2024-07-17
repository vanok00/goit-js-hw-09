'use strict';
const form = document.querySelector('form');
const inputEl = form.elements.email;
const textareaMessage = form.elements.message;
const formSubmit = document.querySelector('button');
const storageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(storageKey);

let parsedData = {};
if (savedData) {
  try {
    parsedData = JSON.parse(savedData);
  } catch (error) {}
}
inputEl.value = parsedData.email || '';
textareaMessage.value = parsedData.message || '';

form.addEventListener('input', handleIput);
form.addEventListener('submit', submitForm);
function handleIput(event) {
  formData.email = inputEl.value.trim();
  formData.message = textareaMessage.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
}
function submitForm(event) {
  event.preventDefault();
  if (!inputEl.value || !textareaMessage.value) {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem(storageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
}
