;(function(window, undefined){

	window.app = window.app || {};

	var TrainerRouter = Backbone.Router.extend({

		routes: {
			"*default": "page1"
		},

		page1: function(){
			this.trainerview.render();
		},

		initialize: function(){
			this.appview = new app.AppView();

			this.trainerview = new app.TrainerView();
			this.appview.$el.append(this.trainerview.el);  //sticks the trainerview underneath the "#content" i created on index.html, because el was defined under appview as being #content
		
			Backbone.history.start();
		}

	});

app.TrainerRouter = TrainerRouter;


})(window, undefined);