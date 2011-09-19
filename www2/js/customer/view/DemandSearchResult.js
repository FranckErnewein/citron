

customer.view.DemandSearchResult = core.view.BaseView.extend({
    
    template:'js/customer/template/DemandSearchResult.html',

    initialize:function(){
        var self = this;
        this.collection.bind('add',function(){
            self.render();
        });
    }

});

