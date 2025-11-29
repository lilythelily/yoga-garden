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


// === data population ===

const cardContainer = document.querySelector(".section__results-cards");

const onlineData = yogaData.filter((data) => data.onlineClass == 'Available');

onlineData.forEach((data) => {

const cardHTML = `
  <div class="section__cards-item">
            <a href="details.php">
            <div><img src="${data.imgUrl}" class="section__cards-img"></div>
            <p class="section__cards-title">${data.name}</p>
            <div class="location-fee">
            <p class="section__cards-location"><img src="./assets/icons/locator-gray.svg" alt="marker">${
              data.location
            }</p>
            <p class="section__cards-fee"><img src="./assets/icons/currency-coin-pound.svg" alt="pound">£${
              data.fee
            }/ hour</p></div>

<div class="tags-container">

<div class="tag-item" style = "${
  data.freeTrial == "Available" ? "display:flex;" : "display:none"
}">${data.freeTrial == "Available" ? "&#10003 Free Trial" : ""}</div>
  
  
  <div class="tag-item" style = "${
    data.onlineClass == "Available" ? "display:flex;" : "display:none"
  }">${data.onlineClass == "Available" ? "&#10003 Online Class" : ""}</div>
  
      <div class="tag-item" style = "${
        data.oneToone == "Available" ? "display:flex;" : "display:none"
      }">${data.oneToone == "Available" ? "&#10003 One to One" : ""}</div>
      
      <div class="tag-item" style = "${
        data.weekend == "Available" ? "display:flex;" : "display:none"
      }">${data.weekend == "Available" ? "&#10003 Weekend" : ""}</div>
            

        <div class="tag-item" style = "${
          data.weekday == "Available" ? "display:flex;" : "display:none"
        }">${data.weekday == "Available" ? "&#10003 Weekday" : ""}</div>

    <div class="tag-item" style = "${
      data.hotYoga == "Available" ? "display:flex;" : "display:none"
    }">${data.hotYoga == "Available" ? "&#10003 Hot Yoga" : ""}</div>
        </div>

        <button type="button" class="trial-btn">More<img src="./assets/icons/arrow-white.svg" alt="arrow"></button></div></a>
  `;
    cardContainer.innerHTML += cardHTML;
  });
