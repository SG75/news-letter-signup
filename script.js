"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
let modalUserEmail = document.querySelector(".modalUserEmail");
let userEmail = document.getElementById("userEmail");
let error = document.getElementById("errorMessage");

function validateEmail(email) {
  // A simple email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function submitForm() {
  // Get the user's email

  // Validate email
  if (!validateEmail(userEmail.value)) {
    userEmail.placeholder = userEmail.value;
    userEmail.style.border = "1px solid red";
    userEmail.style.color = "red";
    userEmail.style.backgroundColor = "#FFE8E6";
    error.classList.remove("hidden");
    return;
  }
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modalUserEmail.innerHTML = `<strong>${userEmail.value}</strong>`;
}

userEmail.addEventListener("input", function () {
  userEmail.placeholder = "";
  userEmail.style.border = "";
  userEmail.style.color = "";
  userEmail.style.backgroundColor = "";
  error.classList.add("hidden");
});

function dismissMsg() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
