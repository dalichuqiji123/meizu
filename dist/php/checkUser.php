<?php
	header("content-type:text/html;charset=utf-8");
	$name=$_GET['username'];
	$conn=mysqli_connect('localhost','root','root','meizu');
	$result=mysqli_query($conn,"select * from vip where userId='{$name}'");
	mysqli_close($conn);
    $arr=mysqli_fetch_all($result,MYSQLI_ASSOC);
    // $arr=mysqli_rows_all($result);
	if(count($arr)==1){
		echo '1';
	}else{
		echo '0';
	}
?>