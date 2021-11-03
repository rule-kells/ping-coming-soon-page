const btn = document.querySelector('.btn')
const errorMsg = document.querySelector('.error__msg--hidden')
const inputError = document.querySelector('input')

btn.addEventListener('click', (e) => {
  const validate = document.querySelector('input').validity.valid
  if (!validate) {
    errorMsg.classList.add('error__msg')
    inputError.classList.add('input__error')
  } else {
    errorMsg.classList.remove('error__msg')
    inputError.classList.remove('input__error')
  }
})
