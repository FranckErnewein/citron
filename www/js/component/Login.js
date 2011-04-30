(function(pack){

	function Login(){

		var self = this;
		$(document).bind(events.LOGIN_REQUIRE, function(){
			self.node.fadeIn();	
		});
	
	}
	utils.inherits(Login, pack.AbstractComponent );

	Login.prototype.onDomReady = function(){

		var self = this;
		var node = this.node;

		var email = $('input[name=email]', node);
		var password = $('input[name=password]', node);
		var autolog = $('input[name=autolog]', node);
		autolog.change(function(){
			$.cookie('autolog', autolog.is(':checked') , {expires:config.COOKIE_DAY});
		});
		var fields = $('input[name=password], input[name=email]', node);
		var error = $('.error', node).hide();

		fields.bind('change keyup',function(){
			if($(this).val() != ''){
				$(this).removeClass('empty-fields');
			}
		});

		$('#lang-change').change(function(e){
			var lang = $(this).val();
			loadBundle(lang).done(function(){
				self.render( {email:email.val(), password:password.val()});
				$('#lang-change').val(lang);
			});



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
				$.cookie('email', data.email , {expires:config.COOKIE_DAY});
				$.cookie('password', password.val(), {expires:config.COOKIE_DAY});
			
				node.trigger(events.LOGIN, data);
				node.fadeOut();

			}).fail(function(xhr){
				if(xhr.status == 403){
					error.slideDown();
				}
			});
			return false;
		});
		if($.cookie('autolog') == 'true' || $.cookie('autolog') == true){
			$('form').submit();
		}

	}


	pack.Login = Login;
	
})(component);
