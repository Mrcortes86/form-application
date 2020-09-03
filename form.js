const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')

const email = document.getElementById('email')
const url = document.getElementById('url')
const form = document.getElementById('wrapper')
const errorElement = document.getElementById('error')

form.addEventListener('submit' , (submits) =>{
    let messages = []
    if (firstName.value === '' || firstName == null){
        messages.push('Name is required')
    } else if (lastName.value === '' || lastName.value == Null){
        messages.push('Names is required')

    } else if (email.value === '' || email.value == null){
        messages.push('Email is required')
    }else if (messages.length > 0){
    submits.preventDefault()
    errorElement.innerText = messages.join(' , ')
    }
})