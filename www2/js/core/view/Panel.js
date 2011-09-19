
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

    hide:function(){
        $(this.el).fadeOut();
        return this;
    },

    show:function(){
        this.render();
        $(this.el).hide().fadeIn();
        return this;
    }

});

