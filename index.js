const submitBtn = document.getElementById('submit')
const alertMsg = document.getElementById('alertMsg')
const dismissBtn = document.getElementById('dismissAlert')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    alertMsg.classList.remove('hidden')
    alertMsg.classList.add('flex')
})


dismissBtn.addEventListener('click', (e) => {
    alertMsg.classList.remove('flex')
    alertMsg.classList.add('hidden')
})