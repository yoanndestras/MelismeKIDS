<?

//////////////////////////////////////// DECONNEXION ///////////////////////////////////


session_start();
$_SESSION = array();
session_destroy();


header('Location: Kids.phtml');

?>