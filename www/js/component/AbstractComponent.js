if(!component) var component = {};

(function(pack){

	function AbstractComponent(node, parent){
		this.init(node, parent);
	}

	AbstractComponent.prototype.init = function(node, parent){
		if(!node || node.length != 1){
			throw new Error('node is not valid');
		}
		this.node = node;
		this.name = this.node.attr( pack.config.ATTRIBUTE );
		this.children = {};
		this.parent = parent || null;
		this.data = {};

		if(!this.preventAutoRender){
			this.render();
		}
	}


	AbstractComponent.prototype.render = function(data){

		var self = this;

		if(data != undefined){
			this.data = data;
		}


		if(!this.templateFunction){
			this.loadTemplate( pack.config.TMPL_PATH +  this.name + '.html' ).done(function(xhr){
				self.createTemplateFunction(xhr);
				self.internalRender();
			});
		}else{
			this.internalRender();
		}
	}

	AbstractComponent.prototype.internalRender = function(){
		var data = {
			data:this.data
		};
		if(this.privateData){
			data.privateData = this.privateData;
		}
		console.log('RENDER', this, this.data);
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

		this.node.trigger(pack.event.DOM_READY);

	}

	AbstractComponent.prototype.loadTemplate = function(url){
		return $.ajax({
			url:url,
			cache:false,
			error:function(){
				throw new Error('Template '+url+' not found');
			}
		});

	}

	AbstractComponent.prototype.createTemplateFunction = function(str){
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
	};
	
	

	AbstractComponent.prototype.initChildren = function(){
		var self = this;
		$('['+pack.config.ATTRIBUTE+']', this.node).each(function(){
			try{
				var componentClassName = $(this).attr(pack.config.ATTRIBUTE);
				var componentClass = pack[componentClassName];

				if(!self.children[componentClassName]){
					console.log('create', componentClassName);
					self.children[componentClassName] = new componentClass($(this));
				}
				console.log('init', componentClassName);
				self.children[componentClassName].init( $(this) , self);

			}catch(e){
				console.error('Unable to create component ' + $(this).attr(pack.config.ATTRIBUTE));
				throw e;
			}
		});
	}

	AbstractComponent.prototype.appendChild = function(cstr, node){


	}

	AbstractComponent.prototype.getChild = function( _class ){
		for(var i in this.children){
			if( this.children[i] instanceof _class){
				return this.children[i];
			}
		}
	}

	


	pack.AbstractComponent = AbstractComponent;

})(component);
