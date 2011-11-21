
customer.model.Demand = core.model.Demand.extend({

    uri:'company/:company_id/demands/',

    initialize:function(){
        if(app && app.model && app.model.user && app.model.user.get('company_id')){
            this.setUriParam( 'company_id', app.model.user.get('company_id') );
        }
    }

})

