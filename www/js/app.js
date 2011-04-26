
if(!console)var console = {log:function(){}};
var bundle = {};
function loadBundle(lang){
	return $.ajax({
		url:config.BASE_API + 'bundle',
		dataType:'json',
		data: (lang) ? {lang:lang} : null,
		success:function(xhr){
			bundle = xhr;	
		}
	});
}

var events = {
	LOGIN:'LOGIN',
	LOGIN_REQUIRE:'LOGIN_REQUIRE',
	RENDER_LAYOUT:'RENDER_LAYOUT'
}

var config = {
	COOKIE_DAY:7,
	BASE_API:'api.php/'
}



var dom;
var data;

/*
$(document).ready(function(){

	dom = {
		popup:{
			layer:$('#layer'),
			content:$('#login-form')
		},
		userBar:$('#user')
	}

	loadBundle().done(function(apiBundle){

		dom.popup.content.render('template/login-form.html', {}).done(component.Login);
		dom.popup.layer.fadeIn();

	});

	//login form

		
});


$(document).bind(events.LOGIN_REQUIRE, function(){
	$('#login-form').render('template/login-form.html', {}).done(component.Login);
	dom.popup.layer.fadeIn();
});
*/
