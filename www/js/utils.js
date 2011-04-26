if(!utils) var utils = {};


(function(pack){
	
 	utils.inherits = function(childCtor, parentCtor) {
		function tempCtor(){};
		tempCtor.prototype = parentCtor.prototype;
		childCtor.prototype = new tempCtor();
		childCtor.prototype.constructor = childCtor;
	};

})(utils);
