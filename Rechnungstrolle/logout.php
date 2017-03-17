<?php
session_start();
session_destroy();
 
echo '<script language="javascript">
		alert("Logout erfolgreich!")
	  </script>
	  <meta http-equiv="refresh" content="0; URL=login.php">';
?>