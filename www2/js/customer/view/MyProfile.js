
customer.view.MyProfile = core.view.BaseView.extend({

    template:'js/customer/template/MyProfile.html',

	onRender:function(){
		$('form').backboneForm( this.model );
	 }

});

