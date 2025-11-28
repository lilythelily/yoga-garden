"use strict";

const hamburger = document.querySelector(".hamburger-menu");
const menuPanel = document.querySelector("nav");
const closeBtn = document.querySelector(".close-btn");
const searchIcon1 = document.querySelector(".search-icon");
const trialBtn = document.querySelector(".details-trialBtn");
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

// trial button

function toForm() {
  location.href = "./form.php";
}

trialBtn.addEventListener('click', toForm);

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

// --- online link-- -

const onlineBtn = document.querySelector('.online-btn');

onlineBtn.addEventListener('click', toOnline);