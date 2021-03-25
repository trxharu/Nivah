<?php
    session_start();
    if(!isset($_SESSION["logged"])){
        header("location: index.php");
    }

    if(isset($_POST["signout"])) {
        session_destroy();
        header("location: index.php");
    }

 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./dashboard_style.css" type="text/css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <title>Nivah | Dashboard</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Dashboard</a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            </div>
            </div>
            <form action="" method="post">
                <input type="submit" name="signout" class="btn btn-danger" value="Sign Out"/>
            </form>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-4 col-md-4 sidebar">
                <ul>
                    <li><a href="dashboard.php?page=testinomial">Testinomials</a></li>
                </ul>
            </div>
            <div class="col-md-8 main">
                <?php
                    if(isset($_GET["page"])) {

                        switch ($_GET["page"]) {
                            case 'testinomial':
                                require_once("./comps/testinomials.php");
                                break;
                            default:
                                break;
                        }
                    } else {
                        require_once("./comps/testinomials.php");
                    }
                 ?>
            </div>
        </div>
    </div>
    <script src="app.js"></script>
    </body>
</html>
