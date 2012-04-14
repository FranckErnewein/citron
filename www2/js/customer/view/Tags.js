
customer.view.Tags = core.view.BaseView.extend({

	template:'js/customer/template/Tags.html',

	initialize:function(){
		var self = this;
        this.collection.bind('add', function(){
           self.render();
        });
       this.collection.bind('destroy', function(){
           self.render();
       });
	},

	onRender:function(){
		var self = this;
		$('.delete', this.el).click(function(){
			var id = $(this).attr('href').replace('#','');
			var tag = self.collection.get( id );
			new core.view.DeletePanel({model: tag }).show().attach();
			return false;
		});

		$('.add-tag', this.el).click(function(){
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
	}

});
