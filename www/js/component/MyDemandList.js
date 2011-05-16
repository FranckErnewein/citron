(function(pack){

	function MyDemandList(){
			
		
	}

	utils.inherits(MyDemandList, pack.AbstractComponent);

	MyDemandList.prototype.onDomReady = function(){
		
		var self = this;
		$('a.refresher', this.node).click(function(){
			$(this).apiLink().done(function(data){
				self.getChild(pack.DemandListResult).render(data);
			});
		}).click();


		var searchForm = $('form', this.node);
		function showResult(){
			searchForm.apiForm().done(function(data){
				self.getChild(pack.DemandListResult).render(data);
			});
			return false;
	}

	
		
		$('input[name=search]', searchForm).keyup(showResult);
		searchForm.submit(showResult);

	}

	pack.MyDemandList = MyDemandList;

})(component);
