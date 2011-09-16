
core.view.BaseView = Backbone.View.extend({

    
    render:function(){
        var self = this;


        if( !this.templateList[this.template] ){
            if(!this.template){
                throw new Error('template is undefined');
            }
            $.ajax({
                cache:false,
                url:this.template,
                async:false,
                success:function(xhr){
                    self.templateList[self.template] = _.template( xhr );
                }
            });
         
        }
        $(this.el).html(this.templateList[this.template].call( this , this.model ));
        this.trigger('render');

        return this;
    },

    append:function( view , name){
        if(!this.subview){
            this.subview = {};
        }

        if(name){
            this.subview[name] = view;
        }
        
        view.render();
        return view.el.innerHTML;
    }


});

core.view.BaseView.prototype.templateList = {}