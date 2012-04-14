
customer.view.Groups = core.view.BaseView.extend({

    template:'js/customer/template/Groups.html',

    initialize:function(){
        var self = this;
        this.collection.bind('ajax:success', function(){
            self.render();
        });

    },

    onRender:function(){
        
    }

});

