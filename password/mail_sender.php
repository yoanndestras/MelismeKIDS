<?php

function createToken($nb)
{
    $caracteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0,1,2,3,4,5,6,7,8,9];
    $token = "";
    $max = count($caracteres) - 1;
   
    for($i=0; $i < $nb; $i++)
    {
        $rand = rand(0, $max);
        $token = $token.$caracteres[$rand];
    }
    
    return $token;
}

$pdo = new PDO('mysql:host=localhost;dbname=melismekids;port=3306', 'root', 'root');
$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
    "SELECT * FROM kids where Email = ?"
);
$query->execute([$_POST['email']]);

if($user = $query->fetch())
{
    //On génère le token
    $token = createToken(12);
    // On crée notre entrée en base avec le token
    $query = $pdo->prepare
    (
        "INSERT INTO newpassword (Email, Token) values(?, ?)"
    );
    $query->execute([$_POST['email'], $token]);

   
    $Contact = $_POST['email'];
    require 'PHPMailer-master/src/PHPMailer.php';
    require 'PHPMailer-master/src/OAuth.php';
    require 'PHPMailer-master/src/SMTP.php';
    //require 'PHPMailer/src/Exception.php';


    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    define('MailUSER', 'melismekids@gmail.com'); // Utilisateur 
    define('MailPWD', 'Dd6af58f52?!'); // Mot de passe 

    try 
    {
        //Server settings
        $mail->SMTPDebug = 0;                       //Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = MailUSER;                     // SMTP username
        $mail->Password   = MailPWD;                               // SMTP password
        //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        $mail->CharSet = 'UTF-8';
        //Recipients
        $mail->setFrom('melismekids@gmail.com');
        $mail->addAddress($Contact);     // Add a recipient
        //$mail->addAddress('ellen@example.com');               // Name is optional
        $mail->addReplyTo('melismekids@gmail.com');
        //$mail->addCC('cc@example.com');
        //$mail->addBCC('bcc@example.com');

        // Attachments
        //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = "Renouvellement de votre mot de passe Melisme KID'S!";
        $mail->Body    = "Cliquez sur le lien suivant pour changer votre mot de passe : http://localhost:8080/Kids/password/new_password.phtml?token=".$token."&amp;email=".$Contact; 
        //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        //echo 'Message has been sent';

        $message = "L'email a été envoyé avec succés !";

    } 
    catch (Exception $e) 
    {
        $message = "Erreur : L'email n'a pas pu être envoyé";
    }
}   
else
{
    $message = "Aucun compte n'est lié à cette adresse mail";
}

echo $message;

?>

