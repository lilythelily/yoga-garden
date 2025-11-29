
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

<header class="details-header"><img src="./assets/logo.svg" alt="logo" class="header-logo">    
<div class="hamburger"><img src="./assets/icons/menu-03.svg" alt="menu" class="hamburger-menu"></div>
</header>
   

<main>


  <!-- online class -->
    <section class="section__online" id="section__online-header">
        <div class="section__online-img"></div>
        <div class="h3-btn">
        <h3 id="section__online-h3">Practice Yoga at Home!</h3>

    </section>

    <section class="section__results-cards">


    </section>
    
 <!-- ---details display--- -->
    <section class="section__details"></section>


    <!-- ---FORM--- -->
     <form method="post">
</form>

  

</main>

<footer>
    <img src="./assets/logo.svg" alt="logo" class="footer-logo">
    <p class="copyright">©2025 Yoga Garden All Rights Reserved</p>
</footer>
<script>var yogaData = <?php echo $jsonData; ?>;</script>
<script src="./js/online.js"></script>
</body>
</html>