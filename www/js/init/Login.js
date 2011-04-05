function Login(node, data){

	var login = $('input[name=login]', node);
	var password = $('input[name=password]', node);
	var fields = $('input[name=password], input[name=login]', node);
	var error = $('.error', node).hide();

	fields.change(function(){
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

		api.login(login.val(), password.val() ).done(function(){
			console.log('log');	
		}).fail(function(xhr){
			error.slideDown();
		});
		return false;
	});

}
