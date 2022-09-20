const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const Email = document.querySelector('#email');
const password = document.querySelector('#password');
const eyeIcon = document.querySelector('#eyeIcon');
const errorMsg = document.querySelectorAll('.error')
const form = document.querySelector('#form');

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

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if(firstName.value.trim() === '') {
    errorMsg[0].innerHTML = 'First Name cannot be empty'
  }else {
    errorMsg[0].innerHTML = ''
  }

  if(lastName.value.trim() === '') {
    errorMsg[1].innerHTML = 'Last Name cannot be empty'
  }else {
    errorMsg[1].innerHTML = ''
  }

  if(Email.value.trim() === '') {
    errorMsg[2].innerHTML = 'Provide a valid email address'
  }else {
    errorMsg[2].innerHTML = ''
  }

  if(password.value.trim() === '') {
    errorMsg[3].innerHTML = 'Password cannot be Blank'
  }else {
    errorMsg[3].innerHTML = ''
  }
})