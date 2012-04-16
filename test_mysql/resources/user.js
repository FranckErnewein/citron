
exports.index = function( req, res ){
	console.log(req.route.params.company);
	//console.log(res);
	res.send( 'hello' );
}
