
customer.router.Main = core.router.BaseRouter.extend({
   routes:{
       'dummy':'dummy'
   },

   'dummy':function(){
       console.log('DUMMY')
   },

   switchPage:function( pageView ){
        if(this.currentPage){
            this.currentPage.remove();
        }
        this.currentPage = pageView;
        this.currentPage.render();
        if(this.pageContent){
            this.pageContent.hide().append( this.currentPage.el ).fadeIn();
        }
    }

});

