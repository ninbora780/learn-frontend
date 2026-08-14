const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInput();
    const usernameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirm.value.trim();
    console.log("Username : "  + usernameValue);
    console.log("Email : "  + emailValue);
    console.log("Password : "  + passwordValue);
    console.log("confirm password : "  + confirmValue);
    
});

function checkInput() {
    const usernameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirm.value.trim();

    if (usernameValue === "") {
        setError(name, "Username cannot be blank!!!");
    } else {
        setSuccess(name);
    }

    if (emailValue === "") {
        setError(email, "Email cannot be blank!!!");
    } else if (!isEmail(emailValue)) {
        setError(email, "Not a valid email");
    } else {
        setSuccess(email);
    }

    if (passwordValue === "") {
        setError(password, "Password cannot be blank!!!");
    } else if (passwordValue.length < 8) {
        setError(password, "Password should be at least 8 characters");
    } else {
        setSuccess(password);
    }

    if (confirmValue === "") {
        setError(confirm, "Confirm password cannot be blank!!!");
    } else if (confirmValue !== passwordValue) {
        setError(confirm, "Confirm password must match password");
    } else {
        setSuccess(confirm);
    }
}

name.addEventListener("keyup", function() {
    const usernameValue = name.value.trim();
    if (usernameValue === "") {
        setError(name, "Username cannot be blank!!!");
    } else {
        setSuccess(name);
    }
});

email.addEventListener("keyup", function() {
    const emailValue = email.value.trim();
    if (emailValue === "") {
        setError(email, "Email cannot be blank!!!");
    } else if (!isEmail(emailValue)) {
        setError(email, "Not a valid email");
    } else {
        setSuccess(email);
    }
});

password.addEventListener("keyup", function() {
    const passwordValue = password.value.trim();
    if (passwordValue === "") {
        setError(password, "Password cannot be blank!!!");
    } else if (passwordValue.length < 8) {
        setError(password, "Password should be at least 8 characters");
    } else {
        setSuccess(password);
    }
});

confirm.addEventListener("keyup", function() {
    const confirmValue = confirm.value.trim();
    if (confirmValue === "") {
        setError(confirm, "Confirm password cannot be blank!!!");
    } else if (confirmValue !== password.value.trim()) {
        setError(confirm, "Confirm password must match password");
    } else {
        setSuccess(confirm);
    }
});
function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.classList.remove("success");
    formControl.classList.add("error");
    small.innerHTML = message;
}
function setSuccess(input) {
    const formControl = input.parentElement; 
    formControl.classList.remove("error");
    formControl.classList.add("success");
}
function isEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}