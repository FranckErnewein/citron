var bundle = {
	login:{
		Login:'Login',
		Password:'Mots de passe',
		Wrong:'Mauvais login ou mots de passe',
		BtnConnect:'Connexion'
	}
};

var events = {
	LOGIN_REQUIRE:'LOGIN_REQUIRE'
}


var api = {
	BASE:'api.php/',
	login:function(login, password){
		return $.ajax({
			url: this.BASE + 'login',
			type:'POST',
			data:{login:login, password:password}
		});
	}
}

var dom;

$(document).ready(function(){

	dom = {
		popupLayer:$('#layer')
	}
	//login form

	$('#login-form').render('template/login-form.html', {}).done(Login);
	dom.popupLayer.fadeIn();

});

$(document).bind(events.LOGIN_REQUIRE, function(){

});
