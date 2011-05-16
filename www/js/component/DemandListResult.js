(function(pack){

 	function DemandListResult(){
		this.preventAutoRender = true;
	}

	utils.inherits(DemandListResult, pack.AbstractComponent);


	DemandListResult.prototype.onDomReady = function(){
		
		$('li', this.node).click(function(){

			$('a', this).navigateLink()
		});

	}

	pack.DemandListResult = DemandListResult;


 })(component);
