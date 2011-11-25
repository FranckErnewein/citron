
core.model.Article = core.model.BaseModel.extend({

    defaults:{
        fixed:0,
        freeze:0
    },

    uri:'articles',

    initialize:function(){

        if( this.get('demand_id') ){
            this.setUriParam('demand_id', this.get('demand_id'));
        }
    }

    

});

