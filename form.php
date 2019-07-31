<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "test2";

$conn = mysqli_connect($servername,$username,$password,$dbname);

if (!$conn)
{
    die("mysqli connection faild".mysqli_connect_error());

}
else {

    
    
    $id = 101;
    $uname = 'kiran';
    $pass = 'kiran22';
    $repass = 'kiran@22';

    $sql = "INSERT INTO re(username,pass,repass) VALUES ('$uname','$pass','$repass')";
     if(mysqli_query($conn,$sql))
    {
        echo"record insert succsses";
    }
    else
    {
     echo "error";   
    }
}




?>