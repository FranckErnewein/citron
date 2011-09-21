
customer.view.Articles = core.view.BaseView.extend({

   template:'js/customer/template/Articles.html',

   initialize:function(){

       var self = this;
       
       console.log(this.collection);
      
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
            new core.view.DeletePanel({model:articleToDelete }).attach().show();
        }
        return false;
     });


     $('.btn.add', this.el).click(function(){
        var newArticle = new core.model.Article({'demand_id':self.collection.uriParams.demand_id});
        self.collection.add( newArticle );
        new core.view.ArticleFormPanel({model:newArticle }).attach().show();
        
     });
   }

});

