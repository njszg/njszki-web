<?php
    require_once('../src/inputCheck.php');

    class TestInputCheck extends UnitTestCase {

        // isNumber($text)
        // returns true, if the text is a number

        function testIsNumberNormal() {
            $input = "444";
            $result = InputCheck::isNumber($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsNumberNotNumber() {
            $input = "444a";
            $result = InputCheck::isNumber($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsNumberNegative() {
            $input = "-444";
            $result = InputCheck::isNumber($input);
            UnitTestCase::assertTrue($result);
        }

        // isEmail($text)

        function testIsEmailNormal() {
            $input = "webmester@valahol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsEmailNoAt() {
            $input = "webmestervalahol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsEmailTooManyAts() {
            $input = "webmester@vala@hol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsEmailSeparatedName() {
            $input = "web.mester@vala.hol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsEmailDashed() {
            $input = "web-mester@vala-hol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsEmailPlusSign() {
            $input = "webmester+njszki@valahol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsEmailIP() {
            $input = "webmester+njszki@123.123.123.123";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsEmailNumberal() {
            $input = "1234567890@valahol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsEmailUnderscore() {
            $input = "_________@valahol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsEmailGarbage() {
            $input = "#@%^%#$@#$@#.com";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsEmailMissingName() {
            $input = "@valahol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertFalse($result);
        }

        // for experts only

        /*

        function testIsEmailMultiDots() {
            $input = "web..mester@valahol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsEmailUnicode() {
            $input = "あいうえお@valahol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsEmailInvalidIP() {
            $input = "#webmester+njszki@123.123.123.12345";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsEmailLeadingDash() {
            $input = "web.mester@-valahol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsEmailLeadingDot() {
            $input = ".webmester@valahol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsEmailTrailingDot() {
            $input = "webmester.@valahol.hu";
            $result = InputCheck::isEmail($input);
            UnitTestCase::assertFalse($result);
        }

        */

        // more ideas at: https://blogs.msdn.microsoft.com/testing123/2009/02/06/email-address-test-cases/

        // isPhone($text)

        function testIsPhoneNormal() {
            $input = "+36301234567";
            $result = InputCheck::isPhone($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsPhoneBudapest() {
            $input = "+3611234567";
            $result = InputCheck::isPhone($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsPhoneCountrySide() {
            $input = "+3628123456";
            $result = InputCheck::isPhone($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsPhoneCountrySideTooLong() {
            $input = "+36281234567";
            $result = InputCheck::isPhone($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsPhoneCountrySideTooShort() {
            $input = "+362812345";
            $result = InputCheck::isPhone($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsPhoneMobileTooLong() {
            $input = "+363012345678";
            $result = InputCheck::isPhone($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsPhoneMobileTooShort() {
            $input = "+3630123456";
            $result = InputCheck::isPhone($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsPhoneBudapestTooLong() {
            $input = "+36112345678";
            $result = InputCheck::isPhone($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsPhoneBudapestTooShort() {
            $input = "+361123456";
            $result = InputCheck::isPhone($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsPhoneAbroad() {
            $input = "+4230123456";
            $result = InputCheck::isPhone($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsPhoneMissingPlus() {
            $input = "3630123456";
            $result = InputCheck::isPhone($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsPhoneNonNumeric() {
            $input = "+36-30/12(34)56B7";
            $result = InputCheck::isPhone($input);
            UnitTestCase::assertFalse($result);
        }

        // isPassword($text)

        function testIsPassword() {
            $input = "almafa";
            $result = InputCheck::isPassword($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsPasswordTooShort() {
            $input = "alm";
            $result = InputCheck::isPassword($input);
            UnitTestCase::assertFalse($result);
        }

        // isPassword($text)

        function testIsRoman1989() {
            $input = "MCMLXXXIX";
            $result = InputCheck::isRoman($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsRoman2016() {
            $input = "MMXVI";
            $result = InputCheck::isRoman($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsRoman4() {
            $input = "IV";
            $result = InputCheck::isRoman($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsRomanWrongChar() {
            $input = "IVB";
            $result = InputCheck::isRoman($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsRomanWrongOrder() {
            $input = "XCMM";
            $result = InputCheck::isRoman($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsRomanWrongCount() {
            $input = "IIII";
            $result = InputCheck::isRoman($input);
            UnitTestCase::assertFalse($result);
        }

        // isQuadratic($text)

        function testIsQuadraticNormal() {
            $input = "24xx+12x+3=0";
            $result = InputCheck::isQuadratic($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsQuadraticNegative() {
            $input = "-24xx-12x-3=0";
            $result = InputCheck::isQuadratic($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsQuadraticMissing0() {
            $input = "-15xx-32x=0";
            $result = InputCheck::isQuadratic($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsQuadraticMissing1() {
            $input = "-24xx-12=0";
            $result = InputCheck::isQuadratic($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsQuadraticMissing01() {
            $input = "-24xx=0";
            $result = InputCheck::isQuadratic($input);
            UnitTestCase::assertTrue($result);
        }

        function testIsQuadraticMissing2() {
            $input = "12x+3=0";
            $result = InputCheck::isQuadratic($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsQuadraticIllegalVariable() {
            $input = "24yy+12y+3=0";
            $result = InputCheck::isQuadratic($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsQuadraticMissingEquSign() {
            $input = "24xx+12x+30";
            $result = InputCheck::isQuadratic($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsQuadraticInvalidSpaces() {
            $input = "24xx+ 12x +3= 0 ";
            $result = InputCheck::isQuadratic($input);
            UnitTestCase::assertFalse($result);
        }

        function testIsQuadraticOtherSideMustBeZero() {
            $input = "24xx+12x+3=3";
            $result = InputCheck::isQuadratic($input);
            UnitTestCase::assertFalse($result);
        }
    }
?>
