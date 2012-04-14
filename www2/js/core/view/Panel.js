
core.view.Panel = core.view.BaseView.extend({

    className:'modal-wrapper',

    events:{
        'click .close':'hide',
        'click .cancel':'hide',
        'click .bg-modal-close':'hide'
    },

    initialize:function(){
        core.view.BaseView.prototype.initialize.call(this);
        _.bindAll(this);
    },

    attach:function(){
        $(document.body).append(this.el);
        return this;
    },

    pressKey:function( keyEvent ){
        if(keyEvent.keyCode == 27 ){

        }
        console.log( keyEvent.keyCode , this);

    },


    hide:function(e){
        var self = this;
        //$(document).unbind('keyup', function(e){ self.pressKey(e) } );
        if(e && e.stopPropagation) e.stopPropagation();
        $(this.el).fadeOut(200);
        return (e)? false : this;
    },

    show:function(e){
        var self = this;
        //$(document).bind('keyup', function(e){ self.pressKey(e) }  );
        if(e && e.stopPropagation) e.stopPropagation();
        this.render();
        $(this.el).hide().fadeIn(200);
        return (e)? false : this;
    }

});
