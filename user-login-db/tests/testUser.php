<?php
  require_once('../src/user.php');

  class TestUser extends UnitTestCase {

    function testCanCreateUser() {
      $user = new User();
      UnitTestCase::assertNotNull($user);
    }

    function testUserLogin() {
      $user = new User();
      $loginSucceed = $user->login('Zsolt', 'almafa');
      UnitTestCase::assertTrue($loginSucceed);
    }

    function testUserIsLoggedIn() {
      $user = new User();
      $loginSucceed = $user->login('Zsolt', 'almafa');
      UnitTestCase::assertTrue($user->isLoggedIn());
    }
	
    function testUserIsNotLoggedIn() {
      $user = new User();
      UnitTestCase::assertFalse($user->isLoggedIn());
    }
	
    function testUserWrongCredidentals() {
      $user = new User();
      $loginSucceed = $user->login('Zsolt', 'fgdfgdfhgfhgf');
      UnitTestCase::assertFalse($loginSucceed);
    }
  }
?>
