
customer.view.DemandDetails = core.view.BaseView.extend({

    template:'js/customer/template/DemandDetails.html',

    initialize:function(){
        var self = this;

        this.model.bind('change', function(){
            self.render();
        });

        this.model.bind('destroy', function(model, method){
            $(self.el).empty();
            model.collection.remove(model);
        });


        this.articles = new customer.collection.Articles();
        this.articles.setUriParam('demand_id', this.model.id );
        this.articles.setUriParam('company_id', app.model.user.get('company_id') );


    },


    onRender:function(){
        var self = this;
        
        this.articlesView = new customer.view.Articles({el:$('#article-list', this.el), collection:this.articles });
        this.articlesView.render();
        this.articles.merge();

        this.$('.edit').click(function(e){
            e.stopPropagation();
            new core.view.DemandFormPanel({
                collection:app.collection.tags,
                model:self.model
            }).attach().show();
            return false;
        });

        $('.delete-demand', this.el).click(function(e){
           e.stopPropagation();
           new core.view.DeletePanel({
               model:self.model,
               label:'title'
           }).attach().show();
           return false;
        });

        
    }

});
