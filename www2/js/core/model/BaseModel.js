core.model.BaseModel = Backbone.Model.extend({

    urlParams:{},

    url:function(){

       var url = (this.collection)? this.collection.url() : 'http://'+document.location.hostname+':8888/api/' + this.uri;

       if(this.id){
           url += '/' + this.id ;
       }
       return url + '.json';
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

