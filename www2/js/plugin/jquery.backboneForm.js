(function( $ ){

	var CSS = {
		fields : '.field',
		buttons:'.save-btn, .cancel-btn',
		save: '.save-btn',
		cancel:'.cancel-btn'
	}

	$.fn.backboneForm = function( model ){

		if( !model || !(model instanceof Backbone.Model) ){
			throw new TypeError( 'model is not valid');
		}
		
		this.each(function(){
		
			var form = $(this),
				fields = $( CSS.fields , this),
				cancel = $( CSS.cancel , this),
				btn = $( CSS.buttons , this);


			function disable(){ btn.addClass('disabled').attr('disabled'); }
			function enable(){ btn.removeClass('disabled').removeAttr('disabled'); }
			function setFields(){
				fields.each(function(){
					$(this).val( model.get( this.name ) );
				});
			}


			disable();
			setFields();

			fields.bind('keyup change', function(){
				var hasChanged = false;
				fields.each(function(){
					if(this.value != model.get(this.name)) hasChanged=true;
				});
				hasChanged ? enable() : disable();
			}); 
	
			cancel.click( function(){
				setFields();
				disable();
				return false;
			});

			form.submit(function(){
				var data = {};
				fields.each(function(){
					data[this.name] = this.value;
				});

				model.set( data ).save().done( disable );
				return false;
			});

			model.bind('change', function(){
				setFields();
			});
			

			
		});

	}

})(jQuery);
