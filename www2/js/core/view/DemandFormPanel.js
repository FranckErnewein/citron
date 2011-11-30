
core.view.DemandFormPanel = core.view.FormPanel.extend({

    template:'js/core/template/DemandFormPanel.html',

    
    initialize:function(){
        core.view.FormPanel.prototype.initialize.call(this);

        var self = this;
        this.collection.bind('ajax:success', function(){
            self.render();
        });
    },


    onRender:function(){
        core.view.FormPanel.prototype.onRender.call(this);

        var self = this;
        var input = $('#add_new_tag input', this.el);

        input.keydown( function(){
            
        });

        $('#add_new_tag a', this.el).click( function(){
            self.addNewTag( input.val() );
        });

    },

    addNewTag:function( label ){
        var tag = new customer.model.Tag({
           'company_id':this.collection.uriParams['company_id'],
           'label':label
        });
        var self = this;
        tag.save().done(function(){
            self.collection.add(tag);
        })
        
    }
    

});

