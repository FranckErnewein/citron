core.collection.BaseCollection = Backbone.Collection.extend({

    url:function(){
        var uri = this.uri;
        _.each(this.uriParams, function( param , key ){
           uri = uri.replace( ':'+key, param );
        });
        return 'http://'+document.location.hostname+':8888/api/' + uri;
    },

    setUriParam:function(key, value){
        if(!this.uriParams) this.uriParams = {};
        this.uriParams[key] = value;
    },

    merge:function(filter){
        var self = this;
        var options = {
            data:filter
        };
        return Backbone.sync('read', this, options).done(function(result){
            if( _.isArray(result) ){
                _.each(result, function(item, i){
                    self.mergeItem( item );
                });
            }else{
                self.mergeItem( result );
            }
        });
    },

    mergeItem:function( json ){
      var id = json[this.model.prototype.idAttribute];
      var item = this.get(id);
      
      if( item && item.toJSON() != json ){
          
          this.get(id).set( json );
      }else{
          this.add( json );
      }
    },

    getAnyway:function( id ){
        
        if( !this.get( id ) ){
            var data = {};
            data[this.model.prototype.idAttribute] = id;
            this.add( data );
            this.get( id ).fetch();
        }
        
        return this.get( id );
    }
    
});



