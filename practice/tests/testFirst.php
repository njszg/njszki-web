<?php
  require_once('../src/first.php');

  class TestFirst extends UnitTestCase {

    // a. getRandomNumber() returns constantly four
  
    function testGetRandomNumber() {
      $number = getRandomNumber();
      UnitTestCase::assertEqual(4, $number);
      // Sorry, inner joke. Reference is here: https://xkcd.com/221/
    }
    
    // b. isEven(n) returns if n is even

    function testIsEven() {
      $even = isEven(6);
      UnitTestCase::assertTrue($even);
    }

    function testNotEven() {
      $even = isEven(5);
      UnitTestCase::assertFalse($even);
    }
    
    // c. quadraticSolver(a, b, c) where ax^2+bx+c=0 returns possible x-es

    function testQuadraticSolverNoSolutions() {
      $solutions = quadraticSolver(4, 4, 4);
      UnitTestCase::assertEqual(Array(), $solutions);
    }
	
    function testQuadraticSolverOneSolution() {
      $solutions = quadraticSolver(1, -4, 4);
      UnitTestCase::assertEqual(Array(2), $solutions);
    }
    
    function testQuadraticSolverTwoSolutions() {
      $solutions = quadraticSolver(1, -5, 6);
      UnitTestCase::assertEqual(Array(2, 3), $solutions);
    }
    
    // 1. reverse(s) returns the reverse of s
    
    function testReverseEmptyString(){
      $reversed = reverse("");
      UnitTestCase::assertEqual("", $reversed);
    }
   
    function testReverseSameBackwards(){
      $reversed = reverse("almla");
      UnitTestCase::assertEqual("almla", $reversed);
    }
    
    function testReverseGeneral(){
      $reversed = reverse("almafa");
      UnitTestCase::assertEqual("afamla", $reversed);
    }
    
    // 2. grading

    // 3. cointoss(n) returns a random sequence with ten 'H' at the end,
    // before that 'T' and 'H', but never ten 'H'-s in a row
    
    function testCointoss(){
      $tenHeads = Array('H','H','H','H','H','H','H','H','H','H');
      
      for($i=0;$i<100;$i++){
        $result = cointoss(10);
        for($j=0;$j<count($result)-10;$j++){
          UnitTestCase::assertNotEqual($tenHeads, array_slice($result,$i,10,false));
        }
        UnitTestCase::assertEqual($tenHeads, array_slice($result,count($result)-10,10,false));
      }
    }
    
    // 4. tempStat
    
    function testGetStatsGeneral(){
      $data = Array(10.0, 15.0, 20.0);
      $expectedStat = Array(
        'min' => 10.0,
        'max' => 20.0,
        'avg' => 15.0
      );
      $stat = getStats($data);
      UnitTestCase::assertEqual($expectedStat, $stat);
    }
    
    function testGetStatsSame(){
      $data = Array(10.0, 10.0, 10.0);
      $expectedStat = Array(
        'min' => 10.0,
        'max' => 10.0,
        'avg' => 10.0
      );
      $stat = getStats($data);
      UnitTestCase::assertEqual($expectedStat, $stat);
    }
    
    function testGetStatsFloat(){
      $data = Array(10.1, 10.2, 10.3);
      $expectedStat = Array(
        'min' => 10.1,
        'max' => 10.3,
        'avg' => 10.2
      );
      $stat = getStats($data);
      UnitTestCase::assertEqual($expectedStat, $stat);
    }
    
    function testGetStatsEmpty(){
      try {
        $data = Array();
        $stat = getStats($data);
        
        $this->fail();
      } catch (Exception $e) {
        if($e->message == "No data given."){
          $this->pass();
        } else {
          $this->fail();
        }
      }
    }

    // 5. primeFactoring(n) returns Array(p1, p2 ... pn) where n=p1*p2...pn, all and pi is prime
    // in ascending order
    
    function testPrimeFactoringOne(){
      $factors = primeFactoring(1);
      UnitTestCase::assertEqual(Array(1), $factors);
    }
    
    function testPrimeFactoringPrime(){
      $factors = primeFactoring(17);
      UnitTestCase::assertEqual(Array(17), $factors);
    }
    
    function testPrimeFactoringComposite(){
      $factors = primeFactoring(60);
      UnitTestCase::assertEqual(Array(2, 2, 3, 5), $factors);
    }
    
    function testPrimeFactoringCubic(){
      $factors = primeFactoring(216);
      UnitTestCase::assertEqual(Array(2, 2, 2, 3, 3, 3), $factors);
    }
    
    function testPrimeFactoringBigPrime(){
      $factors = primeFactoring(179428399);
      UnitTestCase::assertEqual(Array(179428399), $factors);
    }

    function testPrimeFactoringBigComposite(){
      $factors = primeFactoring(191858577059);
      UnitTestCase::assertEqual(Array(263, 269, 271, 10007), $factors);
    }
  }
?>
