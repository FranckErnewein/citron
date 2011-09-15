if(!app.view) app.view = {};

app.view.AbstractView = Backbone.View.extend({
	
	initialize:function(node){

		//Backbone.View.call(this);

		if(!node || node.length != 1){
			throw new Error('node is not valid');
		}
		this.node = node;
		this.name = this.node.attr( app.config.view.attr );
		this.children = {};
		this.parent = parent || null;
		this.data = {};

		if(!this.preventAutoRender){
			this.render();
		}

	},

	render:function(data){
		var self = this;

		if(data != undefined){
			this.data = data;
		}

		if(!this.templateFunction){
			this.loadTemplate( app.config.view.template + this.template ).done(function(xhr){
				self.createTemplateFunction(xhr);
				self._render();
			});
		}else{
			this._render();
		}
	},

	_render:function(){
		var data = {
			data:this.data
		};
		if(this.privateData){
			data.privateData = this.privateData;
		}
		console.log('RENDER', this.name, this.data);
		try{
			var html = this.templateFunction({data:this.data});
			this.node.html(html);
		}catch(e){
			console.error('Error in render of ' + this.name);
			throw e;
		}
		this.initChildren();
		if( typeof this.onDomReady == 'function'){
			this.onDomReady();
		}

		this.node.trigger('render');

	},

	loadTemplate:function(url){
		return $.ajax({
			url:url,
			cache:false,
			error:function(){
				throw new Error('Template '+url+' not found');
			}
		});
	},

	createTemplateFunction:function(str){
		try{
			this.templateFunction = new Function(
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
		}catch(e){
			throw new Error('template compilation error : \n'+str);
		}
	},

	initChildren : function(){
		var self = this;
		$('['+app.config.view.attr+']', this.node).each(function(){
			try{
				var componentClassName = $(this).attr(app.config.view.attr).split('.');
				//var componentClass = pack[componentClassName];
				var componentClass = window[componentClassName[0]];
				for(var i=1; i<componentClassName.length-1;i++){
					componentClass = componentClass[componentClassName[i]];	
				}
				if( componentClassName.length > 2 ){
					componentClass = componentClass[componentClassName[componentClassName.length -1]];	
				}
				console.log(componentClass);
				if(!self.children[componentClassName]){
					console.log('create', componentClassName);
					try{
						self.children[componentClassName] = new componentClass($(this));
					}catch(e){
						throw new ReferenceError( componentClassName.join('.') + ' not found');
					}
				}
				console.log('init', componentClassName);
				//self.children[componentClassName].init( $(this) , self);

			}catch(e){
				console.error('Unable to create component ' + $(this).attr(app.config.view.attr));
				throw e;
			}
		});
	},

	getChild : function( _class ){
		for(var i in this.children){
			if( this.children[i] instanceof _class){
				return this.children[i];
			}
		}
	}
	
});
