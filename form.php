
<?php

$name = "Eternity Yoga Studio";
$location = "Yokohama";
$class = "Day & Night";
$description = "Experienced Yoga instuctors walks you through from basic to advance."
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yoga Garden</title>
    <link rel="stylesheet" href="style.css">

    <nav>
        <img src="./assets/icons/x-outline.svg" alt="close" class="close-btn">
        <ul class="nav-ul">
            <li>Home<img src="./assets/icons/chevron-right.svg" alt="chevron"></li>
            <li>Online Classes<img src="./assets/icons/chevron-right.svg" alt="chevron"></li>
      
</ul>
    </nav>
</head>
<body>

<header class="details-header"><img src="./assets/logo.svg" alt="logo" class="header-logo">    <div class="input-icon">
    <input type="text" class="search-field" placeholder="Search"><div class="search-icon"></div></div>
<div class="search-icon-mobile"></div>
<div class="hamburger"><img src="./assets/icons/menu-03.svg" alt="menu" class="hamburger-menu"></div>
</header>

<main>
<form method="post" action="">

<div class="h1-card">
<h1 class="form-h1">Request a Free Trial</h1>

<div class="small-card">
    <div class="small-card-img"></div>
    <div class="name-location">
        <p class="small-card-name">Lotus Yoga Studio</p>
        <div class="small-card-location"><img src="./assets/icons/marker-02.svg" alt="locator">Wigan</div>
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
</form>
       



</main>


<footer>
    <img src="./assets/logo.svg" alt="logo" class="footer-logo">
    <p class="copyright">©2025 Yoga Garden All Rights Reserved</p>
</footer>
<script src="./js/form.js"></script>
</body>
</html>