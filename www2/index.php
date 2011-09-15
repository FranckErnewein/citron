<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
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

    <script src="js/core/router/BaseRouter.js"></script>
    <script src="js/customer/router/Main.js"></script>

    <script src="js/core/view/BaseView.js"></script>
    <script src="js/core/view/Login.js"></script>
    <script src="js/core/view/UserBar.js"></script>
    <script src="js/customer.js"></script>

    
    
</head>
<body>
	<div class="topbar">
		<div class="fill">
			<div class="container fixed">
				<h3><a href="#" class="logo">Home</a></h3>
				<ul>
					<li><a href="#offers">Mes offres</a></li>
				</ul>

                <ul class="nav secondary-nav"></ul>
			</div>
		</div>
	</div>
    <br /><br /><br />
	<div class="container-fluid">
        <div class="sidebar">
          ...
        </div>
        <div class="content">
          ...
        </div>
    </div>

    

</body>
</html>