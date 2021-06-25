-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 25, 2021 at 08:12 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `melismekids`
--

-- --------------------------------------------------------

--
-- Table structure for table `kids`
--

CREATE TABLE `kids` (
  `UserId` int(11) NOT NULL,
  `Token` int(11) DEFAULT NULL,
  `Prenom` varchar(255) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kids`
--

INSERT INTO `kids` (`UserId`, `Token`, `Prenom`, `Nom`, `Email`, `Password`) VALUES
(90, NULL, 'Yoann', 'Destras', 'yoanndestras@gmail.com', '5f4dcc3b5aa765d61d8327deb882cf99'),
(91, NULL, 'Boris', 'Dupont', 'boris.dupont@gmail.com', '7c6a180b36896a0a8c02787eeafb0e4c'),
(92, NULL, 'Jules', 'Georges', 'georges.jules@gmail.com', '87f77988ccb5aa917c93201ba314fcd4'),
(93, NULL, 'Guillaume', 'Dhaene', 'Guillaume.Dhaene@gmail.com', '87f77988ccb5aa917c93201ba314fcd4'),
(94, NULL, 'Jean', 'Thomas', 'Jean@gmail.com', '5d793fc5b00a2348c3fb9ab59e5ca98a');

-- --------------------------------------------------------

--
-- Table structure for table `newpassword`
--

CREATE TABLE `newpassword` (
  `IdRecup` int(11) NOT NULL,
  `Token` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kids`
--
ALTER TABLE `kids`
  ADD PRIMARY KEY (`UserId`);

--
-- Indexes for table `newpassword`
--
ALTER TABLE `newpassword`
  ADD PRIMARY KEY (`IdRecup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kids`
--
ALTER TABLE `kids`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `newpassword`
--
ALTER TABLE `newpassword`
  MODIFY `IdRecup` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
