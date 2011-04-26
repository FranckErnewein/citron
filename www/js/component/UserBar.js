(function(pack){

 	function UserBar(){

		var self = this;

		
		$(document).bind(events.LOGIN, function(e, data){
			self.render(data);
		});


	}

	utils.inherits(UserBar, pack.AbstractComponent );


	UserBar.prototype.onDomReady = function(){
		var self = this;

		$('a', this.node).click(function(){
			$(this).apiLink().done(function(){

				self.render({});
				self.node.trigger(events.LOGIN_REQUIRE);

			});
		});
	}


 	pack.UserBar = UserBar;

 })(component);
