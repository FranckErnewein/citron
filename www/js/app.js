var app = {
	
	config:{
		api:{
			path:'/citron/www/api.php/'
		}

   }

};



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
	LANG_CHANGE:'LANG_CHANGE',
	LOGIN_REQUIRE:'LOGIN_REQUIRE',
	RENDER_LAYOUT:'RENDER_LAYOUT',
	SHOW_DEMAND:'SHOW_DEMAND'
};

var config = {
	COOKIE_DAY:7,
	BASE_API:'api.php/'
};


var context = {};

$(document).bind(events.LOGIN, function(e, data){
	context.user = data;
});
$(document).bind(events.LANG_CHANGE, function(e, lang){
	context.lang = lang;
});



var dom;

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
