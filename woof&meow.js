function updatedDate(){
    const date = new Date();
    return date.toLocaleDateString('en-US', {
        weekday: 'long',  
        month: 'short',   
        day: 'numeric',   
        year: 'numeric'   
    });
}

function updatedTime(){
    const date = new Date();
    let time = date.toLocaleTimeString();
    return time;
}

function updateDateTime(){
let dateTime=updatedDate();
let time=updatedTime();

document.querySelector("#datetime").innerHTML=dateTime+" | "+time;
}
setInterval(updateDateTime,1000);
updateDateTime();

function validateForm(event) {
    event.preventDefault(); 

    let isValid = true;

    
    let form = event.target;

    
    let typeError = form.querySelector("#typeerror");
    let genderError = form.querySelector("#gendererror");
    let compError = form.querySelector("#comperror");
    let fnameError = form.querySelector("#fnameerror");
    let lnameError = form.querySelector("#lnameerror");
    let emailError = form.querySelector("#emailerror");

    
    if (typeError) typeError.textContent = "";
    if (genderError) genderError.textContent = "";
    if (compError) compError.textContent = "";
    if (fnameError) fnameError.textContent = "";
    if (lnameError) lnameError.textContent = "";
    if (emailError) emailError.textContent = "";


    let typeSelected = form.querySelector('input[name="type"]:checked');
    if (!typeSelected && typeError) {
        typeError.textContent = " * Please select Dog or Cat";
        typeError.style.color = "red";
        isValid = false;
    }


    let genderSelected = form.querySelector('input[name="gender"]:checked');
    if (!genderSelected && genderError) {
        genderError.textContent = " * Please select a gender preference";
        genderError.style.color = "red";
        isValid = false;
    }

    
    let compatibilityChecked = form.querySelectorAll('input[name="compatibility"]:checked').length > 0;
    if (!compatibilityChecked && compError) {
        compError.textContent = " * Please select at least one compatibility option";
        compError.style.color = "red";
        isValid = false;
    }

    
    let firstName = form.querySelector("#fname") ? form.querySelector("#fname").value.trim() : "";
    if (firstName === "" && fnameError) {
        fnameError.textContent = " * First name is required";
        fnameError.style.color = "red";
        isValid = false;
    }

    
    let lastName = form.querySelector("#lname") ? form.querySelector("#lname").value.trim() : "";
    if (lastName === "" && lnameError) {
        lnameError.textContent = " * Last name is required";
        lnameError.style.color = "red";
        isValid = false;
    }

  
    let email = form.querySelector("#email") ? form.querySelector("#email").value.trim() : "";
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" && emailError) {
        emailError.textContent = " * Email is required";
        emailError.style.color = "red";
        isValid = false;
    } else if (!emailPattern.test(email) && emailError) {
        emailError.textContent = " * Enter a valid email address";
        emailError.style.color = "red";
        isValid = false;
    }

    
    if (isValid) {
        form.submit();
    }
}


let petForm1 = document.getElementById("petform"); 
let petForm2 = document.getElementById("pet-adoption-form"); 

if (petForm1) petForm1.addEventListener("submit", validateForm);
if (petForm2) petForm2.addEventListener("submit", validateForm);
