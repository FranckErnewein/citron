
customer.router.Main = core.router.BaseRouter.extend({
   routes:{
       'dummy':'dummy'
   },

   'dummy':function(){
       console.log('DUMMY')
   },

   switchPage:function( pageView ){
        $('.page').hide();
        if(pageView){
            pageView.el.show();
        }
        
    }

});

