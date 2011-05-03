(function(pack){

 	function DemandListResult(){
		this.preventAutoRender = true;
	}

	utils.inherits(DemandListResult, pack.AbstractComponent);


	DemandListResult.prototype.onDomReady = function(){
		
		$('li', this.node).click(function(){

			$('a', this).apiLink().done(function(done){
				$(this).trigger(events.SHOW_DEMAND, data);
				return false;
			});
		});

	}

	pack.DemandListResult = DemandListResult;


 })(component);
