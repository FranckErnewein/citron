if(!app.model) app.model = {};

app.model.AbstractModel = Backbone.Model.extend({
	
	url:function(path){
		return app.config.api.path + (path || this.path);
	},

	query:function(data, url, type){
		url = this.url( url );
		type || (type = 'GET');

		return $.ajax({
			url:url,
			type:type,
			data:data,
			//contentType:'application/json',
			dataType:'json'
		});
	}
	

});
