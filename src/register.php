<?php
	// $name = $_POST["skinAgent"];
	// $logo = $_POST["skinLogo"];
	// $domain1 = $_POST["skinDomain1"];
	// $domain2 = $_POST["skinDomain2"];
	// $skin = $_POST["skinSelected"];
	// $email_subject = "Nueva solicitud de sitio de _". $name;
	// $email_body = "Nos escribe: " . $name . "\nDomain1: " . $domain1 . "\n$Domain2: " .  $domain2 . "\nSkin: " . $skin;
	// $to = "support@payperhead.eu";
	// mail($to, $email_subject, $email_body);
	// header("Location: sended.html");

	if($_POST && isset($_FILES['file'])){
	    $from_email     = 'juanmanuel.develop@gmail.com'; //from mail, it is mandatory with some hosts
	    
	    //Capture POST data from HTML form and Sanitize them, 
	    $name    = filter_var($_POST["skinAgent"], FILTER_SANITIZE_STRING);
	    $domain1 = filter_var($_POST["skinDomain1"], FILTER_SANITIZE_STRING);
	    $domain2 = filter_var($_POST["skinDomain2"], FILTER_SANITIZE_STRING);
	    $skin    = filter_var($_POST["skinSelected"], FILTER_SANITIZE_STRING);
	    
	    //Get uploaded file data
	    $file_tmp_name   = $_FILES['file']['tmp_name'];
	    $file_name       = $_FILES['file']['name'];
	    $file_size       = $_FILES['file']['size'];
	    $file_type       = $_FILES['file']['type'];
	    $file_error      = $_FILES['file']['error'];

	    if($file_error > 0)
	    {
	        die('Upload error or No files uploaded');
	    }
	    //read from the uploaded file & base64_encode content for the mail
	    $handle = fopen($file_tmp_name, "r");
	    $content = fread($handle, $file_size);
	    fclose($handle);
	    $encoded_content = chunk_split(base64_encode($content));

	        $boundary = md5("sanwebe");
	        //header
	        $headers = "MIME-Version: 1.0\r\n"; 
	        $headers .= "From:".$from_email."\r\n"; 
	        $headers .= "Reply-To: ".$reply_to_email."" . "\r\n";
	        $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n"; 
	        
	        //plain text 
	        $body = "--$boundary\r\n";
	        $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
	        $body .= "Content-Transfer-Encoding: base64\r\n\r\n"; 
	        $body .= chunk_split(base64_encode($message)); 
	        
	        //attachment
	        $body .= "--$boundary\r\n";
	        $body .="Content-Type: $file_type; name=".$file_name."\r\n";
	        $body .="Content-Disposition: attachment; filename=".$file_name."\r\n";
	        $body .="Content-Transfer-Encoding: base64\r\n";
	        $body .="X-Attachment-Id: ".rand(1000,99999)."\r\n\r\n"; 
	        $body .= $encoded_content; 
	    
	    $sentMail = @mail($recipient_email, $subject, $body, $headers);
	    if($sentMail) //output success or failure messages
	    {       
	        die('Thank you for your email');
	    }else{
	        die('Could not send mail! Please check your PHP mail configuration.');  
	    }

	}
?>

