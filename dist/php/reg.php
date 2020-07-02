<?php
header("content-type:text/html;charset=utf-8");
	$name=$_POST['username'];
	$pass=$_POST['userpass'];
	$conn=mysqli_connect("localhost","root","root","meizu");
	$result=mysqli_query($conn,"insert into vip(userId,userPass) 
	value ('".$name."','".$pass."')");
	mysqli_close($conn);
	if($result){
		echo '1';
	}else{
		echo '0';
	}
?>