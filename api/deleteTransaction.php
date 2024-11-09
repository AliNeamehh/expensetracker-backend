<?php
include '../db.php';

$transactionId = $_GET['id'];
$query = $connection->prepare("DELETE FROM transactions WHERE id = ?");
$query->bind_param("i", $transactionId);
$query->execute();

echo json_encode(["message" => "Transaction deleted successfully"]);
?>
