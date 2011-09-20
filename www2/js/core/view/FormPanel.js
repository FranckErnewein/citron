
core.view.FormPanel = core.view.Panel.extend({


    onRender:function(){

        var self = this;

        $('form', this.el).submit(function(e){
           e.stopPropagation();
           var data = {};
           $('.field', this).each(function(){
                data[this.name] = this.value;
           });
           self.model.set(data);
           self.model.save().done(function(){
               self.hide();
           });
           return false;
        });



    }
});
