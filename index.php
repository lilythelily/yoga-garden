
<?php

require 'database.php';
$sql = "SELECT id, name, location, fee, imgUrl, address, hour, days, level, onlineClass, oneToone, freeTrial, instructor, weekend, weekday, hotYoga, instImg FROM studios";
$result = mysqli_query($conn, $sql);
$data = array();
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}

$jsonData = json_encode($data);


mysqli_close($conn);
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

<header><img src="./assets/logo.svg" alt="logo" class="header-logo">
<div class="hamburger"><img src="./assets/icons/menu-03.svg" alt="menu" class="hamburger-menu"></div>
</header>


<!-- ---hero--- -->
   
<div class="hero">
    <h1>Find Your Perfect Yoga Class</h1>


<div class="search-box">
    <div class="input-icon">
    <input type="text" class="location-search" placeholder="Search by Location"><div class="location-icon"></div><div class="search-icon"></div></div>

    <div class="input2-icon">
        <input type="text" class="keyword-search" placeholder="Search by Keyword"><div class="keyword-icon"></div><div class="search-icon2"></div></div>


</div></div>

<main>

<div class="no-results-modal"><img src="./assets/icons/no-results.svg" alt="no-results" class="no-icon"><p class="no-results-msg">No results found...</p></div>
    <section class="section__cards">

        
    </section>

    <!-- ---details display--- -->
    <section class="section__details"></section>



    <!-- ---FORM--- -->
     <form method="POST"> 
<div class="h1-card">
<h1 class="form-h1">Contact Form</h1>

<div class="small-card">
    <div class="small-card-img"></div>
    <div class="name-location">
        <p class="small-card-name"></p>
        <div class="small-card-location"><img src="./assets/icons/marker-02.svg" alt="locator"></div>
    </div>

</div></div>

<small>* Requied Fields</small><br>

<!-- input 1 -->
<div class="input-field">
<label for="firstname"><img src="./assets/icons/user-profile-02.svg" alt="profile">First Name<span>*</span></label>
    <input type="text" name="firstname" id="first-name" placeholder="Jane"  class="form-input">
  <p class="error">This field is required.</p>
</div>
  

    <!-- input 2 -->
<div class="input-field">
<label for="lastname"><img src="./assets/icons/user-profile-02.svg" alt="profile">Last Name<span>*</span></label>
    <input type="text" name="lastname" id="lastname" placeholder="Brown"  class="form-input">  <p class="error">This field is required.</p></div>

    <!-- input 3 -->
<div class="input-field">
<label for="email"><img src="./assets/icons/email-gray.svg" alt="email">Email<span>*</span></label>
    <input type="email" name="email" id="email" placeholder="jane@gmail.com" class="form-input">  <p class="error">This field is required.</p></div>

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
<label for="schedule"><img src="./assets/icons/calendar-02.svg" alt="calendar">Book a free trial<span>*</span></label>
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
    <!-- online class -->
    <section class="section__online">
        <div class="section__online-img"></div>
        <div class="h3-btn">
        <h3>Practice Yoga at Home?</h3>
        <button type="button" class="online-btn">Browse Online Classes<img src="./assets/icons/arrow-green.svg" alt="arrow"></button></div>
    </section>

</main>

<footer>
    <img src="./assets/logo.svg" alt="logo" class="footer-logo">
    <p class="copyright">©2025 Yoga Garden All Rights Reserved</p>
</footer>
<script>
    var yogaData = <?php echo $jsonData; ?>;
</script>
<script src="./js/main.js"></script>
</body>
</html>