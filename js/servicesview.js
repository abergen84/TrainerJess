;(function(window,undefined){

	window.app = window.app || {};

	var ServicesView = Backbone.View.extend({

		template: "services",

		getTemplate: function(){
			return $.get("./templates/" + this.template + ".html").then(function(data){
				return data;
			});
		},

		render: function(){
			$.when(this.getTemplate(this.template)).then(function(template){
				$('.content').html(template);
			});
		}


	});

	app.ServicesView = ServicesView;

})(window, undefined);