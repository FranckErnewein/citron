var bundle = {
	login:{
		Login:'Login',
		Password:'Mots de passe',
		Wrong:'Mauvais login ou mots de passe',
		BtnConnect:'Connexion'
	}
};

var api = {
	login:function(login, password){
		return $.ajax({
			url:'api/1.php/login',
			type:'POST',
			data:{login:login, password:password}
		});
	}
}

$(document).ready(function(){

	//login form
	$('#login-form').render('template/login-form.html', {}).done(function(node, data){
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
	});
});
