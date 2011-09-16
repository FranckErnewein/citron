/**
 * ROUTER
 */

app.router.main = new customer.router.Main();

app.router.main.route('home', 'home', function(){
    if(!app.view.home){
        app.view.home = new customer.view.Home({el:$('#home')});
        app.view.home.render();
    }
    app.router.main.switchPage( app.view.home );
});

app.router.main.route('demands', 'demands', function(){
    app.view.demands = new customer.view.Home({el:$('#home')});
    app.view.demands.render();
    app.router.main.switchPage( app.view.home );
});

app.router.main.route('test', 'test', function(){
    console.log('test')
});

app.router.main.route('test/:id', 'test_id', function(){
    console.log('test id')
});


/**
 * MODEL
 */

//session
app.model.session = new core.model.Session({
    email:'franck.ernewein@gmail.com',
    password:'citron'
});
app.model.session.bind('change:user_id', function(session){
    app.model.user.id = session.get('user_id');
    if(app.model.user.id){
        app.model.user.fetch();
        app.collection.demands.setUriParam('user_id', session.get('user_id'));
        app.collection.demands.merge();
        
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
    $(app.view.login.el).appendTo(document.body)

    //userbar
    app.view.userbar = new core.view.UserBar({el:$('.secondary-nav'), model:app.model.user});

    Backbone.history.start();

    app.router.main.navigate('home', true);


});