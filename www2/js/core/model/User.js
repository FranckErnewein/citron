
core.model.User = core.model.Base.extend({
    uri:'users',

    logout:function(){
        this.clear();
        this.id = null;
        this.trigger('logout');
    }

});

