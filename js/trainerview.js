;(function(window, undefined){

	window.app = window.app || {};

	var TrainerView = Backbone.View.extend({

		// tagName: "div",
		// className: "maincontent",
		template: "homepage",

		render: function(){
			var self = this;
            $.get("./templates/" + this.template + ".html", function(template) {
                var html = $(template).html();
                self.$el.html(html);
            });
            // return this;
		},

		initialize: function(){
			this.render();
		}

	});

app.TrainerView = TrainerView;

})(window, undefined);