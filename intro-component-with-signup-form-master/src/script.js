const myForm = document.querySelector('form')

const inputFName = document.querySelector('#fname')
const inputLName = document.querySelector('#lname')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')

const showInputErr = document.querySelector('.showInputErr')




myForm.addEventListener('submit', onSubmit)
  function onSubmit(e)
  {
    e.preventDefault()
    
    if(inputFName.value ==='')
    {
      showInputErr.classList.add('.showInputErr')
      showInputErr.innerHTML ='Enter ALL Fields'     
      inputFName.value = 'First Name cannot be empty'
      setTimeout(() => showInputErr.remove(), 5000)
      setTimeout(() => inputFName.value="", 5000)
    } 
    
    if(inputLName.value ==='')
    {
      showInputErr.classList.add('.showInputErr')
      showInputErr.innerHTML ='Enter ALL Fields'
      inputLName.value = 'Last Name cannot be empty'
      setTimeout(() => showInputErr.remove(), 5000)
      setTimeout(() => inputLName.value="", 5000)
    }

    if(inputEmail.value ==='')
    {
      showInputErr.classList.add('.showInputErr')
      showInputErr.innerHTML ='Enter ALL Fields'
      inputEmail.value = 'Looks like this is not an email'
      setTimeout(() => showInputErr.remove(), 5000)
      setTimeout(() => inputEmail.value="", 5000)
    }

    if(inputPassword.value ==='')
    {
      showInputErr.classList.add('.showInputErr')
       showInputErr.innerHTML ='Enter ALL Fields'
       setTimeout(() => showInputErr.remove(), 5000)
      setTimeout(() => inputPassword.value="", 5000)
    }
 }