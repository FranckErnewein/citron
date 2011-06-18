app.model.User = app.model.AbstractModel.extend({

	path:'users',

	login:function(login, pwd){
		var self = this;
		return this.query({
			email:login,
			password:pwd
		}, 'login', 'POST' ).done(function(data){
			self.set(data);	
		});
	}

});
