;(function(window, undefined){

	window.app = window.app || {};

	var TrainerView = Backbone.View.extend({

		// tagName: "div",
		// className: "maincontent",
		template: "homepage",

		getTemplate: function(template){
			 return $.get("./templates/" + this.template + ".html").then(function(data) {
			 	console.log(data);
			 	return data;
            });
		},

		render: function(){
            $.when(
            	this.getTemplate(this.template)
            	).then(function(template){
            	$('.content').html(template);
            });
		},

		initialize: function(){
			// this.render();
		}

	});

app.TrainerView = TrainerView;

})(window, undefined);