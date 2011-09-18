
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
        if(typeof this.onRender == 'function'){
            this.onRender();
        }
        this.trigger('render');

        return this;
    }

    



});

core.view.BaseView.prototype.templateList = {}