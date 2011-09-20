/**
 * ROUTER
 */



app.router.main = new customer.router.Main();

app.router.main.route('home', 'home', function(){
    app.router.main.switchPage( new customer.view.Home() );
});

app.router.main.route(/demands\/?(\d*)?/, 'demands', function( id ){
    if( !(this.currentPage instanceof customer.view.Demands)){
        var page = new customer.view.Demands({collection:app.collection.demands});
        this.switchPage( page );
    }else{
        page = this.currentPage;
    }
    if( id ){
        page.displayDemand( id );
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
        app.collection.demands.setUriParam('user_id', session.get('user_id'));
        app.collection.demands.merge();
    }else{
        app.model.user.logout();
    }

});


//user
app.model.user = new core.model.User();
app.model.user.bind('logout', function(user){
    app.model.session.clear();
});

/**
 * Collection
 */
//demands
app.collection.demands = new core.collection.Demands();





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