define(["marionette", "backbone"], function(Marionette, Backbone){
	return Marionette.ItemView.extend({
		template : "layout/pager",
		events : {
			"click a" : "handleClick"
		},
		constructor : function(options){
			Marionette.ItemView.prototype.constructor.apply(this, arguments);
			this.size = options.size;
			this.index = options.index;
			this.masterCollection = options.masterCollection;
			this.pageCollection = options.pageCollection;
			this.collection = new Backbone.Collection(this.reduceMaster());
			this.masterCollection.on("sync", this.handleMasterSync.bind(this));
			var self = this;
			this.on("render", function(){
				self.delegateEvents();
			})
		},
		handleClick : function(e){
			var target = e.currentTarget;
			var num = target.getAttribute("data-num");
			if(num == "next"){
				this.setIndex(this.index + 1);
			}
			else if(num == "prev"){
				this.setIndex(this.index - 1);
			}
			else{
				this.setIndex(num);
			}
			this.reset();
			var self = this;
			setTimeout(function(){
				self.render();
			}, 50)
		},
		handleMasterSync : function(response){
			this.reset();
		},
		reset : function(){
			this.pageCollection.reset(this.sliceMaster());
			this.collection.reset(this.reduceMaster());
		},
		sliceMaster : function(){
			return this.masterCollection.slice(this.index * this.size, this.index * this.size + this.size)
		},
		reduceMaster : function(){
			var pages = this.getPageMax() + (this.masterCollection.size() % this.size == 0 ? 0 : 1);
			var arr = [];
			for(var i = 0; i < pages; i++){
				arr.push(new Backbone.Model({ num : i, active : (i === this.index)}));
			}
			return arr;
		},
		getPageMax : function(){
			return Math.floor(this.masterCollection.size() / this.size);
		},
		setIndex : function(index){
			var num = parseInt(index, 10);
			var max = this.getPageMax();
			if(num > max){
				this.index = 0;
			}
			else if(num < 0){
				this.index = max;
			}
			else{
				this.index = num;
			}
			return this;
		},
		setSize : function(size){
			this.size = size;
			return this;
		}

	})
});