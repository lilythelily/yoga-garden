<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "yogaDB";

$conn = new mysqli($host, $username, $password, $database);

if($conn->connect_error){
  die("Connection failed:" . $conn->connect_error);
}
// echo "Connected Successfully";

// === DELETE DATA ===

// $idsToDelete = [3, 7];

// foreach ($idsToDelete as $id) {
//     $sql = "DELETE FROM studios WHERE id = '$id'";

//     if ($conn->query($sql) === TRUE) {
//         echo "Record with ID $id deleted successfully<br>";
//     } else {
//         echo "Error deleting record with ID $id: " . $conn->error . "<br>";
//     }
// }

// === INSERT NEW DATA ===
// $sql = "INSERT INTO studios (id, name, location, fee, imgUrl, address, hour, days, level, onlineClass, oneToone, freeTrial, instructor, weekend, weekday, hotYoga, instImg) VALUES ('7', 'Oneness Yoga Studio', 'Luton', '12', 'https://res.cloudinary.com/djo3dd9eh/image/upload/v1764205620/yoga-class7_kqyffb.jpg', '818 St. John’s Road\nLuton\nLU55 7UG', '09:00 - 17:00', 'Mon to Sun', 'Beginner Friendly', 'Available', 'Available', 'Available', 'Frederika Skinner', 'Available', 'Available', 'Not Available', 'https://res.cloudinary.com/djo3dd9eh/image/upload/v1764205614/instructor7_kti9me.jpg');";

// === UPDATE DATA ===

// $sql = "UPDATE studios SET imgUrl = 'https://res.cloudinary.com/djo3dd9eh/image/upload/v1764205620/yoga-class5_th1o67.jpg

// ' WHERE name='Awakening Yoga'";


// if ($conn->query($sql) === TRUE) {
//   echo "success";
// } else {
//   echo "Error: " . $sql . "<br>" . $conn->error;
// }


// $sql1 = "SELECT * FROM studios";
// $result = $conn->query($sql1);

// if($result->num_rows > 0){
//   echo 'data found <br>';
//   while($row = $result->fetch_assoc()){
//     echo "ID: " . $row["id"]. ", Name: " . $row["name"]. ", Location: " . $row["location"]. "<br>";
//   }
// }else{
//   echo 'no data found';
// }

// ---- close connection ---

// $conn->close();
?>