	var _template = {};
	var _bundle = {};
(function($){


	
	function createTemplateFunction(str){
			return new Function(
				"obj",
				"var p=[],print=function(){p.push.apply(p,arguments);};" +

				"with(obj){p.push('" +
					 str
					.replace(/[\r\t\n]/g, " ")
					.split("<%").join("\t")
					.replace(/((^|%>)[^\t]*)'/g, "$1\r")
					.replace(/\t=(.*?)%>/g, "',$1,'")
					.split("\t").join("');")
					.split("%>").join("p.push('")
					.split("\r").join("\\'")

				 + "');}return p.join('');");
	};




	function getTemplate( url ){

		var def = new $.Deferred();

		if( _template[url] ){
			return def.resolve( _template[url] );
		}else{
			return $.ajax({
				url:url,
				success:function(xhr){
					_template[url] = createTemplateFunction(xhr);
				}
			});
		}

	};

	function getBundle( url ){
		var def = new $.Deferred();

		if( _bundle[url] ){
			return def.resolve( _bundle[url] );
		}else{
			return $.ajax({
				url:url,
				success:function(xhr){
					_bundle[url] = xhr;
				}
			});
		}

	}

	$.fn.render = function(template_url, data, domReady){
		var def = new $.Deferred();

		collection = $(this);

		//$.when( getBundle() , getTemplate(template_url) ).done(function(){
		getTemplate(template_url).done(function(){
			
			//$(this).html(_template[template_url]( {data:data, bundle:bundle} ));
			collection.html(_template[template_url]( {data:data} ));
			def.resolve(collection, data);
		});

		return def;

	}

})(jQuery);
