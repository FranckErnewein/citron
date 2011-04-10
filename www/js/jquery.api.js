(function($){

	var API_FORM_SELECTOR = '.api-field';


	$.fn.apiLink = function(data){
		return $.ajax({
			dataType:'json',
			url:config.BASE_API + this.attr('href').replace('#', ''),
		});
	}

	$.fn.apiForm = function(){

		var data = {};
		$(API_FORM_SELECTOR).each(function(){
			data[$(this).attr('name')] = $(this).val();

		});

		return $.ajax({
			dataType:'json',
			url:config.BASE_API + this.attr('action'),
			type:this.attr('method'),
			data:data
		});
	}


 })(jQuery);
