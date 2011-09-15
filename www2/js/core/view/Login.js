
core.view.Login = core.view.BaseView.extend({
    
    template:'js/core/template/login.html',

    initialize:function(){
        var self = this;

        this.bind('render', function(){
            this.$('form').submit(function(e){
                
                var data = {};
                $('input,select,textarea', this).each(function(){
                    if(this.name){
                        data[this.name] = $(this).val();
                    }
                });

                

                self.model.set( data )
                console.log(self.model)
                self.model.save().done(function(xhr){
                    console.log(JSON.stringify(xhr));
                });

                return false;
            });
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

