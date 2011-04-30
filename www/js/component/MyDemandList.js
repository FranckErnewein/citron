(function(pack){

	function MyDemandList(){
			
		
	}

	utils.inherits(MyDemandList, pack.AbstractComponent);

	MyDemandList.prototype.onDomReady = function(){
		
		var self = this;
		//FIXME : do children selector on AbstractComponent
		$('a.refresher', this.node).click(function(){
			$(this).apiLink().done(function(data){
				self.children[0].render(data);
			});
		}).click();

	}

	pack.MyDemandList = MyDemandList;

})(component);
