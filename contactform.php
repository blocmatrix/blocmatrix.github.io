<?php

require __DIR__ .'/phpmail/class.phpmailer.php';
require __DIR__ .'/phpmail/class.smtp.php';

$error = '';
$name = '';
$email = '';
$message = '';
if($_SERVER["REQUEST_METHOD"] == "POST") {
	if(empty($_POST["Username"]))
	 {
	  $error .= 'Please Enter your Name';
	 }
	 else
	 {
	  $name = clean_text($_POST["Username"]);
	  if(!preg_match("/^[a-zA-Z ]*$/",$name))
	  {
	   $error .= 'Only letters and white space allowed';
	  }
	 }
	// email
	if(empty($_POST["Email"]))
	 {
	  $error .= 'Please Enter your Email';
	 }
	 else
	 {
	  $email = clean_text($_POST["Email"]);
	  if(!filter_var($email, FILTER_VALIDATE_EMAIL))
	  {
	   $error .= 'Invalid email format';
	  }
	 }
	// message
	if(empty($_POST["Message"]))
	 {
	  $error .= '<p><label class="text-danger">Message is required</label></p>';
	 }
	 else
	 {
	  $message = clean_text($_POST["Message"]);
	 }
}
else {
	echo "form not submited yet";
	
}

if($error == ""){
		
	$mail = new PHPMailer;
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.zoho.com';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'support@blocmatrix.com';                 // SMTP username
	$mail->Password = 'Blockmatrix@123';                           // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;                                    // TCP port to connect to

	$mail->setFrom('support@blocmatrix.com', 'Blocmatrix ContactPage');
	$mail->addAddress('support@blocmatrix.com', 'Support Blocmatrix');     // Add a recipient
	$mail->addAddress('info@blocmatrix.com', 'info Blocmatrix');               // Name is optional
	$mail->addReplyTo($email, $name);
	$mail->addCC('praveen.mc@blocmatrix.com', 'Webmaster');
	$mail->addBCC('k.satya@blocmatrix.com', 'Veera Satya');
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'ContactForm: Blocmatrix';
	$mail->Body    = $message;
	$mail->AltBody = $message;

	if(!$mail->send()) {
		echo 'Message could not be sent.';
		//echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'Message has been sent, We will contact you soon...';
	}


	
}
else {
	echo $error;
}
	
function clean_text($string)
{
 $string = trim($string);
 $string = stripslashes($string);
 $string = htmlspecialchars($string);
 return $string;
}

