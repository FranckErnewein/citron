
Backbone.sync = function(method, model, options){

    var params = options;
    if(!params.data){
        if(method == 'create'){
            params.data = model.toJSON();
        }else if( method == 'update' ){
            params.data = model.toJSON();
        }else{
            params.data = {};
        }

		
    }

    console.log(method, params.data);


    params.url = model.url();
	
    if(method == 'read'){
        params.type = 'GET';
    }else{
        params.type = 'POST';
        if(method == 'update'){
            params.data._method = 'PUT';
        }else if(method == 'delete'){
            params.data._method = 'DELETE';
        }
    }
    
    var ajax = $.ajax(params);
    
    ajax.done(function(xhr){
        model.trigger('ajax:'+method, xhr);
    });
    ajax.fail(function(xhr){
        model.trigger('ajax:error', xhr);
    });
    
    return ajax;
};


common.model = {};
var utils = {};
utils.filter = {
    isEmail:function( email ){
        return (email && email.match(/^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/i));
    },
    isPassword:function( password ){
        return (password && password.length > 4);
    }
}
common.model.Model = Backbone.Model.extend({
	
    urlParams:{},
	
    url:function(){
        var self = this;
        var url = '' ;
        url += (this.urlRoot || this.model.prototype.urlRoot);
        _.each(this.urlParams, function(param, name){
            name.replace(':' + name, param);
        });
        if(this.id){
            url += '/' + this.id;
        }

        url += '.json';

        return API_ROOT + url;
    },

    validate:function( json ){

        var isValid = true;
        var errors = [];
        var instance_ = this;
        if(json){
            _.each(this.validator, function(func, fieldName){
                var field = json[fieldName];
                if(field && func){
                    if(!func(field)){
                        isValid = false;
                        console.log('error', fieldName);
                        instance_.trigger('error:'+ fieldName, fieldName);
                        errors.push(fieldName);
                    }
                }
            });
        }
        if( !isValid ){
            return errors;
        }

    }
});


common.model.User = common.model.Model.extend({
    urlRoot:'users',
    validator:{
        email:utils.filter.isEmail,
        password:utils.filter.isPassword
    }
});


