

customer.view.DemandSearchResult = core.view.BaseView.extend({
    
    template:'js/customer/template/DemandSearchResult.html',

    initialize:function(){
        var self = this;
        this.collection.bind('add',function(){
            self.render();
        });

        this.collection.bind('remove', function(){
            self.render();
        })

        this.collection.bind('change',function(){
            self.render();
        });
    },

    render:function(){
        var self = this;
        this.filteredResult = this.collection.select( function( demand ){
             return demand.contains(self.filter || '', ['title', 'reference', 'city', 'citycode']);
        });

        core.view.BaseView.prototype.render.call(this);
    },

    setFilter:function(value){
        this.filter = value;
        this.render();
    },

    getFilter:function(){
        return this.filter;
    }

});

