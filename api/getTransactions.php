<?php
  include '../db.php';
 $userId=$_GET['user_id'];
 $query = $connection->prepare("SELECT * FROM transactions WHERE user_id = ?");
 $query->bind_param("i",$userId);
 $query->execute();
 $result=$query->get_result();

 $transactions = [];
 while($row=$result->fetch_assoc()){
    $transactions[]=$row;
 }

 echo json_encode($transactions);
?>