<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Header: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once 'config/database.php';
    include_once 'objects/user.php';

    $database = new Database();
    $db = $database->getConnection();

    $user = new User($db);

    $data = json_decode(file_get_contents("php://input"));

    $user->username = $data->username;
    $username_exists = $user->userExists();

    if($username_exists && password_verify($data->passkey, $user->passkey)) {
        http_response_code(200);
        echo json_encode(array("code" => "1", "message" => "Successful login"));
    } else {
        http_response_code(401);
        echo json_encode(array("code" => "0", "message" => "Login failed"));
    }

 ?>
