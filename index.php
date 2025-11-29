
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
   
<div class="hero">
    <h1>Find Your Perfect Yoga Class</h1>
    <!-- <h2>Cultivate your <br>inner peace</h2> -->


<div class="search-box">
    <div class="input-icon">
    <input type="text" class="location-search" placeholder="Search by Location"><div class="location-icon"></div><div class="search-icon"></div></div>

    <div class="input2-icon">
        <input type="text" class="keyword-search" placeholder="Search by Keyword"><div class="keyword-icon"></div><div class="search-icon2"></div></div>


</div></div>

<main>
    <section class="section__cards">

    <!-- card1 -->
     
        <!-- <div class="section__cards-item">
            <a href="details.php">
            <div><img src="" class="section__cards-img"></div>
            <p class="section__cards-title"></p>
            <div class="location-fee">
            <p class="section__cards-location"><img src="./assets/icons/locator-gray.svg" alt="marker"></p>
            <p class="section__cards-fee"><img src="./assets/icons/currency-coin-pound.svg" alt="pound">£ / hour</p></div>

        <div class="tags-container">
            <div class="tag-item"><img src="./assets/icons/check-green.svg" alt="check">Free Trial</div>
            
        </div>

        <button type="button" class="trial-btn">More<img src="./assets/icons/arrow-white.svg" alt="arrow"></button></div></a> -->

        
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
<script>
    var yogaData = <?php echo $jsonData; ?>;
</script>
<script src="./js/main.js"></script>
</body>
</html>