console.log(app.collection.AbstractCollection);

app.collection.Users = app.collection.AbstractCollection.extend({
	model:app.model.User,
	initialize:function(){

	}
	

});
