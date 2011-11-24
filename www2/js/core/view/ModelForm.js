
core.view.ModelForm = core.view.BaseView.extend({
    
    initialize:function(){
        var self = this;

        this.model.bind('change', function(){
           self.render();
           $('.save-btn', this.el).addClass('disabled').attr('disabled', 'disabled');
        });


    },

    onRender:function(){
        var self = this;

        var fields = $('.field', this.el);

        var data = {};

        fields.bind('keyup change', function(){
            $('.save-btn', this.el).removeClass('disabled').removeAttr('disabled');
        });

        $('form', this.el).submit(function(e){

           fields.each(function(){
                data[this.name] = this.value;
           });

           self.model.save(data);

           return false;
        })
    }

})

