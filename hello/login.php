<?php

class Login {

    function check($username, $password){
        $conn = mysql_connect('localhost', 'root', '');
        if(!$conn){
            die('No connection: '.mysql_error());
        }

        $select = mysql_select_db('estiokj', $conn);
        if(!$select){
            die('No db selected: '.mysql_error());
        }

        $result = mysql_query('SET NAMES utf8;', $conn);
        if(!$result){
            die('Charset failed: '.mysql_error());
        }

        $result = mysql_query(
            "SELECT * FROM login ".
            "WHERE username = '$username' ".
            "AND password = MD5('$password');"
        , $conn);

        if(mysql_num_rows($result) == 1){
            $ok = true;
        } else {
            $ok = false;
        }

        $close = mysql_close($conn);
        if(!$close){
            die('Cannot close: '.mysql_error());
        }

        return $ok;
    }
}

?>

