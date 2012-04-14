
customer.view.Demands = core.view.BaseView.extend({

    template:'js/customer/template/Demands.html',

    initialize:function(){
        var self = this;
        this.collection.bind('current', function( demand ){
            self.searchResult.highlight( demand.id );
        });


    },

    onRender:function(){
        var self = this;
        this.searchResult = new customer.view.DemandSearchResult({
            el:this.$('#demand-search-result'),
            collection:this.collection
        });

        this.searchResult.bind('render', function(){
           self.searchResult.highlight( self.currentId );
        });
        

        $('input', this.el).keyup(function(){
            self.searchResult.setFilter( this.value );
        });

        $('.add-demand', this.el).click(function(e){
            var newDemand = new customer.model.Demand({
               'user_id':app.model.user.id,
               'company_id':app.model.user.get('company_id')
            });

            newDemand.bind('ajax:success', function(model, method){
                if(method == 'create'){
                    self.collection.add(newDemand);
                    if(app && app.router && app.router.main){
                        app.router.main.navigate('demands/'+ newDemand.id, true);
                    }

                }
            });
            new core.view.DemandFormPanel({
               collection:app.collection.tags,
               model:newDemand
            }).attach().show();

            return false;
        });

        this.searchResult.render();
    },


    displayDemand:function( id ){
        this.currentId = id;
        if(this.demand){
            this.demand.remove();
        }
        var model = this.collection.getAnyway(id);
        model.trigger('current', model);
        this.demand = new customer.view.DemandDetails({ model:model });
        $('#demands-details', this.el).append( this.demand.render().el ).hide().fadeIn();
        
    }

});

