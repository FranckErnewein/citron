
customer.view.MyCompany = core.view.BaseView.extend({

    template:'js/customer/template/MyCompany.html',

    initialize:function(){
        var self = this;
        this.collection.bind('add', function(){
            self.render();
        });

    },

	onRender:function(){
		$('.my-company-form').backboneForm( this.model );
	 }

});

