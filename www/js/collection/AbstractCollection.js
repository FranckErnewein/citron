if(!app.collection) app.collection = {};

app.collection.AbstractCollection = Backbone.Collection.extend({

	url:function(){
		return new this.model().url();
	},

	query:function(data, url, type){
		console.log(app.model.AbstractModel);
		return app.model.AbstractModel.prototype.query.call(this, data, url, type);
	}
	
});
