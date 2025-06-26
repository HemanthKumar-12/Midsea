<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/SMTP.php';

// Database connection
$conn = pg_connect("host=localhost dbname=vulnerability user=postgres password=Hemanth@123");

if (!$conn) {
    die("Connection failed.");
}

// Get POST data
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];

// Insert into PostgreSQL
$result = pg_query_params(
    $conn,
    "INSERT INTO enquiries (name, email, mobile) VALUES ($1, $2, $3)",
    array($name, $email, $mobile)
);

// Email sending
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'h.hemanth.fabee@gmail.com';
    $mail->Password = 'tdat oijs qiyu mbsk'; // Gmail App Password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('h.hemanth.fabee@gmail.com', 'Enquiry Alert');
    $mail->addAddress('21102057@rmd.ac.in'); // Change to actual receiver

    $mail->Subject = 'New Enquiry From Medsea Housing and properties';
    $mail->Body    = "Name: $name\nEmail: $email\nMobile: $mobile";

    $mail->send();
    echo "success";
} catch (Exception $e) {
    echo "Mail Error: {$mail->ErrorInfo}";
}

pg_close($conn);
?>
