<?php

error_reporting (E_ALL ^ E_NOTICE);
$post = (!empty($_POST)) ? true : false;

if($post){
	$name = stripslashes($_POST['firstname']);
	$to = "mamedovdenis87@gmail.com";
	$from =  $_POST['email'];
	$subject = " Новое сообщение от "  .stripslashes($_POST['firstname']) . " "  . stripslashes($_POST['lastname']) . " !";
    $message = htmlspecialchars($_POST['message']) . "\r\n" .  " Телефон: " . $_POST['phone'] . "\r\n" . "E-mail:" . $_POST['email'];
	$headers = 'From: ' . $from . "\r\n" .  
    'Reply-To: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
	$mail = mail($to, $subject, $message, $headers);

    if($mail){
		echo 'ok';
	}
	else{
	    echo "error";	
	}

}
?>
