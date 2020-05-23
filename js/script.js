/* DOM Elements */
const emailForm = document.querySelector('#subscribe-form');
const emailInput = document.querySelector('#email-input');
const emailError = document.querySelector('#email-input-error');

/* Email Address Regex */
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/* Sets an error state. */
const setError = (str = '') => {
  if (typeof str !== 'string' || str === '') {
    emailForm.classList.remove('error');
  } else {
    emailForm.classList.add('error');
  }

  emailError.innerHTML = str;
};

/* DOM Events */
const onEmailFormSubmit = (ev) => {
  ev.preventDefault();

  const { value } = emailInput;
  if (typeof value !== 'string' || value == '') {
    setError('Please provide an email address.');
  } else if (emailRegex.test(value) === false) {
    setError('Please provide a valid email address.');
  } else {
    setError();
  }
}

/* On Window Load */
window.onload = () => {
  emailForm.addEventListener('submit', onEmailFormSubmit);
};
