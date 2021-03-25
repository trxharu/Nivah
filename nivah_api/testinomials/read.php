<?php
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400'); 
    }
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
    }
    header("Content-Type: application/json; charset=UTF-8");

    include_once '../config/database.php';
    include_once '../objects/testinomials.php';

    $db = new Database();

    $testinomials = new Testinomials($db->getConnection());
    $stmt = $testinomials->read();

    if ($stmt->rowCount() > 0) {
            $testinomials_arr = array("code" => 1);
            $testinomials_arr["records"] = array();

            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $testinomial = array(
                    "id" => $id,
                    "client_name" => $client_name,
                    "description" => $description,
                    "img_name" => $img_name,
                    "img_ext" => $img_ext
                );

                array_push($testinomials_arr["records"], $testinomial);
            }
            http_response_code(200);
            echo json_encode($testinomials_arr);
    } else {
        http_response_code(404);
        echo json_encode(
            array("code" => 0, "message" => "No testinomials found.")
        );
    }
 ?>
