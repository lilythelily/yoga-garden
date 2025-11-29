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
const headerLogo = document.querySelector(".header-logo");
const footerLogo = document.querySelector(".footer-logo");
const form = document.querySelector("form");
const noResults = document.querySelector(".no-results-modal");

function hide(item) {
  item.classList.add("hide");
}
function flex(item) {
  item.classList.add("flex");
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// handle hamburger panel

hamburger.addEventListener("click", () => {
  flex(menuPanel);
});

closeBtn.addEventListener("click", () => {
  flex(menuPanel);
});

// ---link control---

const nav = document.querySelector(".nav-ul");

function toHome() {
  location.href = "./index.php";
}
function toOnline() {
  location.href = "./online.php";
}

nav.firstElementChild.addEventListener("click", toHome);
nav.lastElementChild.addEventListener("click", toOnline);
headerLogo.addEventListener("click", toHome);
footerLogo.addEventListener("click", toHome);

// --- online link-- -

const onlineBtn = document.querySelector(".online-btn");

onlineBtn.addEventListener("click", toOnline);

// === default data population ===

const cardContainer = document.querySelector(".section__cards");
yogaData.forEach((data) => {
  const cardHTML = `
  <div class="section__cards-item">
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

        <button type="button" class="trial-btn">More<img src="./assets/icons/arrow-white.svg" alt="arrow"></button></div>
  `;
  cardContainer.innerHTML += cardHTML;
});

// -- location search --
searchIcon1.addEventListener("click", () => {
  const locationData = yogaData.filter((item) => {
    return item.location
      .toLowerCase()
      .includes(locationSearch.value.toLowerCase());
  });

  if (locationData.length == 0) {
    noResults.style.display = "flex";
  } else {
    noResults.style.display = "none";
  }
  
  cardContainer.innerHTML = "";
  locationData.forEach((data) => {
    const cardHTML = `
  <div class="section__cards-item">
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

        <button type="button" class="trial-btn trial-btn-location">More<img src="./assets/icons/arrow-white.svg" alt="arrow"></button></div>
  `;
    cardContainer.innerHTML += cardHTML;

    const moreBtnLocation = document.querySelectorAll(".trial-btn-location");

    moreBtnLocation.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        hide(cardContainer);
        hide(hero);
        hide(searchBox);
        hide(sectionOnline);
        hide(cardContainer);
        toTop();
        detailsContainer.classList.add("grid");
        const targetData = locationData[index];

        const detailsHTML = `
        <div class="section__details-left">
             <div class="section__details-img" style="background-image: url(${
               targetData.imgUrl
             })"></div>
<div class="social-container">
    <div class="social"><img src="./assets/icons/globe-03.svg" alt="globe"></div>
    <div class="social"><img src="./assets/icons/Instagram - Original.svg" alt="instagram"></div>
    <div class="social"><img src="./assets/icons/facebook.svg" alt="facebook"></div>
    <div class="social"><img src="./assets/icons/email.svg" alt="email"></div>
</div>

        <div class="section__details-tags">
           <div class="tag-item" style = "${
             targetData.freeTrial == "Available"
               ? "display:flex;"
               : "display:none"
           }">${
          targetData.freeTrial == "Available" ? "&#10003 Free Trial" : ""
        }</div>
  
  
  <div class="tag-item" style = "${
    targetData.onlineClass == "Available" ? "display:flex;" : "display:none"
  }">${
          targetData.onlineClass == "Available" ? "&#10003 Online Class" : ""
        }</div>
  
      <div class="tag-item" style = "${
        targetData.oneToone == "Available" ? "display:flex;" : "display:none"
      }">${targetData.oneToone == "Available" ? "&#10003 One to One" : ""}</div>
      
      <div class="tag-item" style = "${
        targetData.weekend == "Available" ? "display:flex;" : "display:none"
      }">${targetData.weekend == "Available" ? "&#10003 Weekend" : ""}</div>
            

        <div class="tag-item" style = "${
          targetData.weekday == "Available" ? "display:flex;" : "display:none"
        }">${targetData.weekday == "Available" ? "&#10003 Weekday" : ""}</div>

    <div class="tag-item" style = "${
      targetData.hotYoga == "Available" ? "display:flex;" : "display:none"
    }">${targetData.hotYoga == "Available" ? "&#10003 Hot Yoga" : ""}</div>
        </div>

        </div>

        <div class="section__details-right">
             <p class="section__details-title">${targetData.name}</p>
             <div class="description-container">

             <!-- item1 -->
             <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/locator-gray.svg" alt="marker">Address</p>
            <p class="section__details-desc">${targetData.address}</p></div>
          

  <!-- item2 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/clock-01.svg" alt="clock">Opening Hours</p>
            <p class="section__details-desc">${targetData.hour}</p></div>


  <!-- item3 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/calendar-02.svg" alt="calendar">Business Days</p>
            <p class="section__details-desc">${targetData.days}</p></div>


              <!-- item4 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/marker-01.svg" alt="marker">Level</p>
            <p class="section__details-desc">${targetData.level}</p></div>


              <!-- item5 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/computer.svg" alt="computer">Online Class</p>
            <p class="section__details-desc">${targetData.onlineClass}</p></div>


              <!-- item6 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/user-profile-02.svg" alt="profile">One to One</p>
            <p class="section__details-desc">${targetData.oneToone}</p></div>


              <!-- item7 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/currency-coin-pound.svg" alt="pound">Price/hour</p>
            <p class="section__details-desc">From £${targetData.fee}</p></div>


              <!-- item8 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/face-id-02.svg" alt="face">Free Trial</p>
            <p class="section__details-desc">${targetData.freeTrial}</p></div>


             

            <!-- ---- container ends ---- -->
              </div>

              <!-- instructor -->
               <div class="instructor-wrapper">
               <img src=${
                 targetData.instImg
               } alt="avatar" class="instructor-img">
               <div class="instructor-name">
                <p class="instructor">Instructor</p>
                <p class="instructor-name">${targetData.instructor}</p>
               </div></div>
           
              <button type="button" class="details-trialBtn">CONTACT<img src="./assets/icons/arrow-white.svg" alt="arrow"></button></section>
        </div>`;

        detailsContainer.innerHTML += detailsHTML;

        const contactBtn = document.querySelector(".details-trialBtn");

        // === FORM control ===

        contactBtn.addEventListener("click", () => {
          hide(detailsContainer);
          toTop();
          flex(form);
          form.innerHTML = `
<div class="h1-card">
<h1 class="form-h1">Request a Free Trial</h1>

<div class="small-card">
    <div class="small-card-img" style="background-image:url(${targetData.imgUrl})"></div>
    <div class="name-location">
        <p class="small-card-name">${targetData.name}</p>
        <div class="small-card-location"><img src="./assets/icons/marker-02.svg" alt="locator">${targetData.location}</div>
    </div>

</div></div>

<small>* Requied Fields</small><br>

<!-- input 1 -->
<div class="input-field">
<label for="first-name"><img src="./assets/icons/user-profile-02.svg" alt="profile">First Name<span>*</span></label>
    <input type="text" name="first-name" id="first-name" placeholder="Jane"  class="form-input">
  <p class="error">This field is required.</p>
</div>
  

    <!-- input 2 -->
<div class="input-field">
<label for="last-name"><img src="./assets/icons/user-profile-02.svg" alt="profile">Last Name<span>*</span></label>
    <input type="text" name="last-name" id="last-name" placeholder="Brown"  class="form-input">  <p class="error">This field is required.</p></div>

    <!-- input 3 -->
<div class="input-field">
<label for="email"><img src="./assets/icons/email-gray.svg" alt="email">Email<span>*</span></label>
    <input type="text" name="email" id="email" placeholder="jane@gmail.com" class="form-input">  <p class="error">This field is required.</p></div>

    <!-- input 4 -->
<div class="input-field">
<label for="address"><img src="./assets/icons/locator-gray.svg" alt="locator">Address<span>*</span></label>
    <input type="text" name="address" id="address" placeholder="1234 Green Road London"  class="form-input">  <p class="error">This field is required.</p></div>

    <!-- input 5 -->
<div class="input-field">
<label for="skill"><img src="./assets/icons/marker-01.svg" alt="flag">Yoga Skill Level</label>
    <input type="text" name="skill" id="skill" placeholder="Intermediate"  class="form-input"></div>

    <!-- input 6 -->
<div class="input-field">
<label for="schedule"><img src="./assets/icons/calendar-02.svg" alt="calendar">Please select<span>*</span></label>
<select name="schedule" id="schedule">  
<option value="">Please select</option>
    <option value="24 Nov">24 Nov 2025 | 09:30 - 10:30</option>
     <option value="24 Nov">24 Nov 2025 | 13:00 - 14:00</option>
      <option value="24 Nov">24 Nov 2025 | 20:00 - 21:00</option>
       <option value="26 Nov">26 Nov 2025 | 10:30 - 11:30</option>
        <option value="26 Nov">26 Nov 2025 | 14:00 - 15:00</option>
         <option value="27 Nov">27 Nov 2025 | 08:30 - 09:30</option>
          <option value="28 Nov">28 Nov 2025 | 19:00 - 20:00</option>
           <option value="28 Nov">28 Nov 2025 | 20:00 - 21:00</option></select>
<p class="error">Please select an option</p>
   </div>


    <!-- input 7 -->
<div class="input-field">
<label for="message"><img src="./assets/icons/feather-02.svg" alt="feather">Message</label>
    <textarea name="message" id="message" placeholder="Please enter your message" rows=5></textarea></div>


    <div class="btn-modal">
     <button type="click" class="submit-btn">Submit<img src="./assets/icons/send-01.svg" alt="send"></button>
<div class="thanks-modal">
    <p class="thanks-title">Thank you for your request!</p>
    <p class="thanks-small">We will get back to you ASAP.</p>
</div>
   
     </div>

      `;

          // ===form validation===

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
        });
      });
    });
  });
});

// -- keyword search --

searchIcon2.addEventListener("click", () => {
  const keywordData = yogaData.filter((item) => {
    return (
      item.name.toLowerCase().includes(keywordSearch.value.toLowerCase()) ||
      item.location.toLowerCase().includes(keywordSearch.value.toLowerCase()) ||
      item.instructor.toLowerCase().includes(keywordSearch.value.toLowerCase())
    );
  });

    if (keywordData.length == 0) {
      noResults.style.display = "flex";
    } else {
      noResults.style.display = "none";
    }
  cardContainer.innerHTML = "";
  keywordData.forEach((data) => {
    const cardHTML = `
  <div class="section__cards-item">
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

        <button type="button" class="trial-btn trial-btn-kw">More<img src="./assets/icons/arrow-white.svg" alt="arrow"></button></div>
  `;
    cardContainer.innerHTML += cardHTML;
    const moreBtnKW = document.querySelectorAll(".trial-btn-kw");

    moreBtnKW.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        hide(cardContainer);
        hide(hero);
        hide(searchBox);
        hide(sectionOnline);
        hide(cardContainer);
        toTop();
        detailsContainer.classList.add("grid");
        const targetData = keywordData[index];

        const detailsHTML = `
        <div class="section__details-left">
             <div class="section__details-img" style="background-image: url(${
               targetData.imgUrl
             })"></div>
<div class="social-container">
    <div class="social"><img src="./assets/icons/globe-03.svg" alt="globe"></div>
    <div class="social"><img src="./assets/icons/Instagram - Original.svg" alt="instagram"></div>
    <div class="social"><img src="./assets/icons/facebook.svg" alt="facebook"></div>
    <div class="social"><img src="./assets/icons/email.svg" alt="email"></div>
</div>

        <div class="section__details-tags">
           <div class="tag-item" style = "${
             targetData.freeTrial == "Available"
               ? "display:flex;"
               : "display:none"
           }">${
          targetData.freeTrial == "Available" ? "&#10003 Free Trial" : ""
        }</div>
  
  
  <div class="tag-item" style = "${
    targetData.onlineClass == "Available" ? "display:flex;" : "display:none"
  }">${
          targetData.onlineClass == "Available" ? "&#10003 Online Class" : ""
        }</div>
  
      <div class="tag-item" style = "${
        targetData.oneToone == "Available" ? "display:flex;" : "display:none"
      }">${targetData.oneToone == "Available" ? "&#10003 One to One" : ""}</div>
      
      <div class="tag-item" style = "${
        targetData.weekend == "Available" ? "display:flex;" : "display:none"
      }">${targetData.weekend == "Available" ? "&#10003 Weekend" : ""}</div>
            

        <div class="tag-item" style = "${
          targetData.weekday == "Available" ? "display:flex;" : "display:none"
        }">${targetData.weekday == "Available" ? "&#10003 Weekday" : ""}</div>

    <div class="tag-item" style = "${
      targetData.hotYoga == "Available" ? "display:flex;" : "display:none"
    }">${targetData.hotYoga == "Available" ? "&#10003 Hot Yoga" : ""}</div>
        </div>

        </div>

        <div class="section__details-right">
             <p class="section__details-title">${targetData.name}</p>
             <div class="description-container">

             <!-- item1 -->
             <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/locator-gray.svg" alt="marker">Address</p>
            <p class="section__details-desc">${targetData.address}</p></div>
          

  <!-- item2 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/clock-01.svg" alt="clock">Opening Hours</p>
            <p class="section__details-desc">${targetData.hour}</p></div>


  <!-- item3 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/calendar-02.svg" alt="calendar">Business Days</p>
            <p class="section__details-desc">${targetData.days}</p></div>


              <!-- item4 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/marker-01.svg" alt="marker">Level</p>
            <p class="section__details-desc">${targetData.level}</p></div>


              <!-- item5 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/computer.svg" alt="computer">Online Class</p>
            <p class="section__details-desc">${targetData.onlineClass}</p></div>


              <!-- item6 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/user-profile-02.svg" alt="profile">One to One</p>
            <p class="section__details-desc">${targetData.oneToone}</p></div>


              <!-- item7 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/currency-coin-pound.svg" alt="pound">Price/hour</p>
            <p class="section__details-desc">From £${targetData.fee}</p></div>


              <!-- item8 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/face-id-02.svg" alt="face">Free Trial</p>
            <p class="section__details-desc">${targetData.freeTrial}</p></div>


             

            <!-- ---- container ends ---- -->
              </div>

              <!-- instructor -->
               <div class="instructor-wrapper">
               <img src=${
                 targetData.instImg
               } alt="avatar" class="instructor-img">
               <div class="instructor-name">
                <p class="instructor">Instructor</p>
                <p class="instructor-name">${targetData.instructor}</p>
               </div></div>
           
              <button type="button" class="details-trialBtn">CONTACT<img src="./assets/icons/arrow-white.svg" alt="arrow"></button></section>
        </div>`;

        detailsContainer.innerHTML += detailsHTML;

        const contactBtn = document.querySelector(".details-trialBtn");

        // === FORM control ===

        contactBtn.addEventListener("click", () => {
          hide(detailsContainer);
          toTop();
          flex(form);
          form.innerHTML = `
<div class="h1-card">
<h1 class="form-h1">Request a Free Trial</h1>

<div class="small-card">
    <div class="small-card-img" style="background-image:url(${targetData.imgUrl})"></div>
    <div class="name-location">
        <p class="small-card-name">${targetData.name}</p>
        <div class="small-card-location"><img src="./assets/icons/marker-02.svg" alt="locator">${targetData.location}</div>
    </div>

</div></div>

<small>* Requied Fields</small><br>

<!-- input 1 -->
<div class="input-field">
<label for="first-name"><img src="./assets/icons/user-profile-02.svg" alt="profile">First Name<span>*</span></label>
    <input type="text" name="first-name" id="first-name" placeholder="Jane"  class="form-input">
  <p class="error">This field is required.</p>
</div>
  

    <!-- input 2 -->
<div class="input-field">
<label for="last-name"><img src="./assets/icons/user-profile-02.svg" alt="profile">Last Name<span>*</span></label>
    <input type="text" name="last-name" id="last-name" placeholder="Brown"  class="form-input">  <p class="error">This field is required.</p></div>

    <!-- input 3 -->
<div class="input-field">
<label for="email"><img src="./assets/icons/email-gray.svg" alt="email">Email<span>*</span></label>
    <input type="text" name="email" id="email" placeholder="jane@gmail.com" class="form-input">  <p class="error">This field is required.</p></div>

    <!-- input 4 -->
<div class="input-field">
<label for="address"><img src="./assets/icons/locator-gray.svg" alt="locator">Address<span>*</span></label>
    <input type="text" name="address" id="address" placeholder="1234 Green Road London"  class="form-input">  <p class="error">This field is required.</p></div>

    <!-- input 5 -->
<div class="input-field">
<label for="skill"><img src="./assets/icons/marker-01.svg" alt="flag">Yoga Skill Level</label>
    <input type="text" name="skill" id="skill" placeholder="Intermediate"  class="form-input"></div>

    <!-- input 6 -->
<div class="input-field">
<label for="schedule"><img src="./assets/icons/calendar-02.svg" alt="calendar">Please select<span>*</span></label>
<select name="schedule" id="schedule">  
<option value="">Please select</option>
    <option value="24 Nov">24 Nov 2025 | 09:30 - 10:30</option>
     <option value="24 Nov">24 Nov 2025 | 13:00 - 14:00</option>
      <option value="24 Nov">24 Nov 2025 | 20:00 - 21:00</option>
       <option value="26 Nov">26 Nov 2025 | 10:30 - 11:30</option>
        <option value="26 Nov">26 Nov 2025 | 14:00 - 15:00</option>
         <option value="27 Nov">27 Nov 2025 | 08:30 - 09:30</option>
          <option value="28 Nov">28 Nov 2025 | 19:00 - 20:00</option>
           <option value="28 Nov">28 Nov 2025 | 20:00 - 21:00</option></select>
<p class="error">Please select an option</p>
   </div>


    <!-- input 7 -->
<div class="input-field">
<label for="message"><img src="./assets/icons/feather-02.svg" alt="feather">Message</label>
    <textarea name="message" id="message" placeholder="Please enter your message" rows=5></textarea></div>


    <div class="btn-modal">
     <button type="click" class="submit-btn">Submit<img src="./assets/icons/send-01.svg" alt="send"></button>
<div class="thanks-modal">
    <p class="thanks-title">Thank you for your request!</p>
    <p class="thanks-small">We will get back to you ASAP.</p>
</div>
   
     </div>

      `;

          // ===form validation===

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
        });
      });
    });
  });
});

locationSearch.addEventListener("click", () => {
  hide(locationIcon);
});

keywordSearch.addEventListener("click", () => {
  hide(keywordIcon);
});

// === display details ===

const trialBtns = document.querySelectorAll(".trial-btn");
const hero = document.querySelector(".hero");
const searchBox = document.querySelector(".search-box");
const sectionOnline = document.querySelector(".section__online");
const detailsContainer = document.querySelector(".section__details");

trialBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    hide(cardContainer);
    hide(hero);
    hide(searchBox);
    hide(sectionOnline);
    hide(cardContainer);
    toTop();
    detailsContainer.classList.add("grid");
    const targetData = yogaData[index];

    const detailsHTML = `
        <div class="section__details-left">
             <div class="section__details-img" style="background-image: url(${
               targetData.imgUrl
             })"></div>
<div class="social-container">
    <div class="social"><img src="./assets/icons/globe-03.svg" alt="globe"></div>
    <div class="social"><img src="./assets/icons/Instagram - Original.svg" alt="instagram"></div>
    <div class="social"><img src="./assets/icons/facebook.svg" alt="facebook"></div>
    <div class="social"><img src="./assets/icons/email.svg" alt="email"></div>
</div>

        <div class="section__details-tags">
           <div class="tag-item" style = "${
             targetData.freeTrial == "Available"
               ? "display:flex;"
               : "display:none"
           }">${
      targetData.freeTrial == "Available" ? "&#10003 Free Trial" : ""
    }</div>
  
  
  <div class="tag-item" style = "${
    targetData.onlineClass == "Available" ? "display:flex;" : "display:none"
  }">${
      targetData.onlineClass == "Available" ? "&#10003 Online Class" : ""
    }</div>
  
      <div class="tag-item" style = "${
        targetData.oneToone == "Available" ? "display:flex;" : "display:none"
      }">${targetData.oneToone == "Available" ? "&#10003 One to One" : ""}</div>
      
      <div class="tag-item" style = "${
        targetData.weekend == "Available" ? "display:flex;" : "display:none"
      }">${targetData.weekend == "Available" ? "&#10003 Weekend" : ""}</div>
            

        <div class="tag-item" style = "${
          targetData.weekday == "Available" ? "display:flex;" : "display:none"
        }">${targetData.weekday == "Available" ? "&#10003 Weekday" : ""}</div>

    <div class="tag-item" style = "${
      targetData.hotYoga == "Available" ? "display:flex;" : "display:none"
    }">${targetData.hotYoga == "Available" ? "&#10003 Hot Yoga" : ""}</div>
        </div>

        </div>

        <div class="section__details-right">
             <p class="section__details-title">${targetData.name}</p>
             <div class="description-container">

             <!-- item1 -->
             <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/locator-gray.svg" alt="marker">Address</p>
            <p class="section__details-desc">${targetData.address}</p></div>
          

  <!-- item2 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/clock-01.svg" alt="clock">Opening Hours</p>
            <p class="section__details-desc">${targetData.hour}</p></div>


  <!-- item3 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/calendar-02.svg" alt="calendar">Business Days</p>
            <p class="section__details-desc">${targetData.days}</p></div>


              <!-- item4 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/marker-01.svg" alt="marker">Level</p>
            <p class="section__details-desc">${targetData.level}</p></div>


              <!-- item5 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/computer.svg" alt="computer">Online Class</p>
            <p class="section__details-desc">${targetData.onlineClass}</p></div>


              <!-- item6 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/user-profile-02.svg" alt="profile">One to One</p>
            <p class="section__details-desc">${targetData.oneToone}</p></div>


              <!-- item7 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/currency-coin-pound.svg" alt="pound">Price/hour</p>
            <p class="section__details-desc">From £${targetData.fee}</p></div>


              <!-- item8 -->
                         <div class="icon-desc">
            <p class="section__details-icon"><img src="./assets/icons/face-id-02.svg" alt="face">Free Trial</p>
            <p class="section__details-desc">${targetData.freeTrial}</p></div>


             

            <!-- ---- container ends ---- -->
              </div>

              <!-- instructor -->
               <div class="instructor-wrapper">
               <img src=${
                 targetData.instImg
               } alt="avatar" class="instructor-img">
               <div class="instructor-name">
                <p class="instructor">Instructor</p>
                <p class="instructor-name">${targetData.instructor}</p>
               </div></div>
           
              <button type="button" class="details-trialBtn">CONTACT<img src="./assets/icons/arrow-white.svg" alt="arrow"></button></section>
        </div>`;

    detailsContainer.innerHTML += detailsHTML;

    const contactBtn = document.querySelector(".details-trialBtn");

    // === FORM control ===

    contactBtn.addEventListener("click", () => {
      hide(detailsContainer);
      toTop();
      flex(form);
      form.innerHTML = `
<div class="h1-card">
<h1 class="form-h1">Request a Free Trial</h1>

<div class="small-card">
    <div class="small-card-img" style="background-image:url(${targetData.imgUrl})"></div>
    <div class="name-location">
        <p class="small-card-name">${targetData.name}</p>
        <div class="small-card-location"><img src="./assets/icons/marker-02.svg" alt="locator">${targetData.location}</div>
    </div>

</div></div>

<small>* Requied Fields</small><br>

<!-- input 1 -->
<div class="input-field">
<label for="first-name"><img src="./assets/icons/user-profile-02.svg" alt="profile">First Name<span>*</span></label>
    <input type="text" name="first-name" id="first-name" placeholder="Jane"  class="form-input">
  <p class="error">This field is required.</p>
</div>
  

    <!-- input 2 -->
<div class="input-field">
<label for="last-name"><img src="./assets/icons/user-profile-02.svg" alt="profile">Last Name<span>*</span></label>
    <input type="text" name="last-name" id="last-name" placeholder="Brown"  class="form-input">  <p class="error">This field is required.</p></div>

    <!-- input 3 -->
<div class="input-field">
<label for="email"><img src="./assets/icons/email-gray.svg" alt="email">Email<span>*</span></label>
    <input type="text" name="email" id="email" placeholder="jane@gmail.com" class="form-input">  <p class="error">This field is required.</p></div>

    <!-- input 4 -->
<div class="input-field">
<label for="address"><img src="./assets/icons/locator-gray.svg" alt="locator">Address<span>*</span></label>
    <input type="text" name="address" id="address" placeholder="1234 Green Road London"  class="form-input">  <p class="error">This field is required.</p></div>

    <!-- input 5 -->
<div class="input-field">
<label for="skill"><img src="./assets/icons/marker-01.svg" alt="flag">Yoga Skill Level</label>
    <input type="text" name="skill" id="skill" placeholder="Intermediate"  class="form-input"></div>

    <!-- input 6 -->
<div class="input-field">
<label for="schedule"><img src="./assets/icons/calendar-02.svg" alt="calendar">Please select<span>*</span></label>
<select name="schedule" id="schedule">  
<option value="">Please select</option>
    <option value="24 Nov">24 Nov 2025 | 09:30 - 10:30</option>
     <option value="24 Nov">24 Nov 2025 | 13:00 - 14:00</option>
      <option value="24 Nov">24 Nov 2025 | 20:00 - 21:00</option>
       <option value="26 Nov">26 Nov 2025 | 10:30 - 11:30</option>
        <option value="26 Nov">26 Nov 2025 | 14:00 - 15:00</option>
         <option value="27 Nov">27 Nov 2025 | 08:30 - 09:30</option>
          <option value="28 Nov">28 Nov 2025 | 19:00 - 20:00</option>
           <option value="28 Nov">28 Nov 2025 | 20:00 - 21:00</option></select>
<p class="error">Please select an option</p>
   </div>


    <!-- input 7 -->
<div class="input-field">
<label for="message"><img src="./assets/icons/feather-02.svg" alt="feather">Message</label>
    <textarea name="message" id="message" placeholder="Please enter your message" rows=5></textarea></div>


    <div class="btn-modal">
     <button type="click" class="submit-btn">Submit<img src="./assets/icons/send-01.svg" alt="send"></button>
<div class="thanks-modal">
    <p class="thanks-title">Thank you for your request!</p>
    <p class="thanks-small">We will get back to you ASAP.</p>
</div>
   
     </div>

      `;

      // ===form validation===

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
    });
  });
});
