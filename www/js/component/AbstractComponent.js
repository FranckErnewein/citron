if(!component) var component = {};

(function(pack){

	function AbstractComponent(node, parent){
		this.init(node, parent);
	}

	AbstractComponent.prototype.init = function(node, parent){
		if(node.length != 1){
			throw new Error('node is not valid');
		}
		this.node = node;
		this.name = this.node.attr( pack.config.ATTRIBUTE );
		this.children = [];
		this.parent = parent || null;
		this.data = {};
		this.initialized = false;
		this.render();
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
		console.log('RENDER', this, this.data);
		this.node.html(this.templateFunction({data:this.data}));
		if(!this.initialized){
			this.initialized = true;
			this.initChildren();
			this.node.trigger(pack.event.INIT);
		}
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
	};

	AbstractComponent.prototype.initChildren = function(){
		var self = this;
		$('['+pack.config.ATTRIBUTE+']', this.node).each(function(){
			var cp = new pack[$(this).attr(pack.config.ATTRIBUTE)]($(this));
			cp.init( $(this) );
			self.children.push(cp);
		});
	}

	AbstractComponent.prototype.appendChild = function(cstr, node){


	}

	


	pack.AbstractComponent = AbstractComponent;

})(component);
