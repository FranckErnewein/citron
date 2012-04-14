-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Sam 14 Avril 2012 à 09:57
-- Version du serveur: 5.5.9
-- Version de PHP: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Base de données: `antoine`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
	  `id` int(32) NOT NULL AUTO_INCREMENT,
	  `demand_id` int(32) NOT NULL,
	  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
	  `quantity` int(16) NOT NULL,
	  `price_need` float NOT NULL,
	  `freeze` tinyint(1) NOT NULL,
	  `fixed` tinyint(1) NOT NULL,
	  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=86 ;

--
-- Contenu de la table `article`
--

INSERT INTO `article` VALUES(79, 1, 'tetet', 3, 6, 0, 0);
INSERT INTO `article` VALUES(2, 1, 'Palmier palmito', 4, 500, 0, 0);
INSERT INTO `article` VALUES(58, 29, 'Sapin', 45, 300, 0, 0);
INSERT INTO `article` VALUES(4, 2, 'Rosier', 40, 30, 0, 0);
INSERT INTO `article` VALUES(5, 2, 'MonstroPlante', 4, 340000, 0, 0);
INSERT INTO `article` VALUES(6, 3, 'Truc', 3, 45, 0, 0);
INSERT INTO `article` VALUES(7, 4, 'Bananier', 5, 600, 0, 0);
INSERT INTO `article` VALUES(27, 2, 'zzzz', 666, 655, 0, 0);
INSERT INTO `article` VALUES(9, 5, 'Lavande', 300, 45, 0, 0);
INSERT INTO `article` VALUES(26, 6, 'electrique', 432, 23, 0, 0);
INSERT INTO `article` VALUES(28, 2, 'content2', 1, 40, 0, 0);
INSERT INTO `article` VALUES(29, 2, 'truc', 143, 234, 0, 0);
INSERT INTO `article` VALUES(31, 5, 'Lentille d\\''eau', 500, 4, 0, 0);
INSERT INTO `article` VALUES(32, 5, 'é\\\\\\"ç_\\\\\\''èç', 4348, 333, 0, 0);
INSERT INTO `article` VALUES(33, 5, 'mouais', 4, 55, 0, 0);
INSERT INTO `article` VALUES(35, 4, 'check', 1, 1, 0, 0);
INSERT INTO `article` VALUES(36, 9, 'Designation', 43, 4535, 0, 0);
INSERT INTO `article` VALUES(37, 17, 'xcvb', 40, 20, 0, 0);
INSERT INTO `article` VALUES(38, 8, 'bkla', 86957, 69, 0, 0);
INSERT INTO `article` VALUES(39, 8, 'qqqq', 444, 555, 0, 0);
INSERT INTO `article` VALUES(40, 8, '8/76è(r v-yfli;%%¤', 528, 78, 0, 0);
	INSERT INTO `article` VALUES(41, 8, '日本語', 7452, 78, 0, 0);
	INSERT INTO `article` VALUES(42, 8, '----7', 44, 45, 0, 0);
	INSERT INTO `article` VALUES(43, 1, 'Pin', 45, 300, 0, 0);
	INSERT INTO `article` VALUES(45, 1, 'Marguerite', 500, 52, 0, 0);
	INSERT INTO `article` VALUES(47, 18, 'XCVB', 445, 55, 0, 0);
	INSERT INTO `article` VALUES(48, 21, 'Rosiers', 300, 10, 0, 0);
	INSERT INTO `article` VALUES(49, 21, 'platanes', 200, 20, 0, 0);
	INSERT INTO `article` VALUES(50, 22, 'Sapin', 25, 8000, 0, 0);
	INSERT INTO `article` VALUES(51, 22, 'Cyprès', 12, 3000, 0, 0);
	INSERT INTO `article` VALUES(52, 22, 'Rosier', 125, 8000, 0, 0);
	INSERT INTO `article` VALUES(53, 26, 'Pavé', 500, 34, 0, 0);
	INSERT INTO `article` VALUES(54, 26, 'Tfghgf', 13, 24, 0, 0);
	INSERT INTO `article` VALUES(57, 28, 'Pommier', 45, 12, 0, 0);
	INSERT INTO `article` VALUES(59, 29, 'rosier', 12, 45, 0, 0);
	INSERT INTO `article` VALUES(60, 30, 'oui', 1, 23, 0, 0);
	INSERT INTO `article` VALUES(64, 32, 'Sapin', 20, 30, 0, 0);
	INSERT INTO `article` VALUES(65, 32, '234', 45, 300, 0, 0);
	INSERT INTO `article` VALUES(68, 1, 'new article', 2, 45, 0, 0);
	INSERT INTO `article` VALUES(76, 38, 'Pin', 15, 400, 0, 0);
	INSERT INTO `article` VALUES(77, 38, 'Laurier', 40, 230, 0, 0);
	INSERT INTO `article` VALUES(78, 2, 'oops', 12, 23, 0, 0);
	INSERT INTO `article` VALUES(85, 1, 'acer campestre', 100, 3, 0, 0);
	INSERT INTO `article` VALUES(81, 4, 'qsdf', 33, 45, 0, 0);

	-- --------------------------------------------------------

	--
	-- Structure de la table `article_need`
	--

	CREATE TABLE `article_need` (
		  `id` int(32) NOT NULL AUTO_INCREMENT,
		  `demand_id` int(32) NOT NULL,
		  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
		  `quantity` int(16) NOT NULL,
		  `price_need` float NOT NULL,
		  `freeze` tinyint(1) NOT NULL,
		  `fixed` tinyint(1) NOT NULL,
		  PRIMARY KEY (`id`)
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
		  `id` int(32) NOT NULL AUTO_INCREMENT,
		  `offer_id` int(32) NOT NULL,
		  `artcile_need_id` int(32) NOT NULL,
		  `creation_date` datetime NOT NULL,
		  `last_update` datetime NOT NULL,
		  `price` float NOT NULL,
		  `new_name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
		  PRIMARY KEY (`id`)
	) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

	--
	-- Contenu de la table `article_offer`
	--

	INSERT INTO `article_offer` VALUES(1, 1, 2, '2011-03-26 00:03:59', '2011-03-26 00:04:04', 12, '');
	INSERT INTO `article_offer` VALUES(2, 1, 3, '2011-03-26 00:05:24', '2011-03-26 00:05:27', 120, 'un truc un peu plus classic');

	-- --------------------------------------------------------

	--
	-- Structure de la table `company`
	--

	CREATE TABLE `company` (
		  `id` int(8) NOT NULL AUTO_INCREMENT,
		  `siret` varchar(24) NOT NULL,
		  `name` varchar(32) NOT NULL,
		  `address` text NOT NULL,
		  `phone` varchar(20) NOT NULL,
		  `mail` varchar(50) NOT NULL,
		  `fax` varchar(20) NOT NULL,
		  PRIMARY KEY (`id`)
	) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

	--
	-- Contenu de la table `company`
	--

	INSERT INTO `company` VALUES(1, '1234567', 'AntoineGroupe', 'St Livradez', '01 02 03 04 05', 'contact@antoinegroupe.com', '20 02 02 01');
	INSERT INTO `company` VALUES(2, '22334455', 'Bingalot&Co', 'St Martin de Londres', '', 'contact@bingalot.com', '');
	INSERT INTO `company` VALUES(3, '122345', 'Ferasse', '30 rue foch\r\n34000 Montpellier', '', '', '');
	INSERT INTO `company` VALUES(4, '3344556', 'Pepiniere Lafayette', '12 rue de détour\r\n34000 Montpellier', '01 23 45 67 98', 'sisi@lafayette.com', '01 23 45 67 98');

	-- --------------------------------------------------------

	--
	-- Structure de la table `company_x_seller`
	--

	CREATE TABLE `company_x_seller` (
		  `id` int(32) NOT NULL AUTO_INCREMENT,
		  `company_id` int(16) NOT NULL,
		  `seller_id` int(16) NOT NULL,
		  `accepted` tinyint(1) NOT NULL,
		  PRIMARY KEY (`id`)
	) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

	--
	-- Contenu de la table `company_x_seller`
	--

	INSERT INTO `company_x_seller` VALUES(1, 1, 2, 1);
	INSERT INTO `company_x_seller` VALUES(2, 1, 3, 1);
	INSERT INTO `company_x_seller` VALUES(3, 4, 3, 1);

	-- --------------------------------------------------------

	--
	-- Structure de la table `contact`
	--

	CREATE TABLE `contact` (
		  `id` int(32) NOT NULL AUTO_INCREMENT,
		  `company_id` int(32) NOT NULL,
		  `firstname` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
		  `lastname` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
		  `email` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
		  `cellphone` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
		  `phone` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
		  PRIMARY KEY (`id`)
	) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

	--
	-- Contenu de la table `contact`
	--


	-- --------------------------------------------------------

	--
	-- Structure de la table `demand`
	--

	CREATE TABLE `demand` (
		  `id` int(32) NOT NULL AUTO_INCREMENT,
		  `user_id` int(32) NOT NULL,
		  `company_id` int(8) NOT NULL,
		  `reference` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
		  `creation_date` datetime NOT NULL,
		  `last_update` datetime NOT NULL,
		  `end_date` datetime NOT NULL,
		  `title` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
		  `city` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
		  `city_code` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
		  `x` double NOT NULL,
		  `y` double NOT NULL,
		  PRIMARY KEY (`id`)
	) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=61 ;

	--
	-- Contenu de la table `demand`
	--

	INSERT INTO `demand` VALUES(1, 2, 1, 'REF345', '2012-04-14 09:28:19', '2012-04-14 09:28:19', '2012-04-14 09:28:19', 'Village Vacances dans les Landes', 'Nancy', '44022', 24, 0);
	INSERT INTO `demand` VALUES(2, 2, 1, '1234', '2012-01-25 19:28:10', '2012-01-25 19:28:10', '2012-01-25 19:28:10', 'Chantier de la Garenne colombe', 'Paris', '92300', 0, 0);
	INSERT INTO `demand` VALUES(3, 1, 0, '34567', '2011-04-29 21:35:19', '2011-04-29 21:35:22', '2011-04-30 21:35:26', 'Les bosses rouges', 'Carnon', '34280', 0, 0);
	INSERT INTO `demand` VALUES(5, 2, 1, 'REF5678', '2011-11-24 16:21:36', '2011-11-24 16:21:36', '2011-11-24 16:21:36', 'Aire des piverts', 'Creteil', '92345', 0, 0);
	INSERT INTO `demand` VALUES(19, 2, 1, 'dfgh', '2011-11-30 23:36:57', '2011-11-30 23:36:57', '2011-11-30 23:36:57', 'Aucun article !!!', 'dfgh', 'dfgh', 0, 0);
	INSERT INTO `demand` VALUES(8, 2, 1, '3543', '2011-11-24 15:40:03', '2011-11-24 15:40:03', '2011-11-24 15:40:03', 'Test typo !', 'Carnon', '34280', 0, 0);
	INSERT INTO `demand` VALUES(59, 2, 1, '34', '2012-04-13 21:42:44', '2012-04-13 21:42:44', '2012-04-13 21:42:44', 'modif', '53534', '345(', 0, 0);
		INSERT INTO `demand` VALUES(57, 2, 1, 'nonon', '2012-04-13 21:26:47', '2012-04-13 21:26:47', '2012-04-13 21:26:47', 'non', '3RZ', '234234', 0, 0);

		-- --------------------------------------------------------

		--
		-- Structure de la table `demand_x_tag`
		--

		CREATE TABLE `demand_x_tag` (
			  `id` int(32) NOT NULL AUTO_INCREMENT,
			  `demand_id` int(16) NOT NULL,
			  `tag_id` int(16) NOT NULL,
			  PRIMARY KEY (`id`)
		) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

		--
		-- Contenu de la table `demand_x_tag`
		--

		INSERT INTO `demand_x_tag` VALUES(1, 1, 10);
		INSERT INTO `demand_x_tag` VALUES(2, 1, 11);
		INSERT INTO `demand_x_tag` VALUES(3, 2, 10);

		-- --------------------------------------------------------

		--
		-- Structure de la table `dictionary`
		--

		CREATE TABLE `dictionary` (
			  `id` int(11) NOT NULL AUTO_INCREMENT,
			  `lang_key` varchar(8) COLLATE utf8_unicode_ci NOT NULL,
			  `namespace` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
			  `key` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
			  `value` text COLLATE utf8_unicode_ci NOT NULL,
			  PRIMARY KEY (`id`)
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
		-- Structure de la table `group`
		--

		CREATE TABLE `group` (
			  `id` int(32) NOT NULL AUTO_INCREMENT,
			  `company_id` int(32) NOT NULL,
			  `name` varchar(32) NOT NULL,
			  PRIMARY KEY (`id`)
		) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

		--
		-- Contenu de la table `group`
		--

		INSERT INTO `group` VALUES(1, 1, 'Fournitures');
		INSERT INTO `group` VALUES(2, 1, 'Buisson');
		INSERT INTO `group` VALUES(3, 1, 'Arbres frutier');

		-- --------------------------------------------------------

		--
		-- Structure de la table `group_x_company`
		--

		CREATE TABLE `group_x_company` (
			  `id` int(32) NOT NULL AUTO_INCREMENT,
			  `group_id` int(32) NOT NULL,
			  `company_id` int(32) NOT NULL,
			  PRIMARY KEY (`id`)
		) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

		--
		-- Contenu de la table `group_x_company`
		--

		INSERT INTO `group_x_company` VALUES(1, 2, 2);
		INSERT INTO `group_x_company` VALUES(2, 3, 2);
		INSERT INTO `group_x_company` VALUES(3, 1, 3);
		INSERT INTO `group_x_company` VALUES(5, 2, 4);

		-- --------------------------------------------------------

		--
		-- Structure de la table `lang`
		--

		CREATE TABLE `lang` (
			  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
			  `key` varchar(8) COLLATE utf8_unicode_ci NOT NULL,
			  `label` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
			  PRIMARY KEY (`id`)
		) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

		--
		-- Contenu de la table `lang`
		--


		-- --------------------------------------------------------

		--
		-- Structure de la table `offer`
		--

		CREATE TABLE `offer` (
			  `id` int(32) NOT NULL AUTO_INCREMENT,
			  `demand_id` int(32) NOT NULL,
			  `user_id` int(32) NOT NULL,
			  `creation_date` datetime NOT NULL,
			  `last_update` datetime NOT NULL,
			  PRIMARY KEY (`id`)
		) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

		--
		-- Contenu de la table `offer`
		--

		INSERT INTO `offer` VALUES(1, 1, 3, '2011-03-26 00:03:19', '2011-03-26 00:03:23');

		-- --------------------------------------------------------

		--
		-- Structure de la table `tag`
		--

		CREATE TABLE `tag` (
			  `id` int(32) NOT NULL AUTO_INCREMENT,
			  `company_id` int(8) NOT NULL,
			  `label` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
			  `css_class` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
			  `color` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
			  PRIMARY KEY (`id`)
		) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=25 ;

		--
		-- Contenu de la table `tag`
		--

		INSERT INTO `tag` VALUES(10, 1, 'demande', 'warning', '');
		INSERT INTO `tag` VALUES(20, 1, 'urgent', 'important', '');
		INSERT INTO `tag` VALUES(22, 1, 'devis', 'success', '');
		INSERT INTO `tag` VALUES(23, 1, 'validé', 'notice', '');
		INSERT INTO `tag` VALUES(24, 1, 'étude', 'notice', '');

		-- --------------------------------------------------------

		--
		-- Structure de la table `user`
		--

		CREATE TABLE `user` (
			  `id` int(11) NOT NULL AUTO_INCREMENT,
			  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
			  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
			  `type` int(8) NOT NULL,
			  `creation_date` datetime NOT NULL,
			  `company_id` int(8) NOT NULL,
			  `firstname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
			  `lastname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
			  PRIMARY KEY (`id`)
		) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=36 ;

		--
		-- Contenu de la table `user`
		--

		INSERT INTO `user` VALUES(1, 'franck.ernewein@gmail.com', 'citron', 1, '2011-08-29 18:01:06', 0, '', '');
		INSERT INTO `user` VALUES(2, 'trade@antoinegroupe.com', '123456', 2, '2012-01-25 19:28:33', 1, 'Rémy', 'Muriach');
		INSERT INTO `user` VALUES(3, 'okoui@yahoo.fr', '123456', 1, '2011-08-29 00:31:17', 0, '', '');
		INSERT INTO `user` VALUES(4, 'truc@truc.com', 'bidule', 2, '2011-08-28 22:12:05', 0, '', '');
		INSERT INTO `user` VALUES(5, 'lol@lol.com', 'toto10', 2, '2011-08-29 00:35:21', 0, '', '');
		INSERT INTO `user` VALUES(6, 'insert@test.com', 'toto10', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(7, 'truc@truc.com', 'toto10', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(8, 'insert@test.com', 'toto10', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(9, 'name@mail.com', 'azerty', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(10, 'name@mail.com', 'azerty', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(11, 'name@mail.com', 'azerty', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(12, 'name@mail.com', 'azerty', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(13, 'name@mail.com', 'azerty', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(14, 'name@mail.com', 'azerty', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(15, 'name@mail.com', 'azerty', 2, '2011-08-29 23:41:19', 0, '', '');
		INSERT INTO `user` VALUES(16, 'name@mail.com', 'azerty', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(17, 'name@mail.com', 'azerty', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(18, 'name@mail.com', 'azerty', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(19, 'name@mail.com', 'azerty', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(20, 'name@mail.com', 'azerty', 2, '2011-07-23 15:33:01', 0, '', '');
		INSERT INTO `user` VALUES(21, 'name@mail.com', 'azerty', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(22, 'alkh@qklsdl.com', '123456', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(23, 'alkh@qklsdl.com', '123456', 2, '0000-00-00 00:00:00', 0, '', '');
		INSERT INTO `user` VALUES(27, '', '12345678', 2, '2011-08-27 11:21:00', 0, '', '');
		INSERT INTO `user` VALUES(28, 'toto2@nono.com', '12345678', 2, '2011-08-27 11:21:19', 0, '', '');
		INSERT INTO `user` VALUES(29, 'nono34@dnssd.com', 'sljhfkqsj', 2, '2011-08-27 11:55:10', 0, '', '');
		INSERT INTO `user` VALUES(30, 'allez@allez.com', '', 2, '2011-08-27 14:04:02', 0, '', '');
		INSERT INTO `user` VALUES(31, 'ouiiii@oui.com', 'toto34550', 2, '2011-08-27 14:15:31', 0, '', '');
		INSERT INTO `user` VALUES(32, '', '', 0, '2011-08-28 21:37:11', 0, '', '');
		INSERT INTO `user` VALUES(33, '', '', 0, '2011-08-28 21:38:23', 0, '', '');
		INSERT INTO `user` VALUES(34, 'pierre@antoinegroupe.com', '123456', 2, '0000-00-00 00:00:00', 1, 'Pierre', '');

		-- --------------------------------------------------------

		--
		-- Structure de la table `users`
		--

		CREATE TABLE `users` (
			  `id` int(11) NOT NULL AUTO_INCREMENT,
			  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
			  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
			  `type` int(8) NOT NULL,
			  PRIMARY KEY (`id`)
		) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

		--
		-- Contenu de la table `users`
		--

		INSERT INTO `users` VALUES(1, 'franck.ernewein@gmail.com', 'citron', 1);
		INSERT INTO `users` VALUES(2, 'trade@antoinegroupe.com', '123456', 2);
		INSERT INTO `users` VALUES(3, 'bengalo@yahoo.fr', '123456', 3);
		INSERT INTO `users` VALUES(4, 'truc@truc.com', 'bidule', 2);
		INSERT INTO `users` VALUES(5, 'insert@test.com', 'toto10', 2);
		INSERT INTO `users` VALUES(6, 'insert@test.com', 'toto10', 2);
		INSERT INTO `users` VALUES(7, 'insert@test.com', 'toto10', 2);
		INSERT INTO `users` VALUES(8, 'insert@test.com', 'toto10', 2);

		-- --------------------------------------------------------

		--
		-- Structure de la table `user_type`
		--

		CREATE TABLE `user_type` (
			  `id` int(11) NOT NULL,
			  `desc` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
			  PRIMARY KEY (`id`)
		) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

		--
		-- Contenu de la table `user_type`
		--

		INSERT INTO `user_type` VALUES(1, 'admin');
		INSERT INTO `user_type` VALUES(2, 'user');
		INSERT INTO `user_type` VALUES(3, 'supplier');

