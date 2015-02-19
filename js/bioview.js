;(function(window, undefined){

	window.app = window.app || {};

	var BioView = Backbone.View.extend({

		template: "bio",

		getTemplate: function(template){
			return $.get("./templates/" + this.template + ".html").then(function(data){
				return data;
			});
		},

		events: {
			"click #bio": "render"
		},

		render: function(){
			$.when(this.getTemplate(this.template)).then(function(template){
				$('content').html(template);
			});
		},

		initialize: function(){
			this.render();
		}
	});


app.BioView = BioView;




})(window, undefined);