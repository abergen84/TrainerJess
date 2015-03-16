
window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./dist/style.css"},

        //views
        {url: "./js/appview.js"},
        {url: "./js/trainerview.js"},
        {url: "./js/bioview.js"},
        {url: "./js/servicesview.js"},
        {url: "./js/contactview.js"},
        {url: "./js/certsview.js"},


        //router
        {url: "./js/router.js"}

        //model
        //{url: "./js/trainermodel.js"}        

    ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
        // start app?
         
        var trainer = new app.TrainerRouter();

    });

}
    
