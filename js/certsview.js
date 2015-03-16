;(function(window, undefined){

	window.app = window.app || {};

	var CertsView = Backbone.View.extend({

		template: "certs",

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

	app.CertsView = CertsView;

})(window, undefined);