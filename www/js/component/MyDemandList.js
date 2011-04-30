(function(pack){

	function MyDemandList(){
			
		
	}

	utils.inherits(MyDemandList, pack.AbstractComponent);

	MyDemandList.prototype.onDomReady = function(){
		
		var self = this;
		//FIXME : do children selector on AbstractComponent
		$('a.refresher', this.node).click(function(){
			$(this).apiLink().done(function(data){
				self.getChild(pack.DemandListResult).render(data);
			});
		}).click();


		$('form', this.node).submit(function(){
			$(this).apiForm().done(function(data){
				self.getChild(pack.DemandListResult).render(data);
			});

			return false;
		});

	}

	pack.MyDemandList = MyDemandList;

})(component);
