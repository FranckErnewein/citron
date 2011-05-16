<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width" />
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>new</title>
	<script type="text/javascript" src="js/lib/jquery-1.6.1.js"></script>
	<!--
	<script type="text/javascript" src="js/jquery.render.js"></script>
	-->
	<script type="text/javascript" src="js/lib/jquery.cookie.js"></script>
	<script type="text/javascript" src="js/jquery.api.js"></script>
	<script type="text/javascript" src="js/utils.js"></script>
	<script type="text/javascript" src="js/component/event.js"></script>
	<script type="text/javascript" src="js/component/AbstractComponent.js"></script>
	<script type="text/javascript" src="js/component/Main.js"></script>
	<script type="text/javascript" src="js/component/Login.js"></script>
	<script type="text/javascript" src="js/component/UserBar.js"></script>
	<script type="text/javascript" src="js/component/Content.js"></script>
	<script type="text/javascript" src="js/component/MyDemandList.js"></script>
	<script type="text/javascript" src="js/component/DemandListResult.js"></script>
	<script type="text/javascript" src="js/component/DemandOwnerForm.js"></script>
	<script type="text/javascript" src="js/component/BreadCrumb.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript">
		var main;
		$(document).ready(function(){
			loadBundle().done(function(){
				main = new component.Main( $('#main') );
			});
		});
	</script>
	<style type="text/css">
		@import url('css/common.css');
		@import url('css/reset.css');
		@import url('css/ui.css');
		@import url('css/popup.css');
	</style>
</head>
<body>
	<div id="main" data-component="Main"></div>
</body>
</html>
