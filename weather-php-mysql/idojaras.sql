-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 13, 2016 at 10:36 AM
-- Server version: 5.5.52-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dolgozat`
--

-- --------------------------------------------------------

--
-- Table structure for table `idojaras`
--

CREATE TABLE IF NOT EXISTS `idojaras` (
  `hely` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  `nap` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  `delben` int(11) NOT NULL,
  `ejjel` int(11) NOT NULL,
  `idojaras` varchar(16) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `idojaras`
--

INSERT INTO `idojaras` (`hely`, `nap`, `delben`, `ejjel`, `idojaras`) VALUES
('Budapest', 'ma', 14, 7, 'napos'),
('Budapest', 'holnap', 12, 6, 'felhős'),
('Pécs', 'ma', 10, 9, 'esős'),
('Pécs', 'holnap', 11, 8, 'felhős'),
('Pécs', 'azután', 11, 5, 'napos'),
('Miskolc', 'ma', 20, 13, 'napos'),
('Miskolc', 'holnap', 19, 14, 'napos'),
('Miskolc', 'azután', 22, 6, 'napos'),
('Debrecen', 'ma', -1, -4, 'esős'),
('Debrecen', 'holnap', 3, -4, 'esős'),
('Debrecen', 'azután', 2, -1, 'esős'),
('Debrecen', 'később', 8, 2, 'felhős'),
('Szeged', 'tegnap', -6, -12, 'esős'),
('Győr', 'ma', 12, 14, 'napos'),
('Győr', 'holnap', 18, 12, 'felhős');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
