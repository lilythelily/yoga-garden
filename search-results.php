
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

<div class="results">
    <p class="results-for">Search results for:</p>
    <p class="results-output">Hot Yoga</p>
</div>
    <section class="section__results-cards">

    <!-- card1 -->
     <div class="section__cards-item"> <a href="details.php">
            <div class="section__cards-img"></div>
            <p class="section__cards-title">Lotus Yoga Studio</p>
            <div class="location-fee">
            <p class="section__cards-location"><img src="./assets/icons/locator-gray.svg" alt="marker">Wigan</p>
            <p class="section__cards-fee"><img src="./assets/icons/currency-coin-pound.svg" alt="pound">£15 / hour</p></div>

        <div class="tags-container">
            <div class="tag-item"><img src="./assets/icons/check-green.svg" alt="check">Free Trial</div>
             <div class="tag-item"><img src="./assets/icons/check-green.svg" alt="check">Free Trial</div>
             <div class="tag-item"><img src="./assets/icons/check-green.svg" alt="check">Free Trial</div>
             <div class="tag-item"><img src="./assets/icons/check-green.svg" alt="check">Free Trial</div>
             <div class="tag-item"><img src="./assets/icons/check-green.svg" alt="check">Free Trial</div>
             <div class="tag-item"><img src="./assets/icons/check-green.svg" alt="check">Free Trial</div>
        </div>

<button type="button" class="trial-btn">More<img src="./assets/icons/arrow-white.svg" alt="arrow"></button></div></a>

        <!-- card 2 -->

         <div class="section__cards-item"><a href="details.php">
            <div class="section__cards-img"></div>
            <p class="section__cards-title">Lotus Yoga Studio</p>
            <div class="location-fee">
            <p class="section__cards-location"><img src="./assets/icons/locator-gray.svg" alt="marker">Wigan</p>
            <p class="section__cards-fee"><img src="./assets/icons/currency-coin-pound.svg" alt="pound">£15 / hour</p></div>

        <div class="tags-container">
            <div class="tag-item"><img src="./assets/icons/check-green.svg" alt="check">Free Trial</div>
             <div class="tag-item"><img src="./assets/icons/check-green.svg" alt="check">Free Trial</div>
        </div>

        <button type="button" class="trial-btn">More<img src="./assets/icons/arrow-white.svg" alt="arrow"></button></div></a>


        <!-- --card3-- -->
         <div class="section__cards-item"><a href="details.php">
            <div class="section__cards-img"></div>
            <p class="section__cards-title">Lotus Yoga Studio</p>
            <div class="location-fee">
            <p class="section__cards-location"><img src="./assets/icons/locator-gray.svg" alt="marker">Wigan</p>
            <p class="section__cards-fee"><img src="./assets/icons/currency-coin-pound.svg" alt="pound">£15 / hour</p></div>

        <div class="tags-container">
            <div class="tag-item"><img src="./assets/icons/check-green.svg" alt="check">Free Trial</div>
             <div class="tag-item"><img src="./assets/icons/check-green.svg" alt="check">Free Trial</div>
        </div>

        <button type="button" class="trial-btn">More<img src="./assets/icons/arrow-white.svg" alt="arrow"></button></div></a>
    </section>


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
<script src="./js/search-results.js"></script>
</body>
</html>