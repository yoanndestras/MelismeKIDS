<?php
$pdo = new PDO('mysql:host=localhost;dbname=melismekids;port=3306', 'root', 'root');
$pdo->exec('SET NAMES UTF8');


$query = $pdo->prepare
(
    'SELECT Email FROM newpassword WHERE Token = ?'
);
$query->execute([$_POST['token']]);


if($yes = $query->fetch())
{
    $password1 = md5($_POST['password1']);
    $password2 = md5($_POST['password2']);

    if($password1 == $password2)
    {
        $query = $pdo->prepare
        (
            'UPDATE kids SET Password = ? WHERE Email = ?'
        );
        $query->execute([$password2, $_POST['Contact']]);
    
    
        $query = $pdo->prepare
        (
            'DELETE FROM newpassword WHERE Email = ?'
        );
        $query->execute([$_POST['Contact']]);

        $message = "Nouveau mot de passe Enregistré !";
    }
    else
    {
        $message = "Les mots de passe ne correspondent pas";
    }
}
else
{
    $message = "Une erreur s'est produite";
}

echo $message;

?>