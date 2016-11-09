<?php

    class InputCheck{

        function isNumber($text){
            return preg_match("/^\-?\d*$/i", $text);
        }

    }

?>
