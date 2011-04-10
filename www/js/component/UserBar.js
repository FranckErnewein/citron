(function(_package){

 	function UserBar(node, data){

		$('a', node).click(function(){
			$(this).apiLink().done(function(){

				node.empty();
				node.trigger(events.LOGIN_REQUIRE);

			});
		});

	}


 	_package.UserBar = UserBar;

 })(component);
