<?php
session_start();
$fname=$lname=$email=$Mobile='';
$fnameErr=$lnameErr=$emailErr=$MobileErr='';
/*$RequestErr='';*/
$flag=1;
$flagreq=0;

if($_SERVER["REQUEST_METHOD"] == "POST"){
	if(empty($_POST["fname"])){
		$fnameErr="First name is empty";
		$flag=0;
	}
	else{
		$fname=test_input($_POST["fname"]);
	}

	if(!preg_match("/^[a-zA-Z' ]*$/",$fname)){
		$fnameErr="Only alphabets and white spaces allowed";
		$flag=0;
	}
	
	if(empty($_POST["lname"])){
		$fnameErr="Last name is empty";
		$flag=0;
	}
	else{
		$lname=test_input($_POST["lname"]);
	}

	if(!preg_match("/^[a-zA-Z' ]*$/",$lname)){
		$lnameErr="Only alphabets and white spaces allowed";
		$flag=0;
	}

	if(empty($_POST["email"])){
		$emailErr="Email is empty";
		$flag=0;
	}
	else{
		$email=test_input($_POST["email"]);
	}

	if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		$emailErr="Valid email not entered";
		$flag=0;
	}

	if(empty($_POST["Mobile"])){
		$MobileErr="Mobile no. is empty";
		$flag=0;
	}
	else{
		$Mobile=test_input($_POST["Mobile"]);
	}

	if(!preg_match("/^[0-9]*$/",$Mobile)){
		$MobileErr="Only digits allowed";
		$flag=0;
	}

	$data="Name: ".$fname.$lname."\n".
	      "Email: ".$email."\n".
	      "Mobile No: ".$Mobile."\n\n";

	$file="form_submit.txt";
	$file_handle=fopen($file,'a');

	if($file_handle && $flag){
		fwrite($file_handle,$data);		
		fclose($file_handle);
		$flagreq=1;
		$_SESSION['Requestold']= "Data saved succesfully!";
	}
	elseif(!($file_handle)){
		$_SESSION['Requestold']= "Error while opening file";
	}
	else{}
}
else{
     /*	echo "Invalid Request method";*/
}
function test_input($data){
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}
if($flagreq==1){
	error_log($flagreq,0);
	$_SESSION['saved']=true;
	header('Location: http://localhost/index.php', true, 303);
	exit();

/*$fname=$lname=$email=$Mobile=null;
$fnameErr=$lnameErr=$emailErr=$MobileErr=null;*/
}
else{
	error_log($flagreq,0);
	$_SESSION=array();
}
?>

