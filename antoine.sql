-- phpMyAdmin SQL Dump
-- version 2.11.7.1
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Lun 16 Mai 2011 à 02:02
-- Version du serveur: 5.0.41
-- Version de PHP: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Base de données: `antoine`
--

-- --------------------------------------------------------

--
-- Structure de la table `article_need`
--

CREATE TABLE `article_need` (
	  `id` int(32) NOT NULL auto_increment,
	  `demand_id` int(32) NOT NULL,
	  `name` varchar(128) collate utf8_unicode_ci NOT NULL,
	  `quantity` int(16) NOT NULL,
	  `price_need` float NOT NULL,
	  `freeze` tinyint(1) NOT NULL,
	  `fixed` tinyint(1) NOT NULL,
	  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=10 ;

--
-- Contenu de la table `article_need`
--

INSERT INTO `article_need` VALUES(1, 1, 'Sapin diamètre (tronc 14 cm)', 46, 60, 1, 0);
INSERT INTO `article_need` VALUES(2, 1, 'Palmier palmito', 10, 500, 0, 0);
INSERT INTO `article_need` VALUES(3, 1, 'Radis géant de colombie', 1, 18, 0, 0);
INSERT INTO `article_need` VALUES(4, 2, 'Rosier', 40, 30, 0, 0);
INSERT INTO `article_need` VALUES(5, 2, 'MontroPlante', 4, 340000, 0, 0);
INSERT INTO `article_need` VALUES(6, 3, 'Truc', 3, 45, 0, 0);
INSERT INTO `article_need` VALUES(7, 4, 'Bananier', 5, 600, 0, 0);
INSERT INTO `article_need` VALUES(8, 4, 'Cocotier', 56, 700, 0, 0);
INSERT INTO `article_need` VALUES(9, 5, 'Lavande', 500, 45, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `article_offer`
--

CREATE TABLE `article_offer` (
	  `id` int(32) NOT NULL auto_increment,
	  `offer_id` int(32) NOT NULL,
	  `artcile_need_id` int(32) NOT NULL,
	  `creation_date` datetime NOT NULL,
	  `last_update` datetime NOT NULL,
	  `price` float NOT NULL,
	  `new_name` varchar(128) collate utf8_unicode_ci NOT NULL,
	  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Contenu de la table `article_offer`
--

INSERT INTO `article_offer` VALUES(1, 1, 2, '2011-03-26 00:03:59', '2011-03-26 00:04:04', 12, '');
INSERT INTO `article_offer` VALUES(2, 1, 3, '2011-03-26 00:05:24', '2011-03-26 00:05:27', 120, 'un truc un peu plus classic');

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
	  `id` int(32) NOT NULL auto_increment,
	  `company_id` int(32) NOT NULL,
	  `firstname` varchar(64) collate utf8_unicode_ci NOT NULL,
	  `lastname` varchar(64) collate utf8_unicode_ci NOT NULL,
	  `email` varchar(64) collate utf8_unicode_ci NOT NULL,
	  `cellphone` varchar(64) collate utf8_unicode_ci NOT NULL,
	  `phone` varchar(64) collate utf8_unicode_ci NOT NULL,
	  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

--
-- Contenu de la table `contact`
--


-- --------------------------------------------------------

--
-- Structure de la table `demand`
--

CREATE TABLE `demand` (
	  `id` int(32) NOT NULL auto_increment,
	  `user_id` int(32) NOT NULL,
	  `reference` varchar(64) collate utf8_unicode_ci NOT NULL,
	  `creation_date` datetime NOT NULL,
	  `last_update` datetime NOT NULL,
	  `end_date` datetime NOT NULL,
	  `title` varchar(128) collate utf8_unicode_ci NOT NULL,
	  `city` varchar(128) collate utf8_unicode_ci NOT NULL,
	  `city_code` varchar(32) collate utf8_unicode_ci NOT NULL,
	  `x` double NOT NULL,
	  `y` double NOT NULL,
	  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Contenu de la table `demand`
--

INSERT INTO `demand` VALUES(1, 2, 'REF345', '2011-03-20 21:17:20', '2011-03-20 21:17:31', '2011-06-30 00:00:00', 'Village Vacances dans les Landes', 'Nantes', '44000', 0, 0);
INSERT INTO `demand` VALUES(2, 2, 'RF453', '2011-04-29 21:34:23', '2011-04-29 21:34:26', '2011-07-30 21:34:30', 'Chantier de la Garenne colombe', 'Paris', '92300', 0, 0);
INSERT INTO `demand` VALUES(3, 1, '34567', '2011-04-29 21:35:19', '2011-04-29 21:35:22', '2011-04-30 21:35:26', 'Les bosses rouges', 'Carnon', '34280', 0, 0);
INSERT INTO `demand` VALUES(4, 2, 'REF345', '2011-04-06 00:00:00', '2011-04-30 00:00:00', '2011-09-15 00:00:00', 'Chantier des bois', 'Montpellier', '34000', 0, 0);
INSERT INTO `demand` VALUES(5, 2, 'REF5678', '2011-05-01 00:00:00', '2011-05-01 00:00:00', '2011-05-27 00:00:00', 'Aire des piverts', 'Creteil', '92345', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `dictionary`
--

CREATE TABLE `dictionary` (
	  `id` int(11) NOT NULL auto_increment,
	  `lang_key` varchar(8) collate utf8_unicode_ci NOT NULL,
	  `namespace` varchar(32) collate utf8_unicode_ci NOT NULL,
	  `key` varchar(40) collate utf8_unicode_ci NOT NULL,
	  `value` text collate utf8_unicode_ci NOT NULL,
	  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=40 ;

--
-- Contenu de la table `dictionary`
--

INSERT INTO `dictionary` VALUES(1, 'fr', 'login', 'Login', 'Email');
INSERT INTO `dictionary` VALUES(2, 'fr', 'login', 'Password', 'Mot de passe');
INSERT INTO `dictionary` VALUES(3, 'fr', 'login', 'Wrong', 'Mauvais email / mot de passe');
INSERT INTO `dictionary` VALUES(4, 'fr', 'login', 'BtnConnect', 'Connexion');
INSERT INTO `dictionary` VALUES(5, 'fr', 'user', 'Logout', 'Deconnexion');
INSERT INTO `dictionary` VALUES(6, 'en', 'login', 'Login', 'Email');
INSERT INTO `dictionary` VALUES(7, 'en', 'login', 'Password', 'Password');
INSERT INTO `dictionary` VALUES(8, 'en', 'login', 'Wrong', 'Bad email / password');
INSERT INTO `dictionary` VALUES(9, 'en', 'login', 'BtnConnect', 'Connect');
INSERT INTO `dictionary` VALUES(10, 'en', 'user', 'Logout', 'Logout');
INSERT INTO `dictionary` VALUES(11, 'fr', 'user', 'LogAs', 'Connecté en tant que');
INSERT INTO `dictionary` VALUES(12, 'en', 'user', 'LogAs', 'Login as ');
INSERT INTO `dictionary` VALUES(13, 'fr', 'login', 'Autolog', 'Se connecté automatiquement');
INSERT INTO `dictionary` VALUES(14, 'en', 'login', 'Autolog', 'Autologin');
INSERT INTO `dictionary` VALUES(15, 'fr', 'global', 'Refresh', 'Rafraichir');
INSERT INTO `dictionary` VALUES(16, 'en', 'global', 'Refresh', 'Refresh');
INSERT INTO `dictionary` VALUES(17, 'fr', 'global', 'Search', 'Rechercher');
INSERT INTO `dictionary` VALUES(18, 'en', 'global', 'Search', 'Search');
INSERT INTO `dictionary` VALUES(19, 'fr', 'global', 'Search', 'Rechercher');
INSERT INTO `dictionary` VALUES(20, 'fr', 'filter', 'Filter', 'Filtre');
INSERT INTO `dictionary` VALUES(21, 'en', 'filter', 'Filter', 'Filter');
INSERT INTO `dictionary` VALUES(22, 'fr', 'filter', 'From', 'de');
INSERT INTO `dictionary` VALUES(23, 'en', 'filter', 'From', 'from');
INSERT INTO `dictionary` VALUES(24, 'fr', 'filter', 'To', 'à');
INSERT INTO `dictionary` VALUES(25, 'en', 'filter', 'To', 'to');
INSERT INTO `dictionary` VALUES(26, 'fr', 'demand', 'New', 'Nouvelle demande');
INSERT INTO `dictionary` VALUES(27, 'en', 'demand', 'New', 'New demand');
INSERT INTO `dictionary` VALUES(28, 'fr', 'demand', 'Reference', 'Référence');
INSERT INTO `dictionary` VALUES(29, 'en', 'demand', 'Reference', 'Reference');
INSERT INTO `dictionary` VALUES(30, 'fr', 'demand', 'Title', 'Titre');
INSERT INTO `dictionary` VALUES(31, 'en', 'demand', 'Title', 'Title');
INSERT INTO `dictionary` VALUES(32, 'fr', 'demand', 'City', 'Ville');
INSERT INTO `dictionary` VALUES(33, 'en', 'demand', 'City', 'City');
INSERT INTO `dictionary` VALUES(34, 'fr', 'demand', 'CityCode', 'Code postal');
INSERT INTO `dictionary` VALUES(35, 'en', 'demand', 'CityCode', 'City code');
INSERT INTO `dictionary` VALUES(36, 'fr', 'demand', 'CreatedOn', 'créer le');
INSERT INTO `dictionary` VALUES(37, 'en', 'demand', 'CreatedOn', 'created on');
INSERT INTO `dictionary` VALUES(38, 'fr', 'global', 'Edit', 'Editer');
INSERT INTO `dictionary` VALUES(39, 'en', 'global', 'Edit', 'Edit');

-- --------------------------------------------------------

--
-- Structure de la table `lang`
--

CREATE TABLE `lang` (
	  `id` tinyint(4) NOT NULL auto_increment,
	  `key` varchar(8) collate utf8_unicode_ci NOT NULL,
	  `label` varchar(32) collate utf8_unicode_ci NOT NULL,
	  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

--
-- Contenu de la table `lang`
--


-- --------------------------------------------------------

--
-- Structure de la table `offer`
--

CREATE TABLE `offer` (
	  `id` int(32) NOT NULL auto_increment,
	  `demand_id` int(32) NOT NULL,
	  `user_id` int(32) NOT NULL,
	  `creation_date` datetime NOT NULL,
	  `last_update` datetime NOT NULL,
	  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Contenu de la table `offer`
--

INSERT INTO `offer` VALUES(1, 1, 3, '2011-03-26 00:03:19', '2011-03-26 00:03:23');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
	  `id` int(11) NOT NULL auto_increment,
	  `email` varchar(50) collate utf8_unicode_ci NOT NULL,
	  `password` varchar(50) collate utf8_unicode_ci NOT NULL,
	  `type` int(8) NOT NULL,
	  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` VALUES(1, 'franck.ernewein@gmail.com', 'citron', 1);
INSERT INTO `users` VALUES(2, 'trade@antoinegroupe.com', '123456', 2);
INSERT INTO `users` VALUES(3, 'bengalo@yahoo.fr', '123456', 3);

-- --------------------------------------------------------

--
-- Structure de la table `user_type`
--

CREATE TABLE `user_type` (
	  `id` int(11) NOT NULL,
	  `desc` varchar(32) collate utf8_unicode_ci NOT NULL,
	  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `user_type`
--

INSERT INTO `user_type` VALUES(1, 'admin');
INSERT INTO `user_type` VALUES(2, 'announceur');
INSERT INTO `user_type` VALUES(3, 'supplier');

