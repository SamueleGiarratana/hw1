<?php
require_once 'auth.php';
if (!$userid = checkAuth()) {
    exit;
}

$conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
$userid = mysqli_real_escape_string($conn, $userid);
$query = "SELECT abbigliamento FROM carrello WHERE username = '$userid'";
$res = mysqli_query($conn, $query);

$prodotti = [];
while ($row = mysqli_fetch_assoc($res)) {
    $prodotti[] = $row;
}

echo json_encode($prodotti);
mysqli_close($conn);
?>
