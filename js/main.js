

// FAQ section JS start
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('open');
    });
});
// FAQ section JS end
// whell scrolling number up-down

let timeout;
let isScrolling = false;

window.addEventListener('scroll', function() {
    isScrolling = true;

    document.querySelectorAll('.price').forEach(function(element) {
        let originalValue = parseInt(element.getAttribute('data-original'));
        let currentValue = parseInt(element.innerText);

        if (window.scrollY > 0) {
            currentValue = originalValue + Math.floor(window.scrollY / 10);
        } else {
            currentValue = originalValue;
        }

        element.innerText = currentValue;
    });

    // Set a timeout to reset the price to the original value after the scroll stops
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if (!isScrolling) {
            document.querySelectorAll('.price').forEach(function(element) {
                let originalValue = element.getAttribute('data-original');
                element.innerText = originalValue;
            });
        }
    }, 200);
});

window.addEventListener('scroll', function() {
    isScrolling = false;
});

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


const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
        preferredCountries: ["bd", "us", "gb", "in"],
        separateDialCode: true,
        initialCountry: "bd",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });


