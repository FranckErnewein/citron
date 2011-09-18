
customer.view.Articles = core.view.BaseView.extend({

   template:'js/customer/template/Articles.html',

   intialize:function(){

       var self = this;
       
       console.log(this.collection);
      
       this.collection.bind('ajax:success', function(){
           console.log('zorui');
           self.render();
       });

       this.collection.bind('add', function(){
           console.log('ADD');
       });

       
   }

});

