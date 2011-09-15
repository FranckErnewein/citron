admin.router = {};



admin.router.Main = Backbone.Router.extend({

	
	initialize:function(){
		this.context = new Backbone.Model({
			table:null,
			item_id:null
		});

        this.collection = {
            Users:new admin.collection.Users()
        };
        this.view={
            table:new admin.view.DataTable({
				el:$('#table-list'),
                collection:this.collection.Users
            }),
            item:null
        }

        
	},

	routes:{
		'table/:table':'list',
		'table/:table/item/:id':'showForm'
	},

	list:function( table ){
        this.collection[table].fetch();
        this.view.table.render();
		$('#form-view').empty();
	},

	showForm:function(table, id){
        var instance_ = this;

		if(_.isNumber(parseInt(id))){
			var model = new admin.collection[table].prototype.model({id:id});
			model.fetch();
		}else{
			var model = new admin.collection[table].prototype.model();
		}

        model.bind('ajax:update', function(){
            if(instance_.collection[table].get(model.id)){
                instance_.collection[table].get(model.id).set(model.toJSON());
            }
        });
		var form = new admin.view.form[table]({model:model});
        this.view.item = form;
		$('#form-view').empty().append(form.render().el);	
	}
			
});
