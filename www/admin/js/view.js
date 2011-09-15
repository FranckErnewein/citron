admin.view = {};


admin.view.View = Backbone.View.extend({

	initialize:function(){

		var instance_ = this;
		if(this.model){
			this.model.bind('change', function(){
				instance_.render();	
			});
            
		}
	},

	make:function(tagName, attributes, content){
		return $(Backbone.View.prototype.make.call(this, tagName, attributes, content));
	},
		
	render:function(){
        
		var instance_ = this;
		if(this._template){
			this._render();
		}else{
            var node =$('#' + this.template +'_tmpl_str' );
            var str = node.html();
            try{
                this._template = _.template( str );
            }catch(e){
                console.error('template', this.template, str, node)
                this._template = _.template( $('#' + this.template +'_tmpl_str' ).html() );
            }
           /*
		   $.ajax({
				url:'template/'+ this.template +'.html',
				success:function(html){
					instance_._template = _.template(html);
					instance_._render();
				}
			});
            */
		}
		return this;
	},

	_render:function(){
		this.el.html(this._template(this));
		this.trigger('render', this);
	}
});

admin.view.DataTable = admin.view.View.extend({

	initialize:function(){
		var instance_ = this;	
		admin.view.View.prototype.initialize.call(this);
		this.collection.bind('ajax:read', function(){
            instance_.render();
		});


	},

	renderHeader:function( model ){
		this.headerRendered = true;			
		var tr = $(document.createElement('tr'));
		_.each(model.attributes, function(value, name){
			tr.append('<th>' + name + '</th>');	
		});
		this.$('thead').empty().append(tr);
	},

	addLine:function( model ){
		var tr = $(document.createElement('tr'));
		_.each(model.attributes, function(value, name){
			tr.append('<td>' + value + '</td>');	
		});

        
		tr.click(function(){
			main.navigate('#table/Users/item/' + model.id, true);
		});
		this.$('tbody').append(tr);
	},

    render:function(){
        
        this.$('tbody').empty();
        var instance_ = this;
        this.collection.each(function( model ){
            instance_.renderHeader( model );
            instance_.addLine( model );
        })
    }
});



admin.view.FormView = admin.view.View.extend({

	tagName:'form',
    //className:'form-stacked',
	
	events:{
		'submit':'save'
	},
	
	initialize:function(){

        var instance_ = this;

        this.bind('render', function(){
            instance_.dom = {
                save:instance_.$('input.save'),
                del:instance_.$('input.delete')
            }

            instance_.$('.clearfix').bind('change', function(e){
                instance_.change($(this), e);
            });

        });

        this.model.bind('error', function(fieldName){
            instance_.$('[name='+fieldName).parent().parent().addClass('error');
		});

        this.model.bind('ajax:update', function(){
            console.log('hello');
            main.navigate( '#table/Users', true);
        });

        


		this.model.bind('change', function(model){

            _.each( model.changedAttributes(), function(value, fieldName){
                var field = instance_.$('[name='+fieldName+']');
                field.removeClass('error')
                if( field && value && (field.val() || '').toString() != value.toString() ){
                    field.val( value );
            
                }
                //this.$('[name='+fieldName).val( model.get(fieldName) );
                
            });
            
		});

        

        this.render();

	},

	save:function(e){
		this.model.save();
		return false;
	},

	change:function(domEl, e){
		var fieldName = e.target.name;

        var data = {};
        data[fieldName]= $(e.target).val();
        if( !data[fieldName] || !this.model.set(data) ){
            domEl.addClass('error');
        }else{
            domEl.removeClass('error');
        }
        if(this.$('.clearfix.error').length == 0){
            this.dom.save.removeAttr('disabled')
        }else{
            this.dom.save.attr('disabled', 'disabled')
        }
		
	}

});

admin.view.Select = admin.view.View.extend({

});

admin.view.form = {};
admin.view.form.Users = admin.view.FormView.extend({
	template:'form-user',
    initialize:function(){
        admin.view.FormView.prototype.initialize.call(this);
        
    }
});


