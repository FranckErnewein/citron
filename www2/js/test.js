console.log('Start test');

var session = new core.model.Session({
    email:'franck.ernewein@gmail.com',
    login:'citron'
});

console.log(session.isNew());
session.save();
session.fetch();
