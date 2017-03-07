<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="view/css/style.css">
        <link rel="stylesheet" href="view/css/fram/bootstrap.min.css">
		<link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
		<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
		<script src='view/js/popup.js'></script>
		<script src='view/js/ajax.js'></script>
        <title>Data_Project</title>
    </head>
    <body>
        <header>
            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 width="1920px" height="200px" viewBox="0 0 1920 200" enable-background="new 0 0 1920 200" xml:space="preserve" fill="blue">
	        <circle id="logo" cx="80" cy="80" r="50" fill="blue"  />
                <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                    <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="red">
                        <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="3s" repeatCount="indefinite" />
                    </path>
                </g>

                <path d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" />
            </svg>
        </header>
        <main>
           <?php include($page); ?>
        </main>
        <footer>



        </footer>
    </body>
</html>
