var API = 'http://localhost:7777';
var admin ={
    model:{},
    view:{}
};
var common = {
    collection:{},
    model:{},
    view:{}
};



common.collection.Collection = Backbone.Collection.extend({
    url:function(){
        return this.model.prototype.url.call(this, this.model.prototype.path);
    }
});

common.model.Model = Backbone.Model.extend({
    url:function( path ){
        var url = API + '/' + (path || this.path) ;
        if(this.id){
            url += '/' + this.id;
        }
        return url;
    }
});

common.model.User = common.model.Model.extend({
    path:'users'
});
common.collection.Users = common.collection.Collection.extend({
    model:common.model.User

});

common.view.View = Backbone.View.extend({
    initialize:function(){
        if(!this.el){
            this.el = document.createElement(this.tag);
        }
    },

    render:function(){
        $(this.el).html( $(this.template).tmpl(this.data) );
    }
});

admin.view.User = Backbone.View.extend({
    template:'#template',
    initialize:function(){

        this.model = new common.collection.Users();
        this.model.bind('add',function(){
            this.render();
        });
        this.model.fetch();

    }
});

var v = new admin.view.User();
$(v.el).appendTo(document.body);


