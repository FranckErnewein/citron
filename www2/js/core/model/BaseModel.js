core.model.BaseModel = Backbone.Model.extend({

    url:function(){

        var url;

        if(this.collection){
            url = this.collection.url();
        }else{
            var uri = this.uri;
            _.each(this.uriParams, function( param , key ){
                uri = uri.replace( ':'+key, param );
            });
            url = 'http://'+document.location.hostname+':8888/api/' + uri;
        }

        if(this.id){
            if( url[url.length-1] != '/') url += '/';
            url += this.id ;
        }
        return url + '.json';
    },
    
    setUriParam:function(key, value){
        if(!this.uriParams) this.uriParams = {};
        this.uriParams[key] = value;
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

    },

    contains:function( str, fields ){
        var self = this;
        var detected = false;
        _.each( fields, function(fieldName, i){
            if(self.get(fieldName) && self.get(fieldName).toLowerCase().indexOf( str.toLowerCase() ) > -1){
                detected = true;
                return;
            }
        });
        return detected;
    }

});

