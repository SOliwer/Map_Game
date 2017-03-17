<?php 
include("password.php");
session_start();
$pdo = new PDO('mysql:host=localhost;dbname=trolle02', 'root', '1234');
 
if(isset($_GET['login'])) {
 $email = $_POST['email'];
 $passwort = $_POST['passwort'];
 
 if(strlen($email) !== 0){
	 
	 $statement = $pdo->prepare("SELECT * FROM benutzer WHERE email = :email");
	 $result = $statement->execute(array('email' => $email));
	 $user = $statement->fetch();
	 
	 //Überprüfung des Passworts
	 if ($user !== false && password_verify($passwort, $user['passwort'])) {
	 $_SESSION['username'] = $user['username'];
	 die('<meta http-equiv="refresh" content="0; URL=start.php">');
	 } else {
	 $errorMessage = '<script language="javascript">
						alert("Das Passwort ist leider nicht korrekt!")
						</script>';
	 }
	 
	}else {
	 $errorMessage = '<script language="javascript">
				       alert("Bitte eine gültige E-Mail Adresse eingeben!")
					  </script>';
	}
}
?>
<!DOCTYPE html> 
<html> 
<head>
  <title>Login</title> 
  <link rel="stylesheet" href="stylesheet.css">
</head> 
<body>

	<div id="container">
	
		<img src="images/troll.png" alt="Logo">
		
		<form action="?login=1" method="post">
		
		Bitte melde dich an!<br><br>
		E-Mail Adresse:<br><br>
		<input type="email" size="40" maxlength="250" name="email"><br><br>
		 
		Passwort:<br><br>
		<input type="password" size="40"  maxlength="250" name="passwort"><br><br>
		 
		<input type="submit" value="Einloggen">
		</form>
		<br>
	<div id="footer">	
		<a href="register.php">Neu registrieren</a>
	</div>
 
<?php 
if(isset($errorMessage)) {
 echo $errorMessage;
}
?> 
	</div>
</body>
</html>