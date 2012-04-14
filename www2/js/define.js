var CONFIG = {}

if(document.location.hostname == 'localhost'){

    CONFIG.apiRoot = 'http://localhost:8888/api/'

}else{

    CONFIG.apiRoot = 'http://'+document.location.hostname+'/api/'
	if(document.location.hostname.toString().indexOf('192.168')>-1)
    CONFIG.apiRoot = 'http://'+document.location.hostname+':8888/api/'

}


function Package(){
    this.model={};
    this.collection={};
    this.router={};
    this.view={};
}


var core = new Package();
var customer = new Package();
var admin = new Package();
var seller = new Package();
var app = new Package();


var _getUrl = function(object) {
    if (!(object && object.url)) return null;
    return _.isFunction(object.url) ? object.url() : object.url;
};
var _methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'delete': 'DELETE',
    'read'  : 'GET'
  };


//console
if(!console) var console = {log:function(){}};

app.xhr = new Backbone.Collection();

var loaderXHR;
$(document).ready(function(){
    loaderXHR = $('#loader').css({'visibility':'hidden'});
});
app.xhr.bind('add', function(xhr){
    if(app.xhr.size() > 0 && loaderXHR) loaderXHR.css({'visibility':'visible'});
});
app.xhr.bind('remove', function(xhr){
    if(app.xhr.size() == 0 && loaderXHR) loaderXHR.css({'visibility':'hidden'});
});


Backbone.sync = function(method, model, options){



    var type = _methodMap[method];


    var params = _.extend({
      type:         type,
      dataType:     'json',
      contentType:  'application/x-www-form-urlencoded'
    }, options);
    

    if (!params.url) {
        params.url = _getUrl(model);
    }

    if(method == 'create'){
        params.data = model.toJSON();
    }

    if(method == 'update'){
        var first = true;
        _.each( model.toJSON(), function( param, key ){
            params.url += (first)? '?' : '&';
            params.url += key+'='+param;
            first = false;
        });
    }
    
    var query = $.ajax(params);

    var xhrModel = new Backbone.Model(params);
    app.xhr.add(xhrModel);

    model.trigger('ajax:start', model);
    
    query.always(function( xhr ){
        app.xhr.remove( xhrModel );
        console.log(type , model.url() ,' sent', (method == 'update')? params.url : params.data , ' - xhr',  xhr  );
    });

    query.done(function( xhr ){
        model.trigger('ajax:success' , model, method);
    });

    return query;
}




