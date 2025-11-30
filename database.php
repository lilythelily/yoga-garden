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

// === CREATE A TABLE ===

// $sql = "CREATE TABLE test (
//   item VARCHAR(200)
// )";

// if ($conn->query($sql) === TRUE) {
// echo "created";
// } else {
//  echo "Error: " . $sql . "<br>" . $conn->error;
// }

// === Delete a table ===
// $sql = "DROP TABLE form";

// if ($conn->query($sql) === TRUE) {
// echo "deleted";
// } else {
// echo "Error: " . $sql . "<br>" . $conn->error;
// }

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
// $sql = "INSERT INTO form (id, firstname, lastname, email, address, yogaskill, schedule, message) VALUES ('7','Tiim', 'Cyan', 'tim@gmail.com', '562 George Street Colchester CO14 1VH', 'Beginner', 'Dec 03 2025', '');";

// if ($conn->query($sql) === TRUE) {
// echo "added";
// } else {
//  echo "Error: " . $sql . "<br>" . $conn->error;
// }

// === Alter Table ===
// $sql = "ALTER TABLE form MODIFY id INT AUTO_INCREMENT PRIMARY KEY";

// if ($conn->query($sql) === TRUE) {
// echo "altered";
// } else {
// echo "Error: " . $sql . "<br>" . $conn->error;
// }

// === UPDATE DATA ===

// $sql = "UPDATE studios SET instructor = 'Jeremy Hirst' WHERE name='Sacred Balance Studio'";


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