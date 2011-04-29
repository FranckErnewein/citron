(function($){

	var API_FORM_SELECTOR = '.api-field';


	$.fn.apiLink = function(data){
		return utils.api( this.attr('href').replace('#', '') )
	}

	$.fn.apiForm = function(){


		var data = {};
		$(API_FORM_SELECTOR).each(function(){
			data[$(this).attr('name')] = $(this).val();

		});

		return utils.api( this.attr('action'), data, this.attr('method') )

	}


 })(jQuery);
