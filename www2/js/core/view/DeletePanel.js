
core.view.DeletePanel = core.view.Panel.extend({

    template:'js/core/template/DeletePanel.html',

    events:{
        'click .delete':'deleteModel',
        'click .close':'hide',
        'click .cancel':'hide',
        'click .bg-modal-close':'hide'
    },

    deleteModel:function(e){
        if(e) e.stopPropagation();
        var self = this;
        this.model.destroy().done(function(){
            self.hide();
        });
        return false;
    },



});

