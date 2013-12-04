require(["backbone"], function(Backbone){
	var FormView = Backbone.View.extend({
		events : {
			"submit" : "handleSubmit",
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
	});

	var ImageView = Backbone.View.extend({
		render : function(){
			this.$el.attr("src", this.model.get("src"));
		}
	})

	var form = new FormView({ el : ".raspicam-interface-photo" });
	var previewModel = new Backbone.Model({ });
	var preview = new ImageView({ el : ".raspicam-interface-photo img", model : previewModel });
	var prefix = "/images/camera/photo/";
	form.on("submit", handleSubmit);

	function handleSubmit(e){
		sendCapture();
	}

	function sendCapture(){
		jQuery.ajax({
			url : "/capture",
			success : handleSuccess,
			failure : handleFailure
		});
	}

	function handleSuccess(response){
		previewModel.set("src", prefix + response.name);
		console.log("Succes! %o", response);
	}

	function handleFailure(response){
		console.log("Failure %o", response);
	}



});