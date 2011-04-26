(function(pack){

 	function Main(node){

		//Main have to self init.
		this.init(node);
	}

	utils.inherits(Main, pack.AbstractComponent );

	Main.prototype.onDomReady = function(){
		
	}

	pack.Main = Main;

 })(component);
