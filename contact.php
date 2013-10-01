<?php
$name = 	filter_var($_POST["name"], FILTER_SANITIZE_STRING);
$email = 	filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$message = 	filter_var($_POST["message"], FILTER_SANITIZE_STRING);
$spamTest = filter_var($_POST["phoneNumber"], FILTER_SANITIZE_STRING);

$headers = 'From: Wunder Labs <hello@wundering.com>' . "\r\n" .
   'Reply-To: hello@wundering.com' . "\r\n" .
   'X-Mailer: PHP/' . phpversion();


if($spamTest == '') {
	if($email != '') {
		if($name != '') {
	        $totalMessage = "Name: $name\n\n";
	        $totalMessage .= "Email: $email\n\n";
	        $totalMessage .= "Message: $message";
	    } else {
		        $totalMessage = "Someone sent you a message from the email: $email\n\n";
		        $totalMessage .= "Message: $message";
		}
	}
	else {
		$totalMessage = "Someone sent you a blank message from the email: $email";
	}
	
	if(mail("austnfox@gmail.com", "Wunder Labs Client: $name", $totalMessage)) {
		echo 'success';
	}
	else {
		echo 'failure';
	}
}
else {
	//hidden field has a value
	//probably means spambot
	
	echo 'spam';
}
?>
