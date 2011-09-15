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

    if(type == 'create' || type == 'update'){
        params.data = model.toJSON();
    }

    return $.ajax(params);
}




