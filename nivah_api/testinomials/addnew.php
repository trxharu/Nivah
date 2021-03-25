<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json; charset=UTF-8");

    include_once '../config/database.php';
    include_once '../objects/testinomials.php';

    $db = new Database();
    $testinomials = new Testinomials($db->getConnection());

    $name = $_FILES['picture']['name'];
    $target_dir = "../uploads/testinomials/";
    $img_ext = $_FILES['picture']['type'];
    $img_name = $_FILES['picture']['name'];

    $client_name = $_POST["cli_name"];
    $description = $_POST["description"];

    $upload = move_uploaded_file($_FILES['picture']['tmp_name'], $target_dir.$name);

    $testinomials->client_name = $client_name;
    $testinomials->description = $description;
    $testinomials->img_name = $img_name;
    $testinomials->img_ext = $img_ext;

    if($testinomials->create() && $upload) {
        http_response_code(200);
        echo json_encode(array(
                "code" => 1,
                "message" => "Successful Insert.",
                "data" => json_encode($data)
            ));
    } else {
        http_response_code(400);
        echo json_encode(array(
                "code" => 0,
                "message" => "Failed Insert."
            ));
    }
?>
