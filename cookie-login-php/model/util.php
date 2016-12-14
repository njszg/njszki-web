<?php

class Util{
    public static function generateRandomString($num){
        $str = '';
        $options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $optlen = strlen($options);
        for($i=0;$i<$num;$i++){
            $r = rand(0,$optlen-1);
            $str .= $options[$r];
        }
        return $str;
    }
}
