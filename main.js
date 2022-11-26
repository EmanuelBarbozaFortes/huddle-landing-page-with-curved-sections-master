let mail = document.getElementById('mail')
let form = document.querySelector('form')
let textEntrar = document.getElementById('TextEntrar')
form.addEventListener('submit'  , (e) => {
   if(mail.value == '' ){
    textEntrar.textContent = 'email nao válido'
   } else {
    console.log(mail.value)
    e.preventDefault() 
}})

function validatorEmail(mail){
    let emailPattern =
}