
core.view.DemandFormPanel = core.view.FormPanel.extend({

    template:'js/core/template/DemandFormPanel.html',

    
    initialize:function(){
        core.view.FormPanel.prototype.initialize.call(this);

        var self = this;

        this.model.bind('ajax:success', function( model ){

        });
        this.collection.bind('add', function(){
            self.render();
        });
    },


    onRender:function(){
        core.view.FormPanel.prototype.onRender.call(this);

        var self = this;

        
        $('#add_tag', this.el).click(function(){
            var newTag = new customer.model.Tag({'company_id' : self.collection.uriParams['company_id']});
            newTag.bind('ajax:success', function(model, method){
                if(method == 'create'){
                    self.collection.add(newTag);
                }
            });

            new core.view.TagFormPanel({
                model:newTag
            }).attach().show();
            return false;
        });


        $('.tag-list input', this.el).change(function(){
            console.log('change');
        });

    }

    

});

