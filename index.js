const submitBtn = document.getElementById('submit');
const alertMsgEl = document.getElementById('alertMsg_El');
const dismissBtn = document.getElementById('dismissAlert');
const overlay = document.getElementById('overlay');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    alertMsgEl.classList.remove('hidden')
    alertMsgEl.classList.add('flex')
    alertMsgEl.style.zIndex = "11"
    overlay.classList.remove('hidden')
    let emailInput = document.getElementById('email')
    let userEmail = document.getElementById('user_email')
    userEmail.innerText = emailInput.value;
    console.log(userEmail)
})


dismissBtn.addEventListener('click', (e) => {
    alertMsgEl.classList.remove('flex')
    alertMsgEl.classList.add('hidden')
    overlay.classList.add('hidden')
})

//switch between illustration sign up image depending on screen size
window.addEventListener('resize', function() {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        document.getElementById('illustration_img').src = 'images/illustration-sign-up-mobile.svg';
    } else {
        document.getElementById('illustration_img').src = 'images/illustration-sign-up-desktop.svg';
    }
})

// Prompt user to enter valid email
// function validateEmail() {
//     const emailInput = document.getElementById('email')
// }