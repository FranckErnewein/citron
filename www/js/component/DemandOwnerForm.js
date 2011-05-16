(function(pack){

 	function DemandOwnerForm(){
		//this.preventAutoRender = true;

		this.inputNode = {};	
	
	}

	utils.inherits(DemandOwnerForm, pack.AbstractComponent);


	DemandOwnerForm.prototype.onDomReady = function(){
		var self = this;
		$('button').click(function(){
			self.toggleMode();
		});

		$('.data-field', this.node).after(function(){
			var span = $(document.createElement('span')).addClass('data-field-span');
			var input = $(this);
			span.text( $(this).val());
			return span;
		});

		if(this.data){
			this.visualMode();
		}

	}

	DemandOwnerForm.prototype.toggleMode = function(){
		if(this.isEditMode){
			this.visualMode();
		}else{
			 this.editMode();
		}
	}



	DemandOwnerForm.prototype.editMode = function(){
		this.isEditMode = true;
		this.node.addClass('edit-mode');
	}

	DemandOwnerForm.prototype.visualMode = function(){
		this.isEditMode = false;
		this.node.removeClass('edit-mode');
	}

	pack.DemandOwnerForm = DemandOwnerForm;


 })(component);
