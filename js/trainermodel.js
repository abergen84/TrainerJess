;(function(window, undefined){

	window.app = window.app || {};

	var TrainerModel = Backbone.Model.extend({

		initialize: function(opts){
			this.view = new TrainerView();
		}
	});

app.TrainerModel = TrainerModel;


})(window, undefined);