
customer.view.Articles = core.view.BaseView.extend({

   template:'js/customer/template/Articles.html',

   initialize:function(){

       var self = this;
      
       this.collection.bind('ajax:success', function(){
           self.render();
       });

       this.collection.bind('destroy', function(){
           self.render();
       });

       this.collection.bind('change', function(){
           self.render();
       });

   },

   onRender:function(){

     var self = this;
     $('a.edit', this.el).click(function(){
        var articleToEdit = self.collection.get( $(this).attr('href').replace('#', ''));
        if(articleToEdit){
            new core.view.ArticleFormPanel({model:articleToEdit }).attach().show();
        }
        return false;
     });

     $('a.delete', this.el).click(function(){
        var articleToDelete = self.collection.get( $(this).attr('href').replace('#', ''));
        if(articleToDelete){
            new core.view.DeletePanel({model:articleToDelete, label:'name' }).attach().show();
        }
        return false;
     });


     $('.btn.add', this.el).click(function(){
        var newArticle = new customer.model.Article({
            'demand_id':self.collection.uriParams.demand_id,
        });
        newArticle.setUriParam('company_id', self.collection.uriParams.company_id );
        newArticle.bind('ajax:success', function( model, method ){
            if(method == 'create'){
                self.collection.add( newArticle );
            }
        });
        new core.view.ArticleFormPanel({ model:newArticle }).attach().show();
     });


     $('form', this.el).submit(function(e){

         var data = {demand_id:self.collection.uriParams.demand_id};
         $('.add_line .field', this).each(function(){
             data[this.name] = this.value;
         });
         var a = new customer.model.Article( data );
         
         a.setUriParam('company_id', self.collection.uriParams['company_id']);

         a.save().done(function(){
            self.collection.add( a );
            self.render();
         });  

         return false;
     });

     $('.add_line .field', this.el).eq(0).focus();

   }

});

