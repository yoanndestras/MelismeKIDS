<?php

    $pdo = new PDO('mysql:host=localhost;dbname=melismekids;port=3306', 'root', 'root');
    $pdo->exec('SET NAMES UTF8');

    //////////////////////////////////////// INSCRIPTION ///////////////////////////////////

    $Prenom = $_POST['prenom'];
    $Nom = $_POST['nom'];
    $Email = $_POST['signup_mail'];
    $Password = md5($_POST['signup_password']);
    

    $query = $pdo->prepare
    (
        "SELECT Email FROM kids where Email = ?"
    );
    $query->execute([$Email]);
    
    

    /*foreach($emails as $email)
    {*/
        if($email = $query->fetch())
        {
            $message = "L'email est déjà associé à un compte existant";
        }
        else
        {
            $newUser = $pdo->prepare
            (
                "INSERT INTO kids (Prenom, Nom, Email, Password) values (?, ?, ?, ?)"
            );
            $newUser -> execute(array($Prenom, $Nom, $Email, $Password));
            //  header('Location: Kids.phtml');
            $message = "Utilisateur créé";
        }
   /* }*/
    echo $message;
?>