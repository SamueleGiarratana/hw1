<?php 
  require_once 'auth.php';
  if (!$userid = checkAuth()) exit;
        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        $input = json_decode(file_get_contents('php://input'), true);
        $abbonamento=mysqli_real_escape_string($conn,$input['abbonamento']);

        if (isset($input['abbonamento'])) {
        $query = "UPDATE utente SET abbonamento = '$abbonamento' WHERE id = $userid";
        $res=mysqli_query($conn, $query);
        if (!$res) {
            echo 'errore';
        } else {
            echo 'ok';
        }
        mysqli_close($conn);
    }
  

         
?>