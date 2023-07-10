-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2023 at 03:31 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coffee_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookmarks`
--

CREATE TABLE `bookmarks` (
  `user_id` int(11) NOT NULL,
  `coffee_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookmarks`
--

INSERT INTO `bookmarks` (`user_id`, `coffee_id`, `createdAt`, `updatedAt`) VALUES
(1, 2, '2023-07-08 13:22:19', '2023-07-08 13:22:19'),
(1, 3, '2023-07-08 13:28:19', '2023-07-08 13:28:19'),
(1, 4, '2023-07-08 12:56:23', '2023-07-08 12:56:23');

-- --------------------------------------------------------

--
-- Table structure for table `coffeeimages`
--

CREATE TABLE `coffeeimages` (
  `id` int(11) NOT NULL,
  `coffee_id` int(11) NOT NULL,
  `image` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coffeeimages`
--

INSERT INTO `coffeeimages` (`id`, `coffee_id`, `image`) VALUES
(1, 2, 'coffees/images-1688816265904-90d710ac-bdad-4b24-ab3e-6bb80a4c0941-La-Mensa-1-768x1151.jpg'),
(2, 2, 'coffees/images-1688816265907-189b5573-dda2-4bf0-9f89-07f8425de70c-La-Mensa-3-768x512.jpg'),
(3, 2, 'coffees/images-1688816265909-3fa720ed-9318-4b07-afa0-06e2d52e0681-La-Mensa-2-768x512.jpg'),
(4, 3, 'coffees/images-1688816419930-e8fe868c-c2af-46dc-acff-61c5611db3e6-pema-768x1152.jpg'),
(5, 4, 'coffees/images-1688816524005-5682699d-8e10-49b4-ad5c-c44b62d9144c-laika-tho-nhuom-review-the-chilling-home-1-768x512.jpg'),
(6, 4, 'coffees/images-1688816524006-05844ddf-e8d8-4de0-9ae3-bfffff4dc394-laika-tho-nhuom-review-the-chilling-home-768x512.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `coffees`
--

CREATE TABLE `coffees` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contactNumber` varchar(10) DEFAULT NULL,
  `average_rating` float DEFAULT NULL,
  `open_hour` time NOT NULL,
  `close_hour` time NOT NULL,
  `description` text DEFAULT NULL,
  `air_conditioner` tinyint(1) NOT NULL,
  `posted_user` int(11) NOT NULL,
  `is_approved` tinyint(1) DEFAULT 1,
  `is_crowded` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coffees`
--

INSERT INTO `coffees` (`id`, `name`, `address`, `email`, `contactNumber`, `average_rating`, `open_hour`, `close_hour`, `description`, `air_conditioner`, `posted_user`, `is_approved`, `is_crowded`) VALUES
(2, 'La Mensa', 'Số 2 Tông Đản, Hoàn Kiếm, HN', 'lamensa@gmail.com', '0925485555', 4, '07:00:00', '21:00:00', 'Vẫn là tone xanh thương hiệu với hai mặt tiền trên phố Tông Đản nhưng cơ sở thứ 3 có view thoáng đãng và bắt mắt hơn hẳn. Quán rộng 4 tầng với thiết kế nhiều cửa sổ nên cảm giác ngồi trong nhà không hề bí. Tầng 4 với ban công bên ngoài rất rộng rợp bóng cây ngồi chill hết ý.', 1, 3, 1, 1),
(3, 'Pema Patisserie – Salon De Thé', '45 P. Quang Trung, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội', 'pema@gmail.com', '0925485556', 3, '10:00:00', '22:00:00', 'Pema có 2 cơ sở tại Quang Trung và Đặng Thai Mai, đều bao gồm khu vực trong nhà và ngoài trời.\n\nTừ không gian cho đến những chi tiết trang trí, quán đi theo cảm hứng quý tộc Pháp “sang chảnh” pha chút hiện đại. Mặt tiền ở đây lên ảnh vẫn rất sang xịn mịn như trời Tây. Không gian tại quán thường yên tĩnh, phù hợp hẹn hò đôi, nhóm bạn ít người.', 1, 3, 1, 1),
(4, 'Laika Cafe Thợ Nhuộm', '34 P. Thợ Nhuộm, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội', 'laikacafe@gmail.com', '0925485557', 2, '07:00:00', '21:00:00', 'Ngoài Laika Thợ Nhuộm, các chi nhánh khác của Laika cafe đều có không gian rộng rãi và mặt tiền mở, ban công thoáng và nhiều tầng. Ban ngày, Laika tràn ngập ánh sáng tự nhiên. Ban đêm, cafe Laika trở nên lung linh, huyền ảo nhờ hệ thống đèn trang trí bắt mắt. Dù nằm trên con phố nào, Laika cũng cực kì nổi bật và thu hút.', 0, 3, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `coffee_id` int(11) NOT NULL,
  `review` varchar(255) NOT NULL,
  `rating` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `user_id`, `coffee_id`, `review`, `rating`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 'このコーヒーの喫茶店はかっこいいですね', 4, '2023-07-08 12:22:03', '2023-07-08 12:22:03'),
(2, 1, 3, 'このコーヒーの喫茶店はかっこいいですね', 3, '2023-07-08 12:22:48', '2023-07-08 12:22:48'),
(3, 1, 4, '悪いサービス', 2, '2023-07-08 12:23:53', '2023-07-08 12:23:53');

--
-- Triggers `reviews`
--
DELIMITER $$
CREATE TRIGGER `recalculate_average_stars_after_delete` AFTER DELETE ON `reviews` FOR EACH ROW update coffees set average_rating = (select avg(rating) from reviews where coffee_id=old.coffee_id)
where id=old.coffee_id
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `recalculate_average_stars_after_insert` AFTER INSERT ON `reviews` FOR EACH ROW update coffees set average_rating = (select avg(rating) from reviews where coffee_id=new.coffee_id)
where id=new.coffee_id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gmail` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `avatar` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `gmail`, `role`, `avatar`, `nationality`) VALUES
(1, 'Akihiko', '$2b$12$nay28G.N3HnSObTMbbz6..z6bddQ0GUKBgsqfCqNnjZnB0NkDnPYa', 'akihiko@gmail.com', 'user', NULL, 'japanese'),
(2, 'Sanada', '$2b$12$Tyr8ne4OpWzUeTOYEJwUyuVnRQs7QOhf9nGjgKL7wrmVt1S1v023W', 'sanada@gmail.com', 'admin', NULL, 'japanese'),
(3, 'Le Bao Anh', '$2b$12$6bZZ0D861MdNHtMfLx4OH.WW7ySbEsn4dJzF3R8dh66.vaNc9/IPe', 'anh.lb@gmail.com', 'admin', NULL, 'vietnamese'),
(4, 'Do Minh Quan', '$2b$12$g4ogQtVJZdpRa5sjrKCnH.6n4TcODO58E5yfh/RNb3iI4hNT56L9y', 'quan.dm@gmail.com', 'user', NULL, 'vietnamese');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD PRIMARY KEY (`user_id`,`coffee_id`),
  ADD KEY `coffee_id` (`coffee_id`);

--
-- Indexes for table `coffeeimages`
--
ALTER TABLE `coffeeimages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `coffee_id` (`coffee_id`);

--
-- Indexes for table `coffees`
--
ALTER TABLE `coffees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `posted_user` (`posted_user`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `coffee_id` (`coffee_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gmail` (`gmail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coffeeimages`
--
ALTER TABLE `coffeeimages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `coffees`
--
ALTER TABLE `coffees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD CONSTRAINT `bookmarks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bookmarks_ibfk_2` FOREIGN KEY (`coffee_id`) REFERENCES `coffees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `coffeeimages`
--
ALTER TABLE `coffeeimages`
  ADD CONSTRAINT `coffeeimages_ibfk_1` FOREIGN KEY (`coffee_id`) REFERENCES `coffees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `coffees`
--
ALTER TABLE `coffees`
  ADD CONSTRAINT `coffees_ibfk_1` FOREIGN KEY (`posted_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`coffee_id`) REFERENCES `coffees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
