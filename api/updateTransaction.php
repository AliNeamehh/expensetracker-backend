<?php
include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'];
$description = $data['description'];
$amount = $data['amount'];
$type = $data['type'];

$query = $connection->prepare("UPDATE transactions SET description = ?, amount = ?, type = ? WHERE id = ?");
$query->bind_param("sdsi", $description, $amount, $type, $id);
$query->execute();

echo json_encode(["message" => "Transaction updated successfully"]);
?>
