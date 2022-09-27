window.onload = () =>{
    const input = document.querySelectorAll('input');
    const cancel = document.querySelector('#cancel');
   
    const userPassword = document.querySelector('#user-password')
    const user = document.querySelector('#user')
    const form = document.querySelector('form')

    form.onsubmit = (event) =>{
        if(!userPassword.value || !user.value) {
            event.preventDefault()
            setTimeout(() => alert('Campos não podem está vazios'),50)
            return
        }
    }

   cancel.onclick = () => input.forEach(inp => inp.value = '');    
}