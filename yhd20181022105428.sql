-- MySQL dump 10.13  Distrib 5.5.53, for Win32 (AMD64)
--
-- Host: localhost    Database: yhd
-- ------------------------------------------------------
-- Server version	5.5.53

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `goodsinfo`
--

DROP TABLE IF EXISTS `goodsinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goodsinfo`
--

LOCK TABLES `goodsinfo` WRITE;
/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('00001','科尔沁 蔬菜牛肉25g/1袋  内蒙古特产 零食小吃 香菇','hotGood',15.8,200,'科尔沁 蔬菜牛肉25g/1袋  内蒙古特产 零食小吃 香菇','img/rank1.jpg','3.9','','','','','','','','','','','',''),('00002','卫龙 【旗舰店】辣条火锅370g懒人火锅速食方便自助小火锅','hotGood',29.9,200,'卫龙 【旗舰店】辣条火锅370g懒人火锅速食方便自助小火锅','img/rank2.jpg','6.5','','','','','','','','','','','',''),('00003','粮悦 大吃兄糯米锅巴1200g 休闲零食 安徽特产手工锅巴原味/香辣400g*3盒 3盒香辣','hotGood',29.9,200,'粮悦 大吃兄糯米锅巴1200g 休闲零食 安徽特产手工锅巴原味/香辣400g*3盒 3盒香辣','img/rank3.jpg','6.5','','','','','','','','','','','',''),('00004','俏香阁 休闲零食 肉干肉脯 独立包装 麻辣牛肉干200g/袋','hotGood',29.9,200,'俏香阁 休闲零食 肉干肉脯 独立包装 麻辣牛肉干200g/袋','img/rank5.jpg','5.5','','','','','','','','','','','',''),('00005','稻香村每日坚果成人A款750g混合坚果什锦果仁孕妇儿童款30包小吃零食组合坚果大礼包','hotGood',29.9,200,'稻香村每日坚果成人A款750g混合坚果什锦果仁孕妇儿童款30包小吃零食组合坚果大礼包','img/rank6.jpg','7.5','','','','','','','','','','','',''),('00006','稻香村每日坚果成人A款750g混合坚果什锦果仁孕妇儿童款30包小吃零食组合坚果大礼包','hotGood',29.9,200,'稻香村每日坚果成人A款750g混合坚果什锦果仁孕妇儿童款30包小吃零食组合坚果大礼包','img/rank7.jpg','7.5','','','','','','','','','','','',''),('00007','张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','hotGood',29.9,200,'张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','img/rank8.jpg','7.5','','','','','','','','','','','',''),('00008','张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','hotGood',29.9,200,'张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','img/rank9.jpg','7.5','','','','','','','','','','','',''),('00009','张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','hotGood',29.9,200,'张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','img/rank10.jpg','7.5','','','','','','','','','','','',''),('00010','张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','hotGood',29.9,200,'张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','img/rank11.jpg','7.5','','','','','','','','','','','',''),('00011','张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','hotGood',29.9,200,'张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','img/rank12.jpg','7.5','','','','','','','','','','','',''),('00012','张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','hotGood',29.9,200,'张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','img/rank13.jpg','7.5','','','','','','','','','','','',''),('00013','张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','hotGood',29.9,200,'张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','img/rank14.jpg','7.5','','','','','','','','','','','',''),('00014','张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','hotGood',29.9,200,'张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','img/rank15.jpg','7.5','','','','','','','','','','','',''),('00015','张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','hotGood',29.9,200,'张二嘎 南瓜子500g原味盐焗味坚果炒货休闲小零食独立小包熟小粒香南瓜籽熟南瓜子新货南瓜子批发 张二嘎盐焗南瓜子500g','img/rank16.jpg','7.5','','','','','','','','','','','',''),('','','',0,0,'','','','','','','','','','','','','','','');
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppingcart`
--

DROP TABLE IF EXISTS `shoppingcart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppingcart`
--

LOCK TABLES `shoppingcart` WRITE;
/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(40) DEFAULT NULL,
  `userpass` char(40) DEFAULT NULL,
  `userphone` char(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES (2,'肖雨','*1225.xy','17793639387'),(5,'gqgq','123qwe!','18729636052'),(4,'1521620063','Csy1521620063#','13209370042'),(6,'陈思扬','Csy1521620063#','13209370042');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-22 10:54:32
