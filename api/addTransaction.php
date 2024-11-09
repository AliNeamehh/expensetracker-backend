<?php
  include '../db.php';
   $data = json_decode(file_get_contents("php://input"), true);
   $user_id = $data['user_id'];
   $description = $data['description'];
   $amount = $data['amount'];
    $type = $data['type'];

    $query=$connection->prepare("INSERT INTO transactions (user_id, description, amount, type) VALUES (?, ?, ?, ?)");
    $query->bind_param("isds", $user_id, $description, $amount, $type);
    $query->execute();
    
    echo json_encode(["message" => "Transaction added successfully", "id" => $connection->insert_id]);
   
?>