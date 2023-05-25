<?php

$name = $_POST["name"];
$email = $_POST["email"];
$tel = $_POST["tel"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$body = "";
$body .= "Nombre: ";
$body .= $name;
$body .= "<br>";
$body .= "E-mail: ";
$body .= $email;
$body .= "<br>";
$body .= "Teléfono: ";
$body .= $tel;
$body .= "<br>";
$body .= "Asunto: ";
$body .= $subject;
$body .= "<br>";
$body .= "Mensaje: ";
$body .= $message;
$body .= "<br>";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
	$mail->Host = 'localhost';
	$mail->SMTPAuth = false;
	$mail->SMTPAutoTLS = false;
	$mail->Port = 25;

    //Recipients
    $mail->setFrom('contacto@generadoresdelcaribe.mx', $name);
    $mail->addAddress('info@generadoresdelcaribe.mx');     // Para Generadores
    $mail->addBCC('luis.rlwev@gmail.com');     // Para mí :v


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contacto Generadores del Caribe';
    $mail->Body    = $body;
    $mail->CharSet = 'UTF-8';
    $mail->send();
    echo 'success';
} catch (Exception $e) {
    echo "El mensaje no se pudo enviar. Mailer Error: {$mail->ErrorInfo}";
}