<?php

    $files=array(
        array(
            "titolo"=>"3 Mesi",
            "immagine"=>"stile/img/mese1.jpg"
        ),
        array(
            "titolo"=>"6 Mesi ",
            "immagine"=>"stile/img/mese2.jpg"
        ),
        array(
            "titolo"=>"12 Month ",
            "immagine"=>"stile/img/mese3.jpg"
        ),
    );

    echo json_encode($files);
?>