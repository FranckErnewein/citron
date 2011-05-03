(function(pack){

 	function AddDemands(){
		this.preventAutoRender = true;
	}

	utils.inherits(AddDemands, pack.AbstractComponent);


	AddDemands.prototype.onDomReady = function(){

	}

	pack.AddDemands = AddDemands;


 })(component);
