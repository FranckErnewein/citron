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

	pack.date = function(strDate){
		var date = new Date(strDate);
		var result;
		if(context.lang == 'fr'){
			result = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
		}else{
			result = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
		}
		return result;
	}

})(utils);
