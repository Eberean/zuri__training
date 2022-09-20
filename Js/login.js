const password = document.querySelector('#password');
const eyeIcon = document.querySelector('#eyeIcon');

eyeIcon.addEventListener('click', (e) => {
  e.preventDefault();
  if (eyeIcon.classList.contains('fa-eye')) {
    password.setAttribute('type', 'text');
    eyeIcon.classList.replace('fa-eye', 'fa-eye-slash')
  }
  else {
    password.setAttribute('type', 'password');
    eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
  }
})