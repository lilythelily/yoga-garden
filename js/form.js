"use strict";

const hamburger = document.querySelector(".hamburger-menu");
const menuPanel = document.querySelector("nav");
const closeBtn = document.querySelector(".close-btn");
const searchIcon1 = document.querySelector(".search-icon");
const headerLogo = document.querySelector(".header-logo");
const footerLogo = document.querySelector(".footer-logo");

// handle hamburger panel

hamburger.addEventListener("click", () => {
  menuPanel.classList.add("flex");
  menuPanel.style.marginTop = "32px";
});

closeBtn.addEventListener("click", () => {
  menuPanel.classList.remove("flex");
});

// search box handling

function resultPage() {
  location.href = "./search-results.php";
}

searchIcon1.addEventListener("click", resultPage);

// back to home

function toHome() {
  location.href = "./index.php";
}

headerLogo.addEventListener("click", toHome);
footerLogo.addEventListener("click", toHome);

// ---nav link control---

const nav = document.querySelector(".nav-ul");

function toOnline() {
  location.href = "./online.php";
}

nav.firstElementChild.addEventListener('click', toHome);
nav.lastElementChild.addEventListener('click', toOnline);


// ===form validation===

const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");
const input = document.querySelectorAll(".form-input");
const requiredFields = [input[0], input[1], input[3]];
const select = document.querySelector("select");
const regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
const thanks = document.querySelector(".thanks-modal");

let isValid = false;

// --- empty check ---

function errorDisplay(item) {
  item.classList.add("error-border");
  item.nextElementSibling.classList.add("block");
}

function hideError(item) {
  item.classList.remove("error-border");
  item.nextElementSibling.classList.remove("block");
}

function emptyCheck() {
  requiredFields.forEach((field) => {
    if (field.value == "") {
      errorDisplay(field);
      isValid = false;
    } else {
      isValid = true;
      hideError(field);
    }
  });
}

// --- email validation-- -
function emailValidation() {
  if (!regex.test(input[2].value.trim()) || input[2].value == "") {
    input[2].nextElementSibling.innerHTML = `Please enter a valid Email.`;
    errorDisplay(input[2]);
  } else {
    isValid = true;
    hideError(input[2]);
  }
}

// ---thanks modal---
function showModal() {
  thanks.style.display = "flex";
  setTimeout(() => {
    thanks.style.display = "none";
  }, 2000);
}

// --- selection check ---

function selectionCheck() {
  if (select.value == "") {
    select.nextElementSibling.classList.add("block");
    errorDisplay(select);
  } else {
    isValid = true;
    hideError(select);
  }
}

submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  emptyCheck();
  selectionCheck();
  emailValidation();
  console.log(isValid);
  if (isValid) {
    showModal();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emptyCheck();
  selectionCheck();
  emailValidation();
  console.log(isValid);
  if (isValid) {
    showModal();
  }
});
