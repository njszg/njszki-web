<?php

    class InputCheck{

        static function isNumber($text){
            return preg_match("/^\-?\d*$/i", $text);
        }

        static function isEmail($text){
            return preg_match("/^[^@\s]+@[^@\s]+$/i", $text);
        }

        static function isPhone($text){
            return preg_match("/^\+36(((1|20|30|31|70)\d{7})|([45689]{1}[0-9]{1}|[27]{1}[1-9]{1}|[3]{1}[2-9]{1})\d{6})$/i", $text);
        }

        static function isPassword($text){
            return preg_match("/^.{4,}$/i", $text);
        }

        static function isRoman($text){
            return preg_match("/^(M{0,3})(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i", $text);
        }

        static function isQuadratic($text){
            return preg_match("/^((\+|\-|)\d*xx)((\+|\-)\d*x|)((\+|\-)\d*|)=0$/i", $text);
        }
    }

?>
