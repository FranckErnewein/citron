if(!app.model) app.model = {};

app.model.AbstractModel = Backbone.Model.extend({
	
	url:function( path ){
		var url = app.config.api.path + (path || this.path);
		if(this.id)
			url += '/' + this.id;
		return url;
	},

		
	
	sync:function(method, model, options){
		options.dataType = 'application/x-www-form-urlencoded',
		options.contentType = 'application/x-www-form-urlencoded',
		//console.log(options);
		Backbone.sync.call(this, method, model, options);
	}

});
