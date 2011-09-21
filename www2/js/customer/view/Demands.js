
customer.view.Demands = core.view.BaseView.extend({

    template:'js/customer/template/Demands.html',

    initialize:function(){
        var self = this;
        this.collection.bind('add', function(){
            //console.log('ajax success', self.collection.size())
            self.filter( $('input', self.el).val() );
        });
    },

    onRender:function(){
        var self = this;
        this.searchResult = new customer.view.DemandSearchResult({
            el:this.$('#demand-search-result'),
            collection:new core.collection.Demands()
        });
        this.searchResult.render();

        var lastKeyup = new Date().getTime();
        this.$('input').keyup(function(){
            var newKeyup = new Date().getTime();
            self.filter(this.value);
        });

        this.filter();

    },

    filter:function( value ){
        if(value === undefined) value = "";
        this.searchResult.collection.reset();
        this.searchResult.collection.add( this.collection.filter(function( demand ){
            return demand.contains( value, ['title', 'reference', 'city', 'citycode'] );
        }) );
        this.searchResult.render();
       
    },

    displayDemand:function( id ){
        if(this.demand){
            this.demand.remove();
        }
        this.demand = new customer.view.DemandDetails({ model:this.collection.getAnyway(id) });
        $('#demands-details', this.el).append( this.demand.render().el ).hide().fadeIn();
        
    }

});

