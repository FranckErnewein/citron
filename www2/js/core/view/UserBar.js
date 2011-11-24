
core.view.UserBar = core.view.BaseView.extend({

    template:'js/core/template/UserBar.html',


    initialize:function(){
        var self = this;
        
        this.model.bind('change', function(){
            self.render();
        });

        this.bind('render', function(){
            self.$('.dropdown-toggle').mouseenter(function(){
                $(self.el).toggleClass('open');
                return false;
            })
            self.$('.dropdown').mouseleave(function(){
                $(self.el).removeClass('open');
            });



            self.$('.logout').click(function(){
                self.model.logout();
                return false;
            });
        });

    }

});

