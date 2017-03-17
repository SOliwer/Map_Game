<?php 
include("password.php");
session_start();
$pdo = new PDO('mysql:host=localhost;dbname=trolle02', 'root', '1234');
?>
<!DOCTYPE html> 
<html> 
<head>
  <title>Registrierung</title> 
  <link rel="stylesheet" href="stylesheet.css">
</head> 
<body>
	<div id="container">
 
<?php
$showFormular = true; //Variable ob das Registrierungsformular angezeigt werden soll
 
if(isset($_GET['register'])) {
 $error = false;
 $email = $_POST['email'];
 $username = $_POST['username'];
 $passwort = $_POST['passwort'];
 $passwort2 = $_POST['passwort2'];
  
 if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
 	echo '<script language="javascript">';
	echo 'alert("Bitte eine gültige E-Mail Adresse eingeben!")';
	echo '</script>';
 $error = true;
 } 
 if(strlen($passwort) == 0) {
	echo '<script language="javascript">';
	echo 'alert("Bitte ein Passwort eingeben!")';
	echo '</script>';
 $error = true;
 }
 if($passwort != $passwort2) {
 	echo '<script language="javascript">';
	echo 'alert("Die Passwörter stimmen leider nicht überein!")';
	echo '</script>';
 $error = true;
 }
 
 //Überprüfung, ob die E-Mail-Adresse bereits registriert wurde
 
 if(!$error) { 
 $statement = $pdo->prepare("SELECT * FROM benutzer WHERE email = :email");
 $result = $statement->execute(array('email' => $email));
 $user = $statement->fetch();
 
 if($user !== false) {
	echo '<script language="javascript">';
	echo 'alert("Diese E-Mail Adresse ist bereits registriert!")';
	echo '</script>';
 $error = true;
 } 
 }
 
  if(strlen($username) == 0) {
	echo '<script language="javascript">';
	echo 'alert("Bitte einen Benutzernamen eingeben!")';
	echo '</script>';
 $error = true;
 }
 //Überprüfung ob der angegebene Nutzername bereits registriert wurde
 
  if(!$error) { 
 $statement = $pdo->prepare("SELECT * FROM benutzer WHERE username = :username");
 $result = $statement->execute(array('username' => $username));
 $user = $statement->fetch();
 
 if($user !== false) {
	echo '<script language="javascript">';
	echo 'alert("Dieser Nutzername ist bereits registriert!")';
	echo '</script>';
 $error = true;
 } 
  }
 
 //Sollten keine Fehler auftreten, wird der Nutzer in der Datenbank eingetragen
 if(!$error) { 
 $passwort_hash = password_hash($passwort, PASSWORD_DEFAULT);
 
 $statement = $pdo->prepare("INSERT INTO benutzer (username,email, passwort) VALUES (:username, :email, :passwort)");
 $result = $statement->execute(array('username' => $username, 'email' => $email, 'passwort' => $passwort_hash));
 
 if($result) { 
 echo '<img src="images/troll.png" alt="Logo">
		<form method="get" action="/login.php">
		Registrierung erfolgreich!<br><br>
	    <button type="submit">Login</button>
		</form>';
 $showFormular = false;
 } else {
	echo '<script language="javascript">';
	echo 'alert("Fehler bei der Registrierung!")';
	echo '</script>';
 }
 } 
}
 
if($showFormular) {
?>
	
	<img src="images/troll.png" alt="Logo">

	<form action="?register=1" method="post">
	
		Benutzername:<br><br>
		<input type="text" size="40" maxlength="250" name="username"><br><br>
		
		E-Mail:<br><br>
		<input type="email" size="40" maxlength="250" name="email"><br><br>
		 
		Passwort:<br><br>
		<input type="password" size="40"  maxlength="250" name="passwort"><br><br>
		 
		Passwort wiederholen:<br><br>
		<input type="password" size="40" maxlength="250" name="passwort2"><br><br>
		 
		<input type="submit" value="Registrieren"> 
		&nbsp; &nbsp;
		<input type="button" name="cancel" value="Abbrechen" onclick="window.location='login.php'"/> 
	
	</form>


<?php
}
?>
	</div>
</body>
</html>