
core.view.Panel = core.view.BaseView.extend({

    className:'modal-wrapper',

    events:{
        'click .close':'hide',
        'click .cancel':'hide',
        'click .bg-modal-close':'hide'
    },

    attach:function(){
        $(document.body).append(this.el);
        return this;
    },

    hide:function(e){
        if(e && e.stopPropagation) e.stopPropagation();
        $(this.el).fadeOut(200);
        return this;
    },

    show:function(e){
        if(e && e.stopPropagation) e.stopPropagation();
        this.render();
        $(this.el).hide().fadeIn(200);
        return this;
    }

});

