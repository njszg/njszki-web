<?php
  // model
  // minden logikája ide kerül egy vagy több osztályba foglalva

  // RPS - rock-paper-scissor a kõ-papír-ollóhoz tartozó osztály
  class RPS{
    var $options = Array('rock', 'paper', 'scissor');
    
    // a konstruktor paramétere a user választása
    function __construct($userText){
      // kikeresem, hogy melyiket választotta -> 0, 1, 2 (-1 ha nem találja)
      $this->user = array_search($userText, $this->options);
      // magamnak sorsolok egyet
      $this->me = rand(0,2);
      
      $this->userText = $userText;
      $this->meText = $this->options[$this->me];
      // kiszámítom az eredményt egy külön függvénnyel
      $this->resultText = $this->computeResultText($this->user, $this->me);
    }
    
    // visszaad minden szükséges információt
    function getResults(){
      return Array(
        'user'   => $this->userText,
        'me'     => $this->meText,
        'result' => $this->resultText
      );
    }
    
    // kiszámítja, hogy ki nyert
    private function computeResultText($user, $me){
      if($user == -1){
        return 'CHEATING';
      } elseif($user == $me){
        return 'DRAW';
      } elseif($user-1 == $me || $user+2 == $me){
        return 'WIN';
      } else {
        return 'LOSE';
      }
    }
  }

?>
