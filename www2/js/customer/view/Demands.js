
customer.view.Demands = core.view.BaseView.extend({

    template:'js/customer/template/Demands.html',

    initialize:function(){
        var self = this;
        this.collection.bind('add', function(){
            
        });
    },

    onRender:function(){
        var self = this;
        this.searchResult = new customer.view.DemandSearchResult({
            el:this.$('#demand-search-result'),
            collection:this.collection
        });
        this.searchResult.render();

        $('input', this.el).keyup(function(){
            self.searchResult.setFilter( this.value );
        });

        $('.add-demand', this.el).click(function(e){
            var newDemand = new customer.model.Demand({
               'user_id':app.model.user.id,
               'company_id':app.model.user.get('company_id')
            });
            newDemand.setUriParam('company_id', app.model.user.get('company_id'));

            newDemand.bind('ajax:success', function(model, method){
                if(method == 'create'){
                    self.collection.add(newDemand);
                    if(app && app.router && app.router.main){
                        app.router.main.navigate('demands/'+ newDemand.id, true);
                    }

                }
            });
            new core.view.DemandFormPanel({
               model:newDemand
            }).attach().show();

            return false;
        });

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

