admin.collection = {};
admin.collection.Collection = Backbone.Collection.extend({
	url:function(){
		return this.model.prototype.url.call(this);	
	}
});

admin.collection.Users = admin.collection.Collection.extend({

	model:common.model.User

});
