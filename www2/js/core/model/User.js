
core.model.User = core.model.BaseModel.extend({
    uri:'users',

    logout:function(){
        this.clear();
        this.id = null;
        this.set({id:null});
        this.trigger('logout');
    }

});

