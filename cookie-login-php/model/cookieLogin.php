<?php
    include 'db.php';
    include 'util.php';

    class CookieLogin{
        var $loginResult = null;
        var $user = null;
        var $db = null;

        public function __construct(){
            $this->db = DB::getInstance();
        }

        public function tryLogin($postLogin, $postLogout, $postUsername, $postPassword, $cookieLoginToken){
            $this->db->connect();
            $wereLogout = $this->doLogout($postLogout);
            if(!$wereLogout){
                $this->tryLoginFromPost($postLogin, $postUsername, $postPassword);
                if(!$this->user){
                    $this->tryLoginFromCookie($cookieLoginToken);
                }
            }
            $this->db->close();
        }

        public function hasUser(){
            return $this->user != null;
        }

        public function getUser(){
            return $this->user;
        }

        public function getLoginResult(){
            return $this->loginResult;
        }

        private function tryLoginFromPost($postLogin, $postUsername, $postPassword){
            if(isset($postLogin) && isset($postUsername) && isset($postPassword)) {
                $logintoken = Util::generateRandomString(32);
                $this->updateByUsernamePassword($logintoken, $postUsername, $postPassword);
                if ($username = $this->checkTokenInDB($logintoken)) {
                    setcookie("logintoken", $logintoken, 0);
                    $this->user = $username;
                    $this->loginResult = true;
                } else {
                    $this->loginResult = false;
                }
            }
        }

        private function tryLoginFromCookie($cookieLoginToken)
        {
            if (isset($cookieLoginToken)) {
                if ($username = $this->checkTokenInDB($cookieLoginToken)) {
                    $this->updateByToken($cookieLoginToken);
                    $this->user = $username;
                }
            }
        }

        private function doLogout($postLogout){
            if(isset($postLogout)) {
                $this->user = null;
                setcookie("logintoken", "", time()-1);
                return true;
            }
            return false;
        }

        private function checkTokenInDB($logintoken){
            $result = $this->db->query("SELECT * FROM user WHERE logintoken = '$logintoken' AND loginexpires > '".time()."' LIMIT 0,1;");
            if(count($result) > 0){
                return  $result[0]['username'];
            } else {
                return null;
            }
        }

        private function updateByUsernamePassword($logintoken, $username, $password){
            $username = $this->db->escape($username);
            $password = $this->db->escape($password);
            $this->db->query("UPDATE user SET logintoken = '$logintoken', loginexpires = '".(time()+30*60)."' WHERE username = '$username' AND password = MD5('$password') LIMIT 1;");
        }

        private function updateByToken($logintoken){
            $logintoken = $this->db->escape($logintoken);
            $this->db->query("UPDATE user SET loginexpires = '" . (time() + 30 * 60) . "' WHERE logintoken = '$logintoken' LIMIT 1;");
        }


    }

?>

