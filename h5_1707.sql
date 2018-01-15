/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1707

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-08 21:15:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '玮莉娜S925银项链女款芙蓉石吊坠女士XL-501026', '../images/index_subject_1.jpg', '9.99', 'subject');
INSERT INTO `goods` VALUES ('2', '玮莉娜S925银项链女款芙蓉石吊坠女士XL-501026', '../images/index_subject_2.jpg', '9.99', 'subject');
INSERT INTO `goods` VALUES ('3', '玮莉娜S925银项链女款芙蓉石吊坠女士XL-501026', '../images/index_subject_3.jpg', '12.99', 'subject');
INSERT INTO `goods` VALUES ('4', '玮莉娜S925银项链女款芙蓉石吊坠女士XL-501026', '../images/index_subject_4.jpg', '19.99', 'subject');
INSERT INTO `goods` VALUES ('5', '玮莉娜S925银项链女款芙蓉石吊坠女士XL-501026', '../images/index_subject_5.jpg', '9.99', 'subject');
INSERT INTO `goods` VALUES ('6', '橘子庄园黑色电动开瓶器310-B01 ', '../images/index_area_1.jpg', '9.99', 'area');
INSERT INTO `goods` VALUES ('7', '玮莉娜S925银项链女款芙蓉石吊坠女士XL-501026', '../images/index_area_2.jpg', '12.99', 'area');
INSERT INTO `goods` VALUES ('8', '玮莉娜S925银项链女款芙蓉石吊坠女士XL-501026', '../images/index_area_3.jpg', '19.99', 'area');
INSERT INTO `goods` VALUES ('9', '玮莉娜S925银项链女款芙蓉石吊坠女士XL-501026', '../images/index_area_4.jpg', '9.99', 'area');
INSERT INTO `goods` VALUES ('10', '玮莉娜S925银项链女款芙蓉石吊坠女士XL-501026', '../images/index_area_5.jpg', '12.99', 'area');
INSERT INTO `goods` VALUES ('11', '玮莉娜S925银项链女款芙蓉石吊坠女士XL-501026', '../images/index_area_6.jpg', '12.99', 'area');
INSERT INTO `goods` VALUES ('12', '橘子庄园黑色电动开瓶器310-B01 ', '../images/p1.jpg', '9.99', 'conp');
INSERT INTO `goods` VALUES ('13', '橘子庄园黑色电动开瓶器310-B01 ', '../images/p2.jpg', '9.99', 'conp');
INSERT INTO `goods` VALUES ('14', '橘子庄园黑色电动开瓶器310-B01', '../images/p3.jpg', '12.99', 'conp');
INSERT INTO `goods` VALUES ('15', '橘子庄园黑色电动开瓶器310-B01', '../images/p4.jpg', '19.99', 'conp');
INSERT INTO `goods` VALUES ('16', '橘子庄园黑色电动开瓶器310-B01', '../images/p5.jpg', '9.99', 'conp');
INSERT INTO `goods` VALUES ('17', '橘子庄园黑色电动开瓶器310-B01', '../images/m1.jpg', '9.99', 'conm');
INSERT INTO `goods` VALUES ('18', '橘子庄园黑色电动开瓶器310-B01 ', '../images/m2.jpg', '9.99', 'conm');
INSERT INTO `goods` VALUES ('19', '橘子庄园黑色电动开瓶器310-B01', '../images/m3.jpg', '12.99', 'conm');
INSERT INTO `goods` VALUES ('20', '橘子庄园黑色电动开瓶器310-B01', '../images/m4.jpg', '19.99', 'conm');
INSERT INTO `goods` VALUES ('21', '橘子庄园黑色电动开瓶器310-B01', '../images/m5.jpg', '9.99', 'conm');
INSERT INTO `goods` VALUES ('22', '橘子庄园黑色电动开瓶器310-B01', '../images/m6.jpg', '9.99', 'conm');
INSERT INTO `goods` VALUES ('23', '橘子庄园黑色电动开瓶器310-B01 ', '../images/m7.jpg', '9.99', 'conm');
INSERT INTO `goods` VALUES ('24', '橘子庄园黑色电动开瓶器310-B01', '../images/c1.jpg', '12.99', 'conmx');
INSERT INTO `goods` VALUES ('25', '橘子庄园黑色电动开瓶器310-B01', '../images/c2.jpg', '19.99', 'conmx');
INSERT INTO `goods` VALUES ('26', '橘子庄园黑色电动开瓶器310-B01', '../images/c3.jpg', '9.99', 'conmx');
INSERT INTO `goods` VALUES ('27', '橘子庄园黑色电动开瓶器310-B01', '../images/c4.jpg', '9.99', 'conmx');
INSERT INTO `goods` VALUES ('28', '橘子庄园黑色电动开瓶器310-B01 ', '../images/c5.jpg', '9.99', 'conmx');
INSERT INTO `goods` VALUES ('29', '橘子庄园黑色电动开瓶器310-B01', '../images/c6.jpg', '12.99', 'conmc');
INSERT INTO `goods` VALUES ('30', '橘子庄园黑色电动开瓶器310-B01', '../images/c7.jpg', '19.99', 'conmc');
INSERT INTO `goods` VALUES ('31 ', '大地之母', '../images/p6.jpg', '67', 'conp');
INSERT INTO `goods` VALUES ('32', '芙蓉石吊坠女士XL-501026', '../images/p7.jpg', '776', 'conp');
INSERT INTO `goods` VALUES ('33', '芙蓉石吊坠女士XL-501026', '../images/p8.jpg', '354', 'conp');
INSERT INTO `goods` VALUES ('34', '芙蓉石吊坠', '../images/p9.jpg', '654', 'conp');
INSERT INTO `goods` VALUES ('35', '芙蓉石吊坠', '../images/p10.jpg', '3453', 'conp');
INSERT INTO `goods` VALUES ('36', '大地之母', '../images/p12.jpg', '242', 'conp');
INSERT INTO `goods` VALUES ('37', '大地之母', '../images/p13.jpg', '243', 'conp');
INSERT INTO `goods` VALUES ('38', '大地之母', '../images/p14.jpg', '354', 'conp');
INSERT INTO `goods` VALUES ('39', '大地之母', '../images/p15.jpg', '876', 'conp');
INSERT INTO `goods` VALUES ('40', '大地之母', '../images/p16.jpg', '455', 'conp');
INSERT INTO `goods` VALUES ('41 ', '大地之母', '../images/p17.jpg', '3450', 'conp');
INSERT INTO `goods` VALUES ('42', '大地之母', '../images/p18.jpg', '43543', 'conp');
INSERT INTO `goods` VALUES ('43', '大地之母', '../images/p11.jpg', '754', 'conp');
INSERT INTO `goods` VALUES ('44', '大地之母', '../images/p19.jpg', '866', 'conp');
INSERT INTO `goods` VALUES ('45', '大地之母', '../images/p20.jpg', '5674', 'conp');
INSERT INTO `goods` VALUES ('46', '大地之母', '../images/p21.jpg', '532', 'conp');
INSERT INTO `goods` VALUES ('47', '大地之母', '../images/p22.jpg', '6745', 'conp');
INSERT INTO `goods` VALUES ('48', '大地之母', '../images/p23.jpg', '666', 'conp');
INSERT INTO `goods` VALUES ('49', '大地之母', '../images/p24.jpg', '777', 'conp');
INSERT INTO `goods` VALUES ('50', '大地之母', '../images/p25.jpg', '888', 'conp');
INSERT INTO `goods` VALUES ('51', '大地之母', '../images/p26.jpg', '999', 'conf');
INSERT INTO `goods` VALUES ('52', '大地之母', '../images/p27.jpg', '1000', 'conf');
INSERT INTO `goods` VALUES ('53', '素女知己', '../images/c8.jpg', '444', 'conmx');
INSERT INTO `goods` VALUES ('54', '素女知己', '../images/c9.jpg', '333', 'conmx');
INSERT INTO `goods` VALUES ('55', '素女知己', '../images/c10.jpg', '255', 'conmx');
INSERT INTO `goods` VALUES ('56', '素女知己', '../images/c6.jpg', '345', 'conmx');
INSERT INTO `goods` VALUES ('57', '素女知己', '../images/c7.jpg', '565', 'conmx');
INSERT INTO `goods` VALUES ('58', '猜你所爱', '../images/c11.jpg', '233', 'conmx');
INSERT INTO `goods` VALUES ('59', '猜你所爱', '../images/c12.jpg', '112', 'conmx');
INSERT INTO `goods` VALUES ('60', '猜你所爱', '../images/c13.jpg', '231', 'conmx');
INSERT INTO `goods` VALUES ('61', '猜你所爱', '../images/c14.jpg', '345', 'conmx');
INSERT INTO `goods` VALUES ('62', '猜你所爱', '../images/c15.jpg', '654', 'conmx');
INSERT INTO `goods` VALUES ('63', '时宇天空', '../images/c16.jpg', '1245', 'conmx');
INSERT INTO `goods` VALUES ('64', '时宇天空', '../images/c17.jpg', '7645', 'conmx');
INSERT INTO `goods` VALUES ('65', '时宇天空', '../images/c18.jpg', '564', 'conmx');
INSERT INTO `goods` VALUES ('66', '时宇天空', '../images/c19.jpg', '3456', 'conmx');
INSERT INTO `goods` VALUES ('67', '时宇天空', '../images/c20.jpg', '6842', 'conmx');

-- ----------------------------
-- Table structure for usernam
-- ----------------------------
DROP TABLE IF EXISTS `usernam`;
CREATE TABLE `usernam` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usernam
-- ----------------------------
INSERT INTO `usernam` VALUES ('1', '13595805749', '123456');
INSERT INTO `usernam` VALUES ('2', '13595805751', '123456');
INSERT INTO `usernam` VALUES ('3', '13595805766', '123456');
INSERT INTO `usernam` VALUES ('4', '13595805799', '123456');
INSERT INTO `usernam` VALUES ('5', '13595805700', '123456');
INSERT INTO `usernam` VALUES ('6', '13595805743', '123456');
INSERT INTO `usernam` VALUES ('7', '13595805744', '123456');
INSERT INTO `usernam` VALUES ('8', '13595805720', '123456');
INSERT INTO `usernam` VALUES ('9', '13595805756', '123456');
INSERT INTO `usernam` VALUES ('10', '', '123456');
SET FOREIGN_KEY_CHECKS=1;
