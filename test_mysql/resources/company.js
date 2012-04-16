exports.index = function( req, res ){
	res.send('hello');	
}

exports.show = function( req, res ){
	console.log( req.route.params );
}

