<?php
  include '../db.php';


    $data = json_decode(file_get_contents("php://input"), true);
    $name=$data['name'];

    $query=$connection->prepare("insert into users(name)values(?)");
    $query->bind_param("s",$name);
    $query->execute();

    echo json_encode(["message"=>"User added sucessfully","id"=>$connection->insert_id]);


?>