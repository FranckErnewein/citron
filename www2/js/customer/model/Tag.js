
customer.model.Tag = core.model.Tag.extend({

   uri:'company/:company_id/tags',

   initialize:function(){
       if(this.get('company_id')){
           this.setUriParam('company_id', this.get('company_id'));
       }
   }

});

