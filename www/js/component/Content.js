(function(pack){

 	function Content(){

		var self = this;

		
		$(document).bind(events.LOGIN, function(e, data){
			self.render(data);
		});


		$(document).bind('navigate', function(e, query){
			query.done(function(data){
				self.children.DemandOwnerForm.render(data);
			});
		});


	}

	utils.inherits(Content, pack.AbstractComponent );


	Content.prototype.onDomReady = function(){

		var self = this;
	}


 	pack.Content = Content;

 })(component);
