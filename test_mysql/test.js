var mysql = require('mysql')
	, express = require('express')
	, Resource = require('express-resource')
	, _ = require('underscore')
	, Backbone = require('backbone');


var db = mysql.createClient({
	user:'root',
	password:'root',
	host:'localhost',
	port:8889,
	database:'antoine'
});

db.on('error', function(err){
	console.log(err);
});

var app = express.createServer();


var Users = Backbone.Collection.extend({

});

Backbone.sync = function( method, model, option ){
	var json = model.toJSON();
	delete json.id;
	var callback = function( err, result, fields ){
		if(err){
			console.log('error');
			console.log(err);
			option.error();
		}else if(result[0]){
			if( method != 'delete'){
				model.set( result[0] );
			}
			console.log('success');
			option.success();
		}
	}
	if( method == 'create' ){
		db.query( 'INSERT into ' + model.table + ' (' + _.keys(json).join(',') + ') VALUES (`' + _.values(json).join('`, `') + '`)' , callback );
	}else if( method == 'update' ){
		db.query( 'UPDATE `' + model.table + '` SET ' + _.map( json, function(v,k){return '`'+k+'`="'+v+'"'}).join(', ') + ' WHERE id=' + model.id , callback );
	}else if( method == 'delete' ){
		db.query( 'DELETE FROM ' + model.table + ' WHERE id=' + model.id , callback );
	}else if( method == 'read' ){
		db.query( 'SELECT * FROM ' + model.table + ' WHERE id=' + model.id , callback);
	}
}

var User = Backbone.Model.extend({
	table:'user'
});

var login = app.resource('login', require('./resources/login'));

var company = app.resource('company', require('./resources/company') );
var user = app.resource('user', require('./resources/user') );

company.add( user );

app.use( express.cookieParser() );
app.use( express.bodyParser() );
app.listen(1337);

db.query('SELECT * FROM user', function(err, result, fields){
	var users = new Users();
	users.add(result);
});




