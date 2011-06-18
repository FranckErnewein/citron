app.collection.Demands = app.collection.AbstractCollection.extend({

	model:app.model.Demand,

	search:function( filter, from, to ){
		options = {
			search:filter,
			from:from,
			to:to
		};
	
		var self = this;
		return this.query(options).done(function(data){
			self.refresh(data);
		});
	}

});
