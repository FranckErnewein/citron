
core.view.Login = core.view.BaseView.extend({
    
    template:'js/core/template/Login.html',

    initialize:function(){
        var self = this;
        var errorMessage;
        self.model.bind('ajax:start', function(){
            if(errorMessage){
                errorMessage.slideUp();
            }
        });

        this.bind('render', function(){
            errorMessage = $('.alert-message');

            this.$('form').submit(function(e){
                
                var data = {};
                $('input,select,textarea', this).each(function(){
                    if(this.name){
                        data[this.name] = $(this).val();
                    }
                });

                

                self.model.set( data );
                
                self.model.save().fail(function(){
                   errorMessage.slideDown();
                });

                return false;
            });

            errorMessage.hide();
        });

        
        
        this.model.bind('change:user_id', function(model){
            if(model.get('user_id')){
                $(self.el).fadeOut();
            }else{
                $(self.el).fadeIn();
            }
        });

    }

});

