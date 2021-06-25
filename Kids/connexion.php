<?php

    $pdo = new PDO('mysql:host=localhost;dbname=melismekids;port=3306', 'root', 'root');
    $pdo->exec('SET NAMES UTF8');

    //////////////////////////////////////// CONNEXION ///////////////////////////////////

    session_start();

    $Email_saisi = $_POST['login_mail'];
    $Password_saisi = md5($_POST['login_password']);

    $connectUser = $pdo->prepare
    (
        "SELECT * FROM kids where Email = ? and Password = ?"
    );

    $connectUser->execute(array($Email_saisi, $Password_saisi));

    if($connexion = $connectUser->fetch())
    {
        $_SESSION['Email'] = $Email_saisi;
        //$_SESSION['Admin'] = $connectUser["Admin"];

        echo '<script>document.location.reload();</script>';
        $message = "";
    }
    else
    {
        $message = "Email ou mot de passe incorrect";
    }

echo $message;

?>