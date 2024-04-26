const form = document.getElementById("form");
const username = document.getElementById("username");
const fName = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");
const sCode = document.getElementById("schoolcode");


function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "input error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
   const formControl = input.parentElement;
   formControl.classList.add("success");
}

function checkRequired(inputArr) {
  
   inputArr.forEach(function (input) {
       if (input.value.trim() === "") {
           showError(input, `${getFieldName(input)} is required`);
}
      else {
       showSuccess(input);
}
});
}

function getFieldName(input) {
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLenghth(input, min, max) {
   if (input.value.length < min) {
       showError(input,`${getFieldName(input)} must be at least ${min} characters `
);
} else if (input.value.length > max) {
   showError(input,`${getFieldName(input)} must be less than ${max} characters`);
}
else {
   showSuccess(input);
}
}

function checkEmail(input) {
   const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (re.test(input.value.trim())) {
   showSuccess(input);
} else {
   showError(input, " Invalid Email");
}
}

function checkPasswordMatch(input1, input2) {
   if (input1.value !== input2.value) {
       showError(input2, "Passwords do not match");
}
}
form.addEventListener("submit", (e) => {
   e.preventDefault();
   checkRequired([username, email, password, cPassword, fName, sCode]);
   checkLenghth(username, 4, 15);
   checkLenghth(password, 8, 25);
   checkLenghth(sCode, 3, 3);
   checkEmail(email);
   checkPasswordMatch(password, cPassword);
});
