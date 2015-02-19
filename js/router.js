;(function(window, undefined){

	window.app = window.app || {};

	var TrainerRouter = Backbone.Router.extend({

		routes: {
			"*default": "page1",
			"bio": "page2"
		},

		hideAll: function() {
            this.views.forEach(function(v) {
                v.$el.hide();
            });
        },

		page1: function(){
			this.hideAll();
			this.trainerview.render();
		},

		page2: function(){
			this.hideAll();
			this.bioview.render();
		},

		initialize: function(){
			this.appview = new app.AppView();

			this.trainerview = new app.TrainerView();
			this.appview.$el.append(this.trainerview.el);  //sticks the trainerview underneath the "#content" i created on index.html, because el was defined under appview as being #content
		
			this.bioview = new app.BioView();
			this.appview.$el.append(this.bioview.el);

			this.views = [this.trainerview, this.bioview];


			Backbone.history.start();
		}

	});

app.TrainerRouter = TrainerRouter;


})(window, undefined);