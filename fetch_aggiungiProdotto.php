<?php 

  require_once 'auth.php';
  if (!$userid = checkAuth()) exit;

        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        $input = json_decode(file_get_contents('php://input'), true);
        $abbigliamento=mysqli_real_escape_string($conn,$input['abbigliamento']);

        
        $query = "INSERT INTO carrello(username, abbigliamento) VALUES('$userid','$abbigliamento')";
        $res=mysqli_query($conn, $query);
        if (!$res) {
            echo 'errore';
        } else {
            echo 'ok';
        }
        mysqli_close($conn);
    


?>