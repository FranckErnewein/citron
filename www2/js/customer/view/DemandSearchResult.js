

customer.view.DemandSearchResult = core.view.BaseView.extend({
    
    template:'js/customer/template/DemandSearchResult.html',

    initialize:function(){
        this.collection.bind('add',function(){
            console.log('jlksjd')
        });
    }

});

