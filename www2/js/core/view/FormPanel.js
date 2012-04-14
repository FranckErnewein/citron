
core.view.FormPanel = core.view.Panel.extend({

    events:{
        'click .close':'hide',
        'click .cancel':'hide',
        'click .bg-modal-close':'hide'
    },

    onRender:function(){

        var self = this;

        $('form', this.el).submit(function(e){
           e.stopPropagation();
           var data = {};
           $('.field', this).each(function(){
                data[this.name] = $(this).val();
           });
           self.model.save(data).done(function(){
               self.hide();
           });
           
           return false;
        });



    }
});

