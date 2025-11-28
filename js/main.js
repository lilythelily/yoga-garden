"use strict";

const hamburger = document.querySelector(".hamburger-menu");
const menuPanel = document.querySelector("nav");
const closeBtn = document.querySelector(".close-btn");
const locationSearch = document.querySelector(".location-search");
const keywordSearch = document.querySelector(".keyword-search");
const locationIcon = document.querySelector(".location-icon");
const keywordIcon = document.querySelector(".keyword-icon");
const searchIcon1 = document.querySelector(".search-icon");
const searchIcon2 = document.querySelector(".search-icon2");


// handle hamburger panel

hamburger.addEventListener("click", () => {
  menuPanel.classList.add("flex");
});

closeBtn.addEventListener("click", () => {
  menuPanel.classList.remove("flex");
});

// search box handling

locationSearch.addEventListener("click", () => {
  locationIcon.classList.add("hide");
});

keywordSearch.addEventListener("click", () => {
  keywordIcon.classList.add("hide");
});

function resultPage() {
  location.href = "./search-results.php";
}

searchIcon1.addEventListener("click", resultPage);
searchIcon2.addEventListener("click", resultPage);

// ---nav link control---

const nav = document.querySelector(".nav-ul");

function toHome() {
  location.href = "./index.php";
}
function toOnline() {
  location.href = "./online.php";
}

nav.firstElementChild.addEventListener('click', toHome);
nav.lastElementChild.addEventListener('click', toOnline);

// --- online link-- -

const onlineBtn = document.querySelector('.online-btn');

onlineBtn.addEventListener('click', toOnline);