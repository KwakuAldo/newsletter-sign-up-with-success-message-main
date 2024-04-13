document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.getElementById('form_container');
    const submitBtn = document.getElementById('submit');
    const alertMsgEl = document.getElementById('alertMsg_El');
    const dismissBtn = document.getElementById('dismissAlert');


    //switch between illustration sign up image depending on screen size
    window.addEventListener('resize', function () {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            document.getElementById('illustration_img').src = 'images/illustration-sign-up-mobile.svg';
        } else {
            document.getElementById('illustration_img').src = 'images/illustration-sign-up-desktop.svg';
        }
    })

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        formContainer.classList.remove('md:flex');
        formContainer.classList.add('hidden');
        alertMsgEl.classList.remove('hidden');
        alertMsgEl.classList.add('flex');
        let emailInput = document.getElementById('email');
        let userEmail = document.getElementById('user_email');
        userEmail.innerText = emailInput.value;
        console.log(userEmail.innerText);
    })


    dismissBtn.addEventListener('click', (e) => {
        alertMsgEl.classList.remove('flex')
        alertMsgEl.classList.add('hidden')
        formContainer.classList.remove('hidden')
        formContainer.classList.add('md:flex')
    })


    // Prompt user to enter valid email
    // function validateEmail() {
    //     const emailInput = document.getElementById('email')
    // }
})