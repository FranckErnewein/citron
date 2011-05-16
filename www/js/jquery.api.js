(function($){

	var API_FORM_SELECTOR = '.api-field';
	
	$.fn.navigateLink = function(){
		this.trigger('navigate', this.apiLink());
	}

	$.fn.apiLink = function(data){
		return utils.api( this.attr('href').replace('#', '') );
	}

	$.fn.apiForm = function(){


		var data = {};
		$(API_FORM_SELECTOR, this).each(function(){
			data[$(this).attr('name')] = $(this).val();

		});

		return utils.api( this.attr('action').replace('#', ''), data, this.attr('method') )

	}


 })(jQuery);
