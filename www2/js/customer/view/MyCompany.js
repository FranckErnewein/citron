
customer.view.MyCompany = core.view.ModelForm.extend({

    template:'js/customer/template/MyCompany.html',

    initialize:function(){

        core.view.ModelForm.prototype.initialize.call(this);

        var self = this;
        this.collection.bind('add', function(){
            self.render();
        });

        this.model.bind('change', function(){
            self.render();
        });

    }

});

