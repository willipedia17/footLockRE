let form = document.getElementById("form");
let error = document.getElementById("error");

function valName(name) {
    return name.length >= 4 && name.length <= 16
}

function valEmail(email) {
    let split = email.split("@");
    if (split.length === 1) {
        return 0;
    }
    let checkDot = split[split.length - 1];
    let checkDotSplit = checkDot.split(".");
    if (checkDotSplit.length === 1) {
        return 1;
    }
    return -1;
}

function valCountry(country) {
    return country.selectedIndex !== 0;
}

function valPhone(phone) {
    return phone.length < 9;
}

function Submit(e) {
    e.preventDefault();

    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    if (!valName(fname.value) || !valName(lname.value)) {
        showError("Name length must be in the range of 4 - 16 characters");
        return;
    }

    let email = document.getElementById("email");
    let checkEmail = valEmail(email.value);
    if (checkEmail !== -1) {
        showError(emailErrorMessage[checkEmail]);
        return;
    }

    let countrySelect = document.getElementById("country");
    if (!valCountry(countrySelect)) {
        showError("Please select a country");
        return;
    }
    let country = countrySelect.options[countrySelect.selectedIndex].value;

    let checkBox = document.getElementById("terms");
    if (!checkBox.checked) {
        showError("Please agree to the terms and conditions");
        return;
    }

    clearError();

    alert("Form successfully submitted");
    console.log(fname.value, lname.value, email.value, phone.value, country);
}

let emailErrorMessage = ["Email must contain @", "Email must contain . (gmail.com, etc)"];

function clearError() {
    error.style.display = "none"
}

function showError(message) {
    error.style.display = "block"
    error.innerHTML = message
}

form.addEventListener('submit', Submit);
