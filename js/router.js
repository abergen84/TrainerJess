;(function(window, undefined){

	window.app = window.app || {};

	var TrainerRouter = Backbone.Router.extend({

		routes: {
			"contact": "page4",
			"services": "page3",
			"bio": "page2",
			"*default": "page1"
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

		page3: function(){
			this.hideAll();
			this.servicesview.render();
		},

		page4: function(){
			this.hideAll();
			this.contactview.render();
		},

		initialize: function(){
			this.appview = new app.AppView();

			this.trainerview = new app.TrainerView();
			this.appview.$el.append(this.trainerview.el);  //sticks the trainerview underneath the "#content" i created on index.html, because el was defined under appview as being #content
		
			this.bioview = new app.BioView();
			this.appview.$el.append(this.bioview.el);

			this.servicesview = new app.ServicesView();
			this.appview.$el.append(this.servicesview.el);

			this.contactview = new app.ContactView();
			this.appview.$el.append(this.contactview.el);

			this.views = [this.trainerview, this.bioview, this.servicesview, this.contactview];


			Backbone.history.start();
		}

	});

app.TrainerRouter = TrainerRouter;


})(window, undefined);