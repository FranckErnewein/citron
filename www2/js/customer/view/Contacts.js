
customer.view.Contacts = core.view.BaseView.extend({
    
    template:'js/customer/template/Contacts.html',

    initialize:function(){

        var self = this;

        this.collection.bind('ajax:success', function(){
           self.render();
        });

    },

    onRender:function(){
        this.groups = new customer.view.Groups({
            el:$('#groups', this.el),
            collection:app.collection.groups
        });
        
        this.groups.render();

    }

});

