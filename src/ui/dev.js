require(["backbone"], function(Backbone){
	var FormView = Backbone.FormView = Backbone.View.extend({
		events : {
			"submit" : "handleSubmit"
		},
		handleSubmit : function(e){
			try{
				this.trigger("submit", this, e);
			}
			catch(e){

			}
			return false;
		},
		render : function(){}
	})

	var form = new FormView({ el : ".raspicam-interface-photo" });

	form.on("submit", handleSubmit);


	function handleSubmit(e){
		jQuery.get({
			url : "/capture",
			success : handleSuccess,
			failure : handleFailure
		});
	}

	function handleSuccess(response){
		console.log("Succes! %o", response);
	}

	function handleFailure(response){
		console.log("Failure %o", response);
	}



});