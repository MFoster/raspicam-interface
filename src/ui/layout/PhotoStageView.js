define(["./PhotoBaseView"], function(PhotoBaseView){
	return PhotoBaseView.extend({
		getTemplate : function(){
			if (this.model && this.model.get("day")){
				return "layout/photo-stage";
			}
			else{
				return "layout/empty-stage";
			}
		}
	});
})