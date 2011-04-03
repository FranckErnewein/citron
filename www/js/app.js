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
			data:{login:login, password:passord}
		});
	}
}

$(document).ready(function(){

	//login form
	$('#login-form').render('template/login-form.html', {}, function(){
		console.log(this);
		$('form', this).submit(function(){
			api.login().done(function(){
							
			});
			return false;
		});
	});
});
