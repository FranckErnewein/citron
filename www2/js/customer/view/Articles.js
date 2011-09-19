
customer.view.Articles = core.view.BaseView.extend({

   template:'js/customer/template/Articles.html',

   initialize:function(){

       var self = this;
       
       console.log(this.collection);
      
       this.collection.bind('ajax:success', function(){
           self.render();
       });

   },

   onRender:function(){
     var self = this;
     $('a', this.el).click(function(){
        var articleToEdit = self.collection.get( $(this).attr('href').replace('#', ''));
        if(articleToEdit){
            new core.view.ArticleFormPanel({model:articleToEdit }).attach().show();
        }
        return false;
     });


     $('.btn.success').click(function(){
        var articleToEdit = new core.model.Article({'demand_id':self.collection.uriParams.demand_id});
        new core.view.ArticleFormPanel({model:articleToEdit }).attach().show();
        
     });
   }

});

