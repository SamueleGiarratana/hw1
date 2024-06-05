<?php 
    require_once 'auth.php';
    if (!$userid = checkAuth()) {
        header("Location: login.php");
        exit;
    }
?>




<html>
<?php 
        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        $userid = mysqli_real_escape_string($conn, $userid);
        $query = "SELECT * FROM utente WHERE id = $userid";
        $res_1 = mysqli_query($conn, $query);
        $userinfo = mysqli_fetch_assoc($res_1);   
    ?>
<head>

<link href="https://fonts.googleapis.com/css2?family=Viaoda+Libre&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Homenaje&family=Meie+Script&family=Oswald:wght@200..700&display=swap" rel="stylesheet">
    <meta name="viewpoint" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="stile/uomo.css">
    <script src="script/uomo.js" defer></script>
    <title>H&M</title>

</head>

<body>
<img src="stile/img/H&M.png">
    <header>
    <div id='overlay'>
    </div>

    <nav>

        <div id="link">
            
            <a href="home.php">Home</a>
            <a href="account.php">Account</a>
            <a href="carrello.php">Carrello</a>
            <a href='logout.php'>Logout</a>
        </div>

        <div id="menu">
          <div></div>
          <div></div>
          <div></div>
        
    </nav>

    <h1>Benvenuto nella sezione Uomo!</h1>
    

    </header>
    
    <article>
    <section id='lista_prodotti'>
        
    </section>

</article>





    <footer>
        <div class="footer-container">
            <div class="footer-col">
                <p><strong>REPARTO</strong></p>
                <p>Uomo</p>
                <p>Donna</p>
                <p>Bambino</p>
            </div>

            <div class="footer-col">
            <p><strong>AIUTO</strong></p>
            <p>Servizio clienti</p>
            <p>Contattaci</p>
            <p>Nota legale e privacy</p>
            </div>

            <div class="footer-col">
                <p><strong>AZIENDA</strong></p>
                <p>Carriere in H&M</p>
                <p>Sostenibilità H&M Group</p>
                <p>Materiale Stampa</p>
            </div>
        </div>
    </footer>




</body>








</html>