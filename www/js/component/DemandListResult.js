(function(pack){

 	function DemandListResult(){
		this.preventAutoRender = true;
	}

	utils.inherits(DemandListResult, pack.AbstractComponent);


	DemandListResult.prototype.onDomReady = function(){

		
		var items = $('li', this.node);
		items.bind('navigate', function(e, query){
			var item = $(this);
			item.addClass('loading');
			query.done(function(){
				$('.active', this.node).removeClass('active');
				item.removeClass('loading').addClass('active');	
			});
			query.fail(function(){
				item.removeClass('loading');	
			});
		});
		items.click(function(){
			$('a', this).navigateLink();
		});

	}

	pack.DemandListResult = DemandListResult;


 })(component);
