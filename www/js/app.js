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
	$('#login-form').render('template/login-form.html', {}).done(Login);
});
