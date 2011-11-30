<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
    
    <meta name="viewport" content="width=940, initial-scale=1.0">
	<title>/////////</title>
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
    <script src="js/core/model/Company.js"></script>
    <script src="js/core/model/Tag.js"></script>
    <script src="js/customer/model/Demand.js"></script>
    <script src="js/customer/model/Article.js"></script>
    <script src="js/customer/model/Tag.js"></script>

    <script src="js/core/collection/BaseCollection.js"></script>
    <script src="js/core/collection/Demands.js"></script>
    <script src="js/core/collection/Offers.js"></script>
    <script src="js/core/collection/Articles.js"></script>
    <script src="js/core/collection/Users.js"></script>
    <script src="js/core/collection/UsersCompany.js"></script>
    <script src="js/core/collection/Tags.js"></script>
    <script src="js/customer/collection/Demands.js"></script>
    <script src="js/customer/collection/Articles.js"></script>
    <script src="js/customer/collection/Tags.js"></script>

    <script src="js/core/router/BaseRouter.js"></script>
    <script src="js/customer/router/Main.js"></script>

    <script src="js/core/view/BaseView.js"></script>
    <script src="js/core/view/Panel.js"></script>
    <script src="js/core/view/DeletePanel.js"></script>
    <script src="js/core/view/FormPanel.js"></script>
    <script src="js/core/view/ModelForm.js"></script>
    <script src="js/core/view/Login.js"></script>
    <script src="js/core/view/DemandFormPanel.js"></script>
    <script src="js/core/view/ArticleFormPanel.js"></script>
    <script src="js/core/view/UserBar.js"></script>
    <script src="js/customer/view/Home.js"></script>
    <script src="js/customer/view/Demands.js"></script>
    <script src="js/customer/view/DemandDetails.js"></script>
    <script src="js/customer/view/DemandSearchResult.js"></script>
    <script src="js/customer/view/Articles.js"></script>
    <script src="js/customer/view/MyCompany.js"></script>
    <script src="js/customer/view/MyProfile.js"></script>


    <script src="js/customer.js"></script>

    
    
</head>
<body>
	<div class="topbar">
		<div class="fill">
			<div class="container-fluid fixed">
				<h3><a href="#home" class="logo">Home</a></h3>
				<ul>
					<li><a href="#demands">Mes demandes</a></li>
                    <li><a href="#sellers">Mes collaborateurs</a></li>
				</ul>

                <ul class="nav secondary-nav"></ul>
			</div>
		</div>
	</div>
    
	<div class="container-fluid page">
        <div id="loader">Sync ...</div>
        <div id="page-content">
        </div>
    </div>

    

</body>
</html>
