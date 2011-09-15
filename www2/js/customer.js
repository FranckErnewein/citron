
app.router.main = new customer.router.Main();

app.model.session = new core.model.Session({
    email:'franck.ernewein@gmail.com',
    password:'123456'
});

app.model.user = new core.model.User();

app.model.session.bind('change:user_id', function(session){
    app.model.user.set({ id:session.get('user_id') });
    app.model.user.fetch();
});

app.model.user.bind('logout', function(user){
    app.model.session.clear();
})


$(document).ready(function(){

    app.view.login = new core.view.Login({model:app.model.session});

    app.view.userbar = new core.view.UserBar({el:$('.secondary-nav'), model:app.model.user});

    $(document.body).append( app.view.login.render().el );
    app.view.login.render();


});