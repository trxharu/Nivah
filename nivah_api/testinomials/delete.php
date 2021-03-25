<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json; charset=UTF-8");

    include_once '../config/database.php';
    include_once '../objects/testinomials.php';

    $db = new Database();
    $testinomials = new Testinomials($db->getConnection());

    $data = json_decode(file_get_contents("php://input"));

    $testinomials->id = $data->id;
    $stmt = $testinomials->readOne();
    if ($stmt->rowCount() > 0) {
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            unlink("../uploads/testinomials/".$img_name);
        }
    }

    if($testinomials->delete()) {
        http_response_code(200);
        echo json_encode(array(
                "code" => 1,
                "message" => "Successful Delete.",
                "data" => json_encode($data)
            ));
    } else {
        http_response_code(400);
        echo json_encode(array(
                "code" => 0,
                "message" => "Failed Delete."
            ));
    }
?>
