if(!utils) var utils = {};


(function(pack){
	
 	pack.inherits = function(childCtor, parentCtor) {
		function tempCtor(){};
		tempCtor.prototype = parentCtor.prototype;
		childCtor.prototype = new tempCtor();
		childCtor.prototype.constructor = childCtor;
	};


	pack.api = function(url, data, method){
		return $.ajax({
			data:data,
			dataType:'json',
			url:config.BASE_API +url,
			type:method || 'GET'
		});
		
	}

})(utils);
