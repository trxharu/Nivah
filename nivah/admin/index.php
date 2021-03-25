
<?php
    session_start();
    $error = false;
    $message = "";
    if(isset($_POST['username']) && isset($_POST['passkey'])) {
        $username = $_POST['username'];
        $passkey = $_POST['passkey'];

        $url = "http://localhost/nivah_api/login.php";
        $payload = json_encode(array("username" => $username, "passkey" => $passkey));

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $res = json_decode(curl_exec($ch));
        curl_close($ch);
        if($res->code == 1) {
            $_SESSION['logged'] = 1;
            header("location: dashboard.php");
        } else {
            $error = true;
            $message = "Invalid username and password.";
        }
    }
 ?>


<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Nivah | Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico"/>
        <link rel="stylesheet" href="./style.css" type="text/css"/>
    </head>
    <body>
        <div class="login-panel">
            <div class="title">
                <img src="./assets/main_logo.png" width="52px" height="52px" alt="logo"/>
            </div>
            <h3>Admin login</h3>
            <?php
                if ($error) {
                    echo '<p class="error">'.$message.'</p>';
                }
            ?>
            <form action="" method="post">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required placeholder="Username" />
                <label for="password">Password</label>
                <input type="password" id="password" name="passkey" required placeholder="Password"/>
                <button id="submit" >LOG IN</button>
            </form>
        </div>
    </body>
</html>
