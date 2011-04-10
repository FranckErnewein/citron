(function(_package){

	function Login(node, data){

		var email = $('input[name=email]', node);
		var password = $('input[name=password]', node);
		var fields = $('input[name=password], input[name=email]', node);
		var error = $('.error', node).hide();

		fields.bind('change keyup',function(){
			if($(this).val() != ''){
				$(this).removeClass('empty-fields');
			}
		});

		

		$('form', node).submit(function(){

			fieldsOk = true;
			fields.each(function(){
				var field = $(this);
				if(field.val() == ''){
					field.addClass('empty-fields');
					if(fieldsOk){
						field.focus();
						fieldsOk = false;
					};
				}else{
					field.removeClass('empty-fields');
				}
			});
			error.hide();
			if(!fieldsOk){
				return false;
			}

			$(this).apiForm().done(function(data){
				$.cookie('login', email.val() , {expires:config.COOKIE_DAY});
				$.cookie('password', data.password, {expires:config.COOKIE_DAY});
				//console.log(data);
				dom.userBar.render('template/user-bar.html', data).done(component.UserBar);
				
				dom.popup.layer.fadeOut();

			}).fail(function(xhr){
				if(xhr.status == 403){
					error.slideDown();
				}
			});
			return false;
		});

	}

	_package.Login = Login;
	
})(component);
