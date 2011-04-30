(function(pack){

 	function Content(){

		var self = this;

		
		$(document).bind(events.LOGIN, function(e, data){
			self.render(data);
		});


	}

	utils.inherits(Content, pack.AbstractComponent );


	Content.prototype.onDomReady = function(){
	}


 	pack.Content = Content;

 })(component);
