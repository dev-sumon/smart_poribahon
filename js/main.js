

// FAQ section JS start
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('open');
    });
});
// FAQ section JS end

// login and register button js start
function redirectToLogin(){
    window.location.href = 'login.html';
}

    document.addEventListener("DOMContentLoaded", function(){
        let loginButton = document.getElementById("loginButton");
        if(loginButton){
            loginButton.addEventListener("click", redirectToLogin)
        }
    });

// login and register button js end