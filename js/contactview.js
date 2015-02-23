;(function(window, undefined){

	window.app = window.app || {};

	var ContactView = Backbone.View.extend({

		template: "contact",

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

	app.ContactView = ContactView;

})(window, undefined);