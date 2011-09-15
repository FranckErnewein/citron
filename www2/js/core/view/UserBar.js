
core.view.UserBar = core.view.BaseView.extend({

    template:'js/core/template/UserBar.html',


    initialize:function(){
        var self = this;
        
        this.model.bind('change', function(){
            self.render();
        });

        this.bind('render', function(){
            self.$('.dropdown').click(function(){
                console.log('dude');
                $(this).toggleClass('open');
                return false;
            });

            self.$('.logout').click(function(){
                self.model.logout();
                return false;
            });
        });

    }

});

