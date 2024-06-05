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
    <link rel="stylesheet" href="stile/spotify.css">
    <script src="script/spotify.js" defer></script>
    <title>H&M-Music</title>

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


    </nav>

 

    <article>
        <section>
            <div class="reparto">
            <a href="uomo.php">Uomo</a>
            <a href="donna.php">Donna</a>
            <a href="bambino.php">Bambino</a>
            </div>
           
        </section>
        
    </article>
    <div class="Spotify">
    <h1>Cosa vuoi ascoltare? Cerca ora!</h1>
    <section id="search">
      <form autocomplete="off">
        <div class="search">
          <label for='search'>Cerca</label>
          <input type='text' name="search" class="searchBar">
          <input type="submit" value="Cerca">
        </div>
      </form>

      </div>
    </section>
    <section class="container">

            <div id="results">
                
            </div>
    </section>

</div>

</body>



</html>