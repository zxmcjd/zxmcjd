<?php
	include './connect.php';
	
//	$category = isset($_GET['category']) ? $_GET['category'] : 'null';
//	$index = isset($_GET['index']) ? $_GET['index'] : 'null';
//	$qty = isset($_GET['qty']) ? $_GET['qty'] : 'null';
	//var_dump($category);
	//查找id
	//$sql = "select * from goods where category='$category'";
	//$sql = "select * from goods where id between 1 and 5";
	$sql = "select * from goods where category='subject' ";
	
	$result = $conn->query($sql);
	$row = $result->fetch_all(MYSQLI_ASSOC);
	//var_dump($row);
	
	// 根据分页截取数据
//	$res = array(
//		'data'=>array_slice($row, $index,$qty),
//		'total'=>count($row),
//		'qty'=>$qty
//	);
	//var_dump($res);
	
	echo json_encode($row,JSON_UNESCAPED_UNICODE);

	
	

	// 释放查询内存(销毁)
	//$result->free();

	//关闭连接
	$conn->close();
?>