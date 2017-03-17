<?php
	session_start();
?>
	<!DOCTYPE html> 
	<html> 
	<head>
	  <title>Start</title> 
	  <link rel="stylesheet" href="stylesheet.css">
	</head> 
	<body>
		<div id="container">
<?php
	if(isset($_SESSION['username'])) {
		$user= $_SESSION['username'];
?>	
	<img src="images/troll.png" alt="Logo"> <br><br>
	
		<div id="content">
			Herzlich Willkommen <b>
			<?php
				echo $user .'</b>!<br><br>';
			?>
			<input type="button" name="start" value="Spiel starten" onclick="window.location='index.html'"/> 
			&nbsp; &nbsp;
			<input type="button" name="logout" value="Logout" onclick="window.location='logout.php'"/> 
		</div>
<?php
	}
	else{
		 die(
		 '<script language="javascript">
			alert("Bitte zuerst einloggen!")
		  </script>
		  <meta http-equiv="refresh" content="0; URL=login.php">'
		 );
	}
?>
		</div>
	</body>
	</html>
 
