<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
    
    <meta name="viewport" content="width=940, initial-scale=1.0">
	<title>Admin</title>
	<link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="css/style.css" />


    <!-- lib -->
	<script type="text/javascript" src="js/lib/jquery-1.6.1.js"></script>
	<script type="text/javascript" src="js/lib/underscore.js"></script>
	<script type="text/javascript" src="js/lib/backbone.js"></script>


	<script type="text/javascript" src="js/const.js"></script>
    <script type="text/javascript" src="js/define.js"></script>

    <script src="js/core/model/BaseModel.js"></script>
    <script src="js/core/model/Session.js"></script>
    <script src="js/core/model/User.js"></script>
    <script src="js/core/model/Demand.js"></script>
    <script src="js/core/model/Offer.js"></script>
    <script src="js/core/model/Article.js"></script>

    <script src="js/core/collection/BaseCollection.js"></script>
    <script src="js/core/collection/Demands.js"></script>
    <script src="js/core/collection/Offers.js"></script>
    <script src="js/core/collection/Articles.js"></script>

    <script src="js/core/router/BaseRouter.js"></script>
    <script src="js/customer/router/Main.js"></script>

    <script src="js/core/view/BaseView.js"></script>
    <script src="js/core/view/Login.js"></script>
    <script src="js/core/view/UserBar.js"></script>
    <script src="js/customer/view/Home.js"></script>
    <script src="js/customer/view/Demands.js"></script>
    <script src="js/customer/view/DemandDetails.js"></script>
    <script src="js/customer/view/DemandSearchResult.js"></script>
    <script src="js/customer/view/Articles.js"></script>

    <script src="js/customer.js"></script>

    
    
</head>
<body>
	<div class="topbar">
		<div class="fill">
			<div class="container fixed">
				<h3><a href="#home" class="logo">Home</a></h3>
				<ul>
					<li><a href="#demands">Mes demandes</a></li>
                    <li><a href="#sellers">Mes collaborateur</a></li>
                    <li><a href="#mails">Historique des relances</a></li>
				</ul>

                <ul class="nav secondary-nav"></ul>
			</div>
		</div>
	</div>
    
	<div class="container page" id="page-content"></div>

    

</body>
</html>