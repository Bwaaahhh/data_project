<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="view/css/fram/bootstrap.min.css">
        <link rel="stylesheet" href="view/css/style.css">
		<link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
		<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
		<script src='view/js/popup.js'></script>
		<script src='view/js/ajax.js'></script>
        <script type="text/javascript" src="view/js/js.js"></script>
        <title>Data_Project</title>


        <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
        <link rel="manifest" href="favicon/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
    </head>
    <body>
        <header>
          <div class="container">
            <div class="row">
              <div class="col-md-2" id="logo">
                  <img src="view/images/plan.svg" alt="logo">
              </div>
              <div class="col-md-2 offset-md-2 ">
                <h1>ExoLook</h1>
              </div>
              <div class="col-md-3 offset-md-2">
                <div id="zoneRecherche">
                  <input id="recherche" type="search" placeholder="Rechercher une planete">
                  <div class="resultRecherche" id="resultRecherche">

                  </div>
                </div>
              </div>
            </div>



        </header>
        <main>
           <?php include($page); ?>
        </main>
        <footer>



        </footer>
       </div>
    </body>
</html>
