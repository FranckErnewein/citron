/**
 * ROUTER
 */



app.router.main = new customer.router.Main();

app.router.main.route('home', 'home', function(){
    app.router.main.switchPage( new customer.view.Home() );
});

app.router.main.route(/demands\/?(\d*)?/, 'demands', function( id ){
    console.log('navigate', app.model.user.id)
    if(app.model.user.id){
        console.log('and id', app.model.user.id)
        if( !(this.currentPage instanceof customer.view.Demands)){
            var page = new customer.view.Demands({collection:app.collection.demands});
            this.switchPage( page );
        }else{
            page = this.currentPage;
        }
        if( id ){
            page.displayDemand( id );
        }
    }
});



/**
 * MODEL
 */

//session
app.model.session = new core.model.Session({
    email:'trade@antoinegroupe.com',
    password:'123456'
});
app.model.session.bind('change:user_id', function(session){
    app.model.user.id = session.get('user_id');
    if(app.model.user.id){
        app.model.user.fetch();
        _.each(app.collection, function(col){
            col.reset();
        });
        console.log(document.location.hash.toString(), app.model.user.id)
        var togo = document.location.hash.toString();
        app.router.main.navigate( '/', true );
        app.router.main.navigate( togo , true );
    }else{
        app.model.user.logout();
    }
});




//user
app.model.user = new core.model.User();
app.model.user.bind('logout', function(user){
    app.model.session.clear();
});
app.model.user.bind('change:company_id', function( user ){
    app.collection.demands.setUriParam('company_id', user.get('company_id'));
    app.collection.demands.merge();
});

/**
 * Collection
 */
//demands
app.collection.demands = new core.collection.Demands();
app.collection.demands.bind('add', function(d){console.log('add', d.id)});
app.collection.demands.bind('change ', function(d){console.log('change', d.id)});
app.collection.demands.bind('reset', function(d){console.log('reset')});




$(document).ready(function(){
    /**
     * VIEW
     */
    //login
    app.view.login = new core.view.Login({model:app.model.session});
    app.view.login.render();
    $(app.view.login.el).appendTo(document.body);
    app.model.session.save();

    //userbar
    app.view.userbar = new core.view.UserBar({el:$('.secondary-nav'), model:app.model.user});


    app.router.main.pageContent = $('#page-content');

    Backbone.history.start();

    if(!document.location.hash){
        app.router.main.navigate('home', true);
    }


});