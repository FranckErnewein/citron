/**
 * ROUTER
 */

app.router.main = new customer.router.Main();

app.router.main.route('home', 'home', function(){
    app.router.main.switchPage( new customer.view.Home() );
});

app.router.main.route(/demands\/?(\d*)?/, 'demands', function( id ){
    if(app.model.user.id){
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

app.router.main.route(/mycompany/, 'mycompany', function(){
    if(app.model.company){
        var users = new core.collection.UsersCompany();
        users.setUriParam('company_id', app.model.company.id);
        this.switchPage( new customer.view.MyCompany({model:app.model.company, collection:users}));
        users.merge();
    }
});
app.router.main.route(/myprofile/, 'myprofile', function(){
    if(app.model.user){
        this.switchPage( new customer.view.MyProfile({ model:app.model.user }));
    }
});

app.router.main.route(/myprofile/, 'myprofile', function(){
    if(app.model.user){
        this.switchPage( new customer.view.MyProfile({ model:app.model.user }));
    }
});

app.router.main.route(/contacts/, 'contacts', function(){
    if(app.model.user){
        this.switchPage( new customer.view.Contacts({ collection:app.collection.contacts }));
    }
});

app.router.main.route(/tags/, 'tags', function(){
    if(app.model.user){
        this.switchPage( new customer.view.Tags({ collection:app.collection.tags }));
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
        app.model.user.fetch().done(function(){
            var togo = document.location.hash.toString();
            app.model.company = new core.model.Company({'id':app.model.user.get('company_id')});
            app.model.company.fetch();
            
            app.router.main.navigate( '/', true );
            app.router.main.navigate( togo , true );
        });
        _.each(app.collection, function(col){
            col.reset();
        });
        
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

    app.collection.tags.setUriParam('company_id', user.get('company_id'));
    app.collection.tags.merge();

    app.collection.tags.setUriParam('company_id', user.get('company_id'));
    app.collection.tags.merge();

    app.collection.contacts.setUriParam('company_id', user.get('company_id'));
    app.collection.contacts.merge();

    app.collection.groups.setUriParam('company_id', user.get('company_id'));
    app.collection.groups.merge();
});

/**
 * Collection
 */
//demands
app.collection.demands = new customer.collection.Demands();

//tags
app.collection.tags = new customer.collection.Tags();

//demands X tags
app.collection.demandsXtags = new customer.collection.DemandsXTags();

//contact
app.collection.contacts = new customer.collection.Contacts();

//groups
app.collection.groups = new customer.collection.Groups();


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
