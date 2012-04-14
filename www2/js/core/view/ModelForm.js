
core.view.ModelForm = core.view.BaseView.extend({
    
    initialize:function(){
        var self = this;

        this.model.bind('change', function(){
           self.render();
           $('.save-btn', this.el).addClass('disabled').attr('disabled', 'disabled');
        });


    },

    onRender:function(){

			
		$('.my-company-form').backboneForm( this.model );
    }

})

