
customer.view.MyCompany = core.view.ModelForm.extend({

    template:'js/customer/template/MyCompany.html',

    initialize:function(){

        core.view.ModelForm.prototype.initialize.call(this);

        var self = this;
        console.log(this.collection.size())
        this.collection.bind('add', function(){
            self.render();
        });

    }

});

